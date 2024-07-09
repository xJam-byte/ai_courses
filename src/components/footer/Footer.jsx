import React from "react";

function Footer() {
  return (
    <footer>
      <div className="block">
        <h2>Связаться со мной</h2>
        <div className="bb">
          <div className="media">
            <div className="mediablock">
              <img src="/assets/icons/insta.svg" alt="icon" />{" "}
              <span>Instagram</span>
            </div>
            <div style={{marginTop: 20}} className="mediablock">
              <img src="/assets/icons/telegram.svg" alt="icon" />{" "}
              <span>Telegram</span>
            </div>
          </div>
          <div className="media">
            <div className="mediablock">
              <img src="/assets/icons/whatsapp.svg" alt="icon" />{" "}
              <span>WhatsApp</span>
            </div>
            <div style={{marginTop: 20}} className="mediablock">
              <img src="/assets/icons/email.svg" alt="icon" />{" "}
              <span>E-Mail</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lowestBlock">
        <p>ARG.Design</p>
      </div>
    </footer>
  );
}

export default Footer;
