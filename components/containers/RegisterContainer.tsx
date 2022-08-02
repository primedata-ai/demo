import React, {FormEvent} from 'react';
import {onSignup} from "services/UserService";
import {useRouter} from 'next/router'
import {showNotify} from "lib/notification";
import {identify} from "lib/track";

const RegisterContainer = () => {
  const router = useRouter()

  const onRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // @ts-ignore
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    const name: string = formProps.name?.toString();
    const email: string = formProps.email?.toString();
    const password: string = formProps.password?.toString();
    const confirm_password: string = formProps.confirm_password?.toString();

    if(password !== confirm_password) {
      showNotify("Bạn nhập mật khẩu chưa khớp kìa!", null, "danger");
      return;
    }

    onSignup(name, email, password).then(resp => {
      if (resp.status !== 200) {
        showNotify(resp.data?.message, null, "danger");
        return;
      }
      let user = resp.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('email', user.email);
      localStorage.setItem('token', user.token);
      identify(user)
      router.push("/").then(() => router.reload())
    })
  }

  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row flex-center py-5">
            <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3"><a
              className="d-flex flex-center text-decoration-none mb-4" href="/">
              <div className="d-flex align-items-center"><img src="/images/icons/logo-01.png" alt="phoenix"
                                                              width={58}/></div>
            </a>
              <div className="text-center mb-7">
                <h3>Sign Up</h3>
                <p className="text-700">Create your account today</p>
              </div>
              <button className="btn btn-phoenix-secondary w-100 mb-3"><span
                className="fab fa-google text-danger me-2 fs--1"/>Sign up with google
              </button>
              <button className="btn btn-phoenix-secondary w-100"><span
                className="fab fa-facebook text-primary me-2 fs--1"/>Sign up with facebook
              </button>
              <div className="position-relative mt-4">
                <hr className="bg-200"/>
                <div className="divider-content-center">or use email</div>
              </div>
              <form onSubmit={onRegister}>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                  className="form-control" id="name" name="name" placeholder="Name"/></div>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="email">Email address</label>
                  <input className="form-control" id="email" name="email" type="email"
                                        placeholder="name@example.com"/></div>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                    className="form-control form-icon-input" id={"password"} name={"password"} type="password" placeholder="Password"/></div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="confirm_password">Confirm Password</label>
                    <input className="form-control form-icon-input" id={"confirm_password"} name={"confirm_password"} type="password"
                                           placeholder="Confirm Password"/></div>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" id="termsService" type="checkbox"/>
                  <label className="form-label" htmlFor="termsService">I accept the <a href="#!">terms </a>and
                    <a href="#!">privacy policy</a>
                </label>
                </div>
                <button type={"submit"} className="btn btn-primary w-100 mb-3">Sign up</button>
                <div className="text-center">
                  <a className="fs--1 fw-bold" href="/login">Sign in to an existing account</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default RegisterContainer;