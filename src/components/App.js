import React, { useState, useRef } from "react";
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message)
 *
 *
 */
const initialForm = {
  name: "",
  email: "",
};

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function App() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");

  const checkInput = () => {
    setForm({
      ...form,
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = form.email;
    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }
    setError(false);
    setForm(initialForm);
  };

  return (
    <div className="App">
      <h1>How About Them Apples</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input id="name" name="name" ref={nameRef} onChange={checkInput} />
            <br></br>
            <p>Email</p>
            <input
              id="email"
              name="name"
              ref={emailRef}
              onChange={checkInput}
            />
            {error && <h2 style={{ color: "red" }}>Email is invalid</h2>}
          </label>
        </fieldset>
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
      {form.email != undefined && (
        <div>
          <h1>{form.name}</h1>
          <h2>{form.email}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
