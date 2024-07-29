import React from "react";

function Footer() {
  return (
    <footer>
      <div className="block">
        <h2>Связаться со мной</h2>
        <div className="bb">
          <div className="media">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/iuna_999?igsh=MThiNTU5N3RmZDFsMw=="
            >
              <div className="mediablock">
                <img src="/assets/icons/insta.svg" alt="icon" />{" "}
                <span>Instagram</span>
              </div>
            </a>
            <a
              target="_blank"
              href="https://web.telegram.org/a/#730218971"
              rel="noreferrer"
            >
              <div style={{ marginTop: 20 }} className="mediablock">
                <img src="/assets/icons/telegram.svg" alt="icon" />{" "}
                <span>Telegram</span>
              </div>
            </a>
          </div>
          <div className="media">
            <a
              target="_blank"
              href="https://wa.me/+77021032054"
              rel="noreferrer"
            >
              <div className="mediablock">
                <img src="/assets/icons/whatsapp.svg" alt="icon" />{" "}
                <span>WhatsApp</span>
              </div>
            </a>
            <div style={{ marginTop: 20 }} className="mediablock">
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
