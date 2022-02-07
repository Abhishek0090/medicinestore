import React from "react";
import { useState } from "react";
import "./validationcss/signup.css";

const SignUp = () => {
  const [signUp, setSignUp] = useState({ name: "", email: "", password: "" });

  const handleSubmit = () => {};

  const onChange = (e) => {
    setSignUp({ [e.target.value]: e.name });
  };

  return (
    <div className="signupdiv">
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            value=""
            required
          />{" "}
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            value=""
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
      
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
