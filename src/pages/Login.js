import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./Login.css";
import { requestsGet } from "../requestsToServer.js";

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function fetchData() {
    try {
      const data = await requestsGet(
        `/userspass?username=${inputs.username}&password=${inputs.password}`
      );

      console.log(data);
      let exist = false;
      if (data.length !== 0) {
        {
          const dataUser = await requestsGet(
            `/users?username=${inputs.username}`
          );

          var currentUser = {
            id: dataUser[0].id,
            username: dataUser[0].username,
            isManager: data[0].isManager
          }
          console.log(currentUser);

          var json = JSON.stringify(currentUser);
          localStorage.setItem("currentUser", json);
          exist = true;
          window.location.href = "/";
        }
      }
      if (exist === false) {
        alert("Username or password is incorrect");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    fetchData();
  };

  return (
    <div dir="rtl" className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>כניסה</h1>
        <div className="form-group">
          <label htmlFor="username">שם משתמש:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">סיסמה:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">כניסה</button>
        <div>
          <Link to={`/register`}>הרשמה</Link>
        </div>
        <div>
          <Link to={`/ArgazKelim/Home`}>חזרה לדף הבית</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
