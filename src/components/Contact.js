const Contact = () => {
  return (
     /*  eslint-disable @next/next/no-img-element */
    <section id="contact">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Contact Us"
          data-align="center"
        >
          Contact Us
        </h3>
        <div className="fn_cs_contact_info">
          <ul>
            <li>
              <div className="item">
                <p>
                Thank you for visiting our website. We're always happy to hear from our visitors, whether it's a question, feedback, or just to say hello.

                We aim to respond to all inquiries within 24 hours. If you're experiencing an urgent issue outside of our regular hours, please leave a voicemail or send us an email, and we'll get back to you as soon as possible.

                </p>
                <p>
                We also invite you to connect with us on social media. You can follow us on Twitter, Facebook, Instagram and LinkedIn to stay up to date with our latest news and updates.
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Phone</h4>
                <h3>
                  <a href="tel:+919691275304">+91 96912 75304</a>
                </h3>
                <h4 className="lable">Email</h4>
                <h3>
                  <a href="mailto:ggutechnical@gmail.com">
                    ggutechnical@gmail.com
                  </a>
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Office</h4>
                <h3>C.G, Koni, Bilaspur, Chhattisgarh 495009</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="fn_cs_contact_form">
          <form
            action="/"
            method="post"
            className="contact_form"
            id="contact_form"
            autoComplete="off"
          >
            <div className="input_list">
              <ul>
                <li>
                  <input id="name" type="text" placeholder="Your Name *" />
                </li>
                <li>
                  <input id="email" type="text" placeholder="Your Email *" />
                </li>
                <li>
                  <input
                    id="tel"
                    type="text"
                    placeholder="Your Phone (optional)"
                  />
                </li>
                <li>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Topic (optional)"
                  />
                </li>
                <li className="full">
                  <textarea
                    id="message"
                    placeholder="Your Message *"
                    defaultValue={""}
                  />
                </li>
                <li className="full">
                  <label className="fn__checkbox">
                    <input type="checkbox" />
                    <span className="fn__checkmark">
                      <img src="/svg/checked.svg" alt="" className="fn__svg" />
                    </span>
                    <p>
                      I’m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </p>
                  </label>
                  <div className="mw300">
                    <a
                      id="send_message"
                      href="#"
                      className="metaportal_fn_button full"
                    >
                      <span>Send Message</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success="Your message has been received, We will contact you soon."
            />
            <div className="empty_notice">
              <span>! Please Fill Required Fields !</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
