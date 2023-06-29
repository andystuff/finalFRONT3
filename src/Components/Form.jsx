
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.length < 5 && !email.includes('@')) {
      setError('Error!! Chequea nuevamente la info');
      return;
    }

    setSuccessMessage(`Genial ${name}, ya te enviamos un mail`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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