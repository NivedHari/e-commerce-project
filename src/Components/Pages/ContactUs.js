import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Layout/Footer";

const ContactUs = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    console.log(user);

    try {
      const response = await fetch(
        "https://react-http-c2562-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("POST request successful. Server response:", data);
    } catch (error) {
      console.error("There was an error with the POST request:", error);
    }
  };

  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <form onSubmit={submitHandler} className="border p-5 bg-dark text-light">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="form-control form-control-lg"
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="form-control form-control-lg"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number:
          </label>
          <input
            id="phone"
            type="number"
            className="form-control form-control-lg"
            ref={phoneRef}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
