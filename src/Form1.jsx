import React, { useState } from 'react';

 function SimpleForm() {
  // State to hold form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }else if(name==='password'){
        setpassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    alert(`Name: ${name}\nEmail: ${email}\n${password}`);
    // You can handle form submission here (e.g., send data to an API)
  };

  return (
    // <fieldset style={{display:'flex',JustifyContent:'center', marginTop:'8px'}}>
    <fieldset style={{height:'200px', width:'400px',display:'flex',justifyContent:'center',alignItems:'center'}}>

    <form onSubmit={handleSubmit}>
    <div className="form-cont">
      <div class='nme'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder='Enter Your Name'
          onChange={handleChange}
        />
      </div>
      <div class='em'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder='Enter your email'
          onChange={handleChange}
        />
      </div>
      <div class='pass'>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          placeholder='Enter your Password'
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      </div>
    </form>
    </fieldset>
  );
}

export default SimpleForm;
