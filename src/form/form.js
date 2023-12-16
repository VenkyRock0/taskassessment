import React from "react";
import "./form.css";

function Form() {
  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <div>
          <h1>Form Submission</h1>
          <div className="name">
            <label className="input-name-label">Name</label>
            <input className="input-name" type="text" />
          </div>
          <div className="email">
            <label className="input-email-label">Email</label>
            <input className="input-email" type="email" />
          </div>
          <div className="order">
            <label className="input-order-label">Order Comments</label>
            <input className="input-order" type="text" />
          </div>
          <button className="submit">Form Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
