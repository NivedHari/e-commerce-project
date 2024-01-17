import { useRef,useContext } from "react";
import AuthContext from "../store/auth-context";
import {useHistory} from 'react-router-dom';


const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGsfKHWAjmDu8yEHWUSWa8NmvoH1Vnv0s";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        history.replace('/store');
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
    console.log(enteredEmail);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5" style={{ maxWidth: "800px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control form-control-lg"
              ref={emailInputRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Your Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control form-control-lg"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
