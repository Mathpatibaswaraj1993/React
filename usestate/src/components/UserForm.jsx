import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
  });

  const [submittedData, setSubmittedData] = useState(null);

  

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Information Form</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      /><br /><br />
      
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      /><br /><br />
      
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      /><br /><br />
      
      <label>Gender: </label>
      <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
      <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
      <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
      <br /><br />
      
      <label>Hobbies: </label>
      <label><input type="checkbox" name="hobbies" value="Reading" onChange={handleChange} /> Reading</label>
      <label><input type="checkbox" name="hobbies" value="Gaming" onChange={handleChange} /> Gaming</label>
      <label><input type="checkbox" name="hobbies" value="Traveling" onChange={handleChange} /> Traveling</label>
      <br /><br />
      
      <button onClick={handleSubmit}>Submit</button>

      <hr />
      {submittedData && (
        <div>
          <h3>Submitted Info:</h3>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Hobbies:</strong> {submittedData.hobbies.join(", ") || "None"}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
