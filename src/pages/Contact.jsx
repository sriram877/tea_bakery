import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.match(/^[A-Za-z ]+$/)) {
      setError("Name must contain only letters");
      setSuccess("");
      setName('')
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter valid email");
      setSuccess("");
    
      return;
    }

    setError("");
    setSuccess("Form submitted successfully!");
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
}

export default Contact;