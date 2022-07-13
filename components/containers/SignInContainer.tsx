import React from 'react';
import {onLogin} from "services/UserService";
import { useRouter } from 'next/router'

const SignInContainer = () => {
  const router = useRouter()

  const onAuthenticate = () => {
    const email: string = (document.getElementById("email") as HTMLInputElement).value;
    const password: string = (document.getElementById("password") as HTMLInputElement).value;
    onLogin(email, password).then(resp => {
      if(resp.status !== 200) return;
      let user = resp.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('email', user.email);
      localStorage.setItem('token', user.token);
      router.push("/").then(() => router.reload())
    })
  }

  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row flex-center py-5">
            <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
              <a className="d-flex flex-center text-decoration-none mb-4">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/logo-01.png" alt="phoenix" width={58}/>
                </div>
              </a>
              <div className="text-center mb-7">
                <h3>Sign In</h3>
                <p className="text-700">Get access to your account</p>
              </div>
              <button className="btn btn-phoenix-secondary w-100 mb-3"><span
                className="fab fa-google text-danger me-2 fs--1"/>Sign in with google
              </button>
              <button className="btn btn-phoenix-secondary w-100"><span
                className="fab fa-facebook text-primary me-2 fs--1"/>Sign in with facebook
              </button>
              <div className="position-relative mt-4">
                <hr className="bg-200"/>
                <div className="divider-content-center">or use email</div>
              </div>
              <div className="mb-3 text-start">
                <label className="form-label" htmlFor="email">Email address</label>
                <div className="form-icon-container">
                  <input className="form-control form-icon-input"
                         id="email"
                         type="email" placeholder="name@example.com"/>
                  <span
                    className="fas fa-user text-900 fs--1 form-icon"/>
                </div>
              </div>
              <div className="mb-3 text-start">
                <label className="form-label" htmlFor="password">Password</label>
                <div className="form-icon-container">
                  <input id={"password"} className="form-control form-icon-input" type="password"
                         placeholder="Password"/>
                  <span
                    className="fas fa-user text-900 fs--1 form-icon"/>
                </div>
              </div>
              <div className="row flex-between-center mb-7">
                <div className="col-auto">
                  <div className="form-check mb-0">
                    <input className="form-check-input" id="basic-checkbox"
                           type="checkbox" defaultChecked/>
                    <label
                      className="form-check-label mb-0" htmlFor="basic-checkbox">Remember me</label>
                  </div>
                </div>
                <div className="col-auto"><a className="fs--1 fw-semi-bold">Forgot Password?</a></div>
              </div>
              <button onClick={onAuthenticate} className="btn btn-primary w-100 mb-3">Sign In</button>
              <div className="text-center"><a className="fs--1 fw-bold" href={"/signup"}>Create an account</a></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default SignInContainer;