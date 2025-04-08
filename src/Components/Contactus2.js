import React, { memo, useEffect, useState } from 'react';
import '../CSS/Sk2.css';
const Contactus2 = () => {
useEffect(() => {
document.body.classList.add('contact-page');
return () => {
document.body.classList.remove('contact-page'); 
};
}, []);

const [formData, setFormData] = useState({
firstName: '',
lastName: '',
age: '',
order: '',
phone: '',
city: '',
email: '',});

const handleChange = (e) => {
setFormData({...formData,[e.target.name]: e.target.value,});
};

const handleSubmit = (e) => {
e.preventDefault();
alert('Form Submitted:, formData');
window.location.reload()
};

return (
<>
<section id="Section12">
<br />
<form className="sect" onSubmit={handleSubmit}>
<h1 style={{ textAlign: 'center', fontSize: '2rem', color: 'whitesmoke' }}>
PLACE YOUR ORDER'S</h1>
<label for="firstName">First Name</label><br />
<input type="text" placeholder="Enter Your First Name" id="firstName" name="firstName" required style={{ height: '4vh' }}
value={formData.firstName} onChange={handleChange}/><br />

<label for="lastName">Last Name</label><br />
<input type="text" placeholder="Enter Your Last Name" id="lastName" name="lastName" required style={{ height: '4vh' }} value={formData.lastName} onChange={handleChange}
/><br />

<label for="age">Age</label><br />
<input type="number" placeholder="Enter Your Age" id="age" name="age" required style={{ height: '4vh' }} value={formData.age} onChange={handleChange}
/><br />

<label for="order">Order List</label><br />
<input type="text" placeholder="Enter Your Order" id="order" name="order" list="data-list1" required style={{ height: '4vh' }} value={formData.order} onChange={handleChange}
/><br />
<datalist id="data-list1">
<option value="Full Chocolate Package" />
<option value="Dark Chocolate Package" />
<option value="Chip Chocolate Package" />
<option value="Mint Chocolate Package" />
<option value="Almond Chocolate Package" />
<option value="Truffle Chocolate Package" />
</datalist>

<label for="phone">Phone Number</label><br />
<input type="tel" placeholder="Enter Your Phone Number" id="phone" name="phone" pattern="[0-9]{10}" required style={{ height: '4vh' }} value={formData.phone} onChange={handleChange}
/><br />

<label for="city">City</label><br />
<input type="text" placeholder="Enter Your City" id="city" name="city" required style={{ height: '4vh' }} value={formData.city} onChange={handleChange}
/><br />

<label for="email">E-Mail</label><br />
<input type="email" placeholder="Enter Your E-Mail ID" id="email" name="email" required style={{ height: '4vh' }} value={formData.email} onChange={handleChange}/><br /><br />

<button type="submit" style={{ cursor: 'pointer', margin: 'auto', display: 'block', width: '20vw' }}>Submit Order</button>
</form>
</section>
</>

);
};

export default memo(Contactus2);
