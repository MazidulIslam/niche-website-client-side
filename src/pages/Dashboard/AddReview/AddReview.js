import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:7000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Reviewed Successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <div style={{ width: "80%", margin: "20px auto" }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            backgroundColor: "#24C7AC",
            padding: "10%",
            borderRadius: "10px",
          }}
        >
          <input
            defaultValue={user?.name || "Your Name"}
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "5px",
              marginBottom: "8px",
              border: "0px",
            }}
            {...register("name", { maxLength: 200 })}
          />
          {}
          <br />
          <textarea
            placeholder="Write review here"
            style={{
              width: "80%",
              height: "90px",
              padding: "15px",
              borderRadius: "5px",
              marginBottom: "8px",
              border: "0px",
            }}
            {...register("reviewText", {
              required: true,
              maxLength: 1000,
            })}
          />
          {}
          <br />
          <input
            placeholder="Give Ratings from 1-5"
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "5px",
              marginBottom: "8px",
              border: "0px",
            }}
            type="number"
            {...register("ratings")}
          />
          {}
          <br />

          <br />

          <input
            value="Submit Review"
            type="submit"
            style={{
              //   backgroundColor: "lightgray",
              fontSize: "1.2rem",
              fontWeight: "700",
              padding: "15px",
              marginTop: "10px",
              color: "#24C7AC",
              border: "0px",
              width: "80%",
              borderRadius: "5px",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
