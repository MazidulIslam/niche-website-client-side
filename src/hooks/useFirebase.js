import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/Login/Firebase/firebase.init";

firebaseInitialize();
const useFirebase = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Register with email and password
  const userRegister = (name, phone, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const newUser = { email, displayName: name, phone: phone };

        setUser(newUser);
        // // save user to database
        saveUserToDatabase(email, name, phone, "POST");
        // // send name to firebase

        updateProfile(auth.currentUser, { displayName: name, phone: phone })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
        // const user = userCredential.user;
        setAuthError("");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  // Login with email and password
  const userLogin = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      });
    setIsLoading(false);
  };

  // signInWithGoogle
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUserToDatabase(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // user state observe
  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // is admin
  useEffect(() => {
    fetch(`http://localhost:7000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  // Sign Out user
  const userLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    setIsLoading(false);
  };
  // save user to database
  const saveUserToDatabase = (email, displayName, phone, method) => {
    const user = { email, displayName, phone };
    fetch("http://localhost:7000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };
  return {
    userRegister,
    userLogin,
    userLogout,
    isLoading,
    user,
    authError,
    admin,
    signInWithGoogle,
  };
};
export default useFirebase;
