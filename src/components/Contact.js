import emailjs from "emailjs-com";
import React from "react";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cg80r2q",
        "template_9gtz8ib",
        e.target,
        // "user_7MjyIZRGK6YJxqnVWa0UQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <div className="form-wrapper flex">
        <h2>
          Get in <br />
          <span>touch</span>
        </h2>
        <form onSubmit={sendEmail}>
          <div className="col-8 form-group mx-auto">
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email "
              name="email"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-8 pt-3 mx-auto">
            <button
              id="submit"
              type="submit"
              className="button"
              value="Submit"
              onClick="validation()"
              alert="Succesfully submitted!"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
      <img className="img" src="/images/contact-image.jpg" alt="portrait-pic" />
    </div>
  );
}
