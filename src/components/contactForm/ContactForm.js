import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="tel" placeholder="Phone number in the format 123-456-7890" pattern="\d{3}-\d{3}-\d{4}" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

