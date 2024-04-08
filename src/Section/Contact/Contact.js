import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact-section" className="section-wrapper">
      <span className="section-title">CONTACT</span>
      <span className="section-subtitle">COME AND SAY HI OR JUST DROP A LINE</span>
      <p className="text">Feel free to ask me!</p>
      <form className="form-wrapper">
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="text" id="email" name="email" placeholder="Email" />
        <input type="text" id="subject" name="subject" placeholder="Subject" />
        <textarea id="message" name="message" rows={5} placeholder="Message" />
        <button className="button">SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
