import React from "react";
import UserSubmitButton from "./UserSubmitButton";
import UserStore from "../../store/UserStore";

const LoginForm = () => {
  let { LoginFormData } = UserStore();

  return (
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5">
            <h4>Enter Your Email</h4>
            <p>
              A verification code will be sent to the email address you provide
            </p>
            <input
              value={LoginFormData.email}
              placeholder="Email Address"
              type="email"
              className="form-control"
            />
            <UserSubmitButton
              submit={false}
              className="btn mt-3 btn-success"
              text="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
