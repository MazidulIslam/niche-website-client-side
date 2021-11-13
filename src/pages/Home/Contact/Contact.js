import React, { useState } from "react";
import axios from "axios";
import {
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
  DirectionsService,
} from "@react-google-maps/api";
import { useForm } from "react-hook-form";

const location = {
  lat: 23.791599,
  lng: 90.389099,
};

const Contact = ({ origin, destination }) => {
  // google map
  const [response, setResponse] = useState();
  const directionsCallback = (res) => {
    if (res != null) {
      setResponse(res);
    }
  };

  // contact form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://ancient-sands-65869.herokuapp.com/messages", data)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          alert("Sent Successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <h1 style={{ color: "#24C7AC" }}>Get In Touch</h1>

      <div style={{ width: "100%", margin: "0px auto" }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            backgroundColor: "#24C7AC",
            padding: "5%",
          }}
        >
          <input
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "5px",
              marginBottom: "8px",
              border: "0px",
            }}
            placeholder="Name"
            {...register("name", { required: true, maxLength: 200 })}
          />
          {}
          <br />
          <input
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "5px",
              marginBottom: "8px",
              border: "0px",
            }}
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          {}
          <br />
          <textarea
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "5px",
              marginBottom: "8px",
              border: "0px",
            }}
            placeholder="Write Message"
            {...register("message", { required: true, maxLength: 1000 })}
          />
          {}
          <br />

          <input
            type="submit"
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              padding: "15px",
              marginTop: "10px",
              color: "#24C7AC",
              border: "0px",
              width: "82%",
              borderRadius: "5px",
            }}
          />
        </form>

        <div
          style={{
            backgroundColor: "#24C7AC",
            padding: "2%",
          }}
        >
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
          >
            <GoogleMap
              // required
              id="direction-example"
              // required
              mapContainerStyle={{
                height: "50vh",
                width: "100%",
              }}
              // required
              zoom={12}
              // required
              center={location}
            >
              <DirectionsService
                // required
                options={{
                  origin: { origin },
                  destination: { destination },
                  travelMode: "DRIVING",
                }}
                // required
                callback={directionsCallback}
              />

              {response !== null && (
                <DirectionsRenderer
                  // required
                  options={{
                    directions: response,
                  }}
                />
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default Contact;
