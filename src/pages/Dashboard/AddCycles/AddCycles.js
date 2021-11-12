import axios from "axios";
import { useForm } from "react-hook-form";

const AddCycles = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:7000/cycles", data).then((res) => {
      // console.log(res.data);
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <h1 style={{ color: "#24C7AC" }}>Add Cycles</h1>
      <div style={{ width: "60%", margin: "0px auto" }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            backgroundColor: "#24C7AC",
            padding: "15%",
            borderRadius: "10px",
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
            placeholder="Enter Title"
            {...register("title", { required: true, maxLength: 200 })}
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
            placeholder="Write Description"
            {...register("description", { required: true, maxLength: 1000 })}
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
            placeholder="Price"
            type="number"
            {...register("price", { required: true })}
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
            placeholder="Brand"
            type="text"
            {...register("brand")}
          />
          {}
          <br />
          <select
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "5px",
              marginBottom: "8px",
              border: "0px",
            }}
            {...register("type")}
          >
            <option value="electric">Electric</option>
            <option value="regular">Regular</option>
            <option value="foldabe">Foldable</option>
          </select>
          <br />

          <input
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "5px",
              marginBottom: "8px",
              border: "0px",
            }}
            placeholder="Enter Image Url"
            type="url"
            {...register("image")}
          />
          {}
          <br />
          <input
            type="submit"
            style={{
              backgroundColor: "lightgray",
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

export default AddCycles;
