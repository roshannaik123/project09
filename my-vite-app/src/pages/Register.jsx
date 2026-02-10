import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      navigate("/dashboard");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 shadow-lg w-80"
      >
        <h2 className="text-xl mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="border w-full mb-3 p-2"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full mb-3 p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full mb-3 p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-600 text-white w-full p-2">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
