import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(data));

      navigate("/dashboard");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 shadow-lg w-80"
      >
        <h2 className="text-xl mb-4 text-center">Login</h2>

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

        <button className="bg-blue-600 text-white w-full p-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
