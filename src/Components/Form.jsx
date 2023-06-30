import React, { useState } from "react";
import { useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 5) {
      setError("Error!! Chequea nuevamente la info");
      setTimeout(() => {
        setError('');
      }, 4000);
      return;
    } else if (!email.includes("@")) {
      setError("Error!! Chequea nuevamente la info");
      setTimeout(() => {
        setError('');
      }, 4000);
      return;
    }
    setSuccessMessage(`Genial ${name}, ya te enviamos un mail`);
    setError('');
  };

  useEffect(() => {
    if (successMessage) {
      const mssg = setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
      return () => clearTimeout(mssg);
    }
  }, [successMessage]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Form;
