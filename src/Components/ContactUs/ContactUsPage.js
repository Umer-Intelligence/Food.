import ContactTopBar from "./ContactTopBar.js";

const ContactUs = () => {
  return (
    <div>
      <div>
        <ContactTopBar />
      </div>
      <div className="Conatct-heading">
        <div className="heading-text">Contact Us</div>
        <div className="heading-para">
          Food.ltd headquarters are located in the midst of commercial square in
          Sandiego.
        </div>
        <div className="image">
          <img
            src={`https://www.landayroberts.com/_cache/static_map_217047868acbf9e413e3ceabfc4a0646.png`}
            alt={""}
          />
        </div>
        <div className="heading-text1">
          <button className="contact-button">Other ways to Contact</button>
        </div>
        <div className="image">
          <img
            src={`https://www.vectorlogo.zone/logos/gmail/gmail-ar21.png`}
            width={400}
            alt={""}
          />
        </div>
        <div className="heading-text1">
          <button className="contact-button">food1824@gmail.com</button>
        </div>
        <div className="image">
          <img
            src={`https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-Meaning.jpg`}
            width={400}
            alt={""}
          />
        </div>
        <div className="heading-text1">
          <button className="contact-button">foodfood.Facebook.com</button>
        </div>
        <div className="image">
          <img
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3y3NTx_kyYzyOON3Tix2BPPGol4CdY2kURA&usqp=CAU`}
            width={400}
            alt={""}
          />
        </div>
        <div className="heading-text1">
          <button className="contact-button">023-2248223231</button>
        </div>
        <div className="image">
          <img
            src={`https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg`}
            width={400}
            height={200}
            alt={""}
          />
        </div>
        <div className="heading-text1">
          <button className="contact-button">@Food.ltd</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
