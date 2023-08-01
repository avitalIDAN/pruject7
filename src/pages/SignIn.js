import { useState } from "react";
import "./signIn.css"
import { Link } from "react-router-dom";
import { requestsPost } from "../requestsToServer";

const Registration = () => {
  const [user, setUser] = useState({});
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleChangeI = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function fetchData() {
    try {
      let newInUserspass = {
        id: 0,
        username: user.username,
        password: user.password,
        isManager: 0,
      };
      console.log(newInUserspass);
      requestsPost(`/userspass`, newInUserspass);
      setUser({});
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchInfo() {
    try {
      let newInUser = {
        id: user.id,
        name: inputs.name || "name",
        username: user.username,
        email: inputs.email || "email",
        phone: inputs.phone || "0",
        address: inputs.address || "address",
      };
      setInputs({});
      console.log(newInUser);
      requestsPost(`/users`, newInUser);

    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      console.log(user);
      await fetchInfo();
      await fetchData();
      window.location.href = "/Login";
    }
    catch (error) {
      console.error(error);
    }
    
    
  };

  return (
  <div dir="rtl" className="registration-container">
  <form onSubmit={handleSubmit}>
    <h1>הרשמה</h1>
    <div className="form-group">
      <label htmlFor="name">שם:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={user.name || ""}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="username">שם משתמש:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={user.username || ""}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">סיסמה:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={user.password || ""}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone">מספר טלפון:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={user.phone || ""}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="address">כתובת:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={user.address || ""}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="id">תז:</label>
      <input
        type="text"
        id="id"
        name="id"
        value={user.id || ""}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">מייל:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={user.email || ""}
        onChange={handleChange}
      />
    </div>
    <button type="submit">הרשמה</button>
    <div>
      <Link to={`/Login`}>כניסה עם משתמש קיים</Link>
    </div>
  </form>
</div>

  );
};

export default Registration;