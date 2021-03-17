import React, { useState } from 'react';
import './App.css';
import MaskedInput from './MaskedInput';

const initialValues = {
  cpf: '',
  cnpj: ''
};

function App() {
  const [values, setValues] = useState({});
  console.log(values);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="App">
      <h1>Máscara CPF e CNPJ</h1>
      <MaskedInput
        name="cpf"
        mask="999.999.999-99"
        value={values.cpf}
        onChange={handleChange}
      />
       <MaskedInput
        name="cnpj"
        mask="99.999.999/9999-99"
        value={values.cnpj}
        onChange={handleChange}
        />

      <button onClick={() => setValues(initialValues)}>Limpar</button>
    </div>
  );
}

export default App;
