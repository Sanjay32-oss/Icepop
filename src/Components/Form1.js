import React, { useState } from 'react';

const Form1 = () => {
const [name, setname] = useState("");
const [age, setage] = useState("");
const [number, setnumber] = useState("");

const handlesub = (e) => {
e.preventDefault();
alert(`Data submitted successfully: ${name}, ${age}, ${number}`);
setname("");
setage("");
setnumber("");
}
  return (
    <div style={{ 
      width: "300px", 
      margin: "50px auto", 
      padding: "20px", 
      border: "1px solid #ccc", 
      borderRadius: "10px", 
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)" 
    }}>
      <h2 style={{ textAlign: "center" }}>User Form</h2>

      <form onSubmit={handlesub}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          required 
          name="name" 
          value={name} 
          onChange={(e) => setname(e.target.value)} 
          style={{ width: "100%", padding: "8px", margin: "5px 0" }}
        /><br/>

        <input 
          type="number" 
          placeholder="Enter your age" 
          required 
          name="age" 
          value={age} 
          onChange={(e) => setage(e.target.value)} 
          style={{ width: "100%", padding: "8px", margin: "5px 0" }}
        /><br/>

        <input 
          type="number" 
          placeholder="Enter your number" 
          required 
          name="number" 
          value={number} 
          onChange={(e) => setnumber(e.target.value)} 
          style={{ width: "100%", padding: "8px", margin: "5px 0" }}
        /><br/>

        <input 
          type="submit" 
          value="Submit" 
          style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        />
      </form>
    </div>
  );
};

export default Form1;
