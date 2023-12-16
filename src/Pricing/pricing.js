import React, { useState } from "react";
import "./pricing.css";

function Pricing() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function submitHandler(event) {
    event.preventDefault();
    const response = fetch("maakeetoo.com/formapi/1011", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (response) {
      alert("Form data saved successfully!");
    } else {
      alert("There was an error saving your data.");
    }
  }

  function formHandler() {
    setIsFormVisible(true);
  }

  function formCloseHandler() {
    setIsFormVisible(false);
  }

  const highlightedPlan = Math.floor(numberOfUsers / 10) + 1;

  const handleSliderChange = (event) => {
    setNumberOfUsers(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div className="pricing-main">
        <h1 className="pricing-font">Pricing</h1>
        <p className="pricing-para">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>

      <div className="slide-bar">
        <h2>Number of Users: {numberOfUsers}</h2>
        <input
          type="range"
          min="0"
          max="30"
          step="1"
          value={numberOfUsers}
          onChange={handleSliderChange}
        />
      </div>

      <div class="pricing-table">
        <div className={numberOfUsers <= 10 ? "highlighted" : ""}>
          <div class="pricing-card free">
            <h3 class="pricing-card-title">Free</h3>
            <p class="pricing-card-price">$0/mo</p>
            <ul class="pricing-card-features">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button class="pricing-card-button" onClick={formHandler}>
              Sign up for free
            </button>
          </div>
        </div>
        <div
          className={
            numberOfUsers > 10 && numberOfUsers <= 20 ? "highlighted" : ""
          }
        >
          <div class="pricing-card pro">
            <h3 class="pricing-card-title">Pro</h3>
            <p class="pricing-card-price">$15/mo</p>
            <ul class="pricing-card-features">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button class="pricing-card-button" onClick={formHandler}>
              Get started
            </button>
          </div>
        </div>
        <div className={numberOfUsers > 20 ? "highlighted" : ""}>
          <div class="pricing-card enterprise">
            <h3 class="pricing-card-title">Enterprise</h3>
            <p class="pricing-card-price">$29/mo</p>
            <ul class="pricing-card-features">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button class="pricing-card-button" onClick={formHandler}>
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="formstyling">
        {isFormVisible && (
          <form onSubmit={submitHandler}>
            <div className="container">
              <div>
                <h1>Form Submission</h1>
                <div className="name">
                  <label className="input-name-label">Name</label>
                  <input
                    className="input-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="email">
                  <label className="input-email-label">Email</label>
                  <input
                    className="input-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="order">
                  <label className="input-order-label">Order Comments</label>
                  <textarea
                    className="input-order"
                    rows="5"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                  />
                </div>
                <button className="submit">Form Submit</button>
                <button className="closing" onClick={formCloseHandler}>
                  Close
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Pricing;
