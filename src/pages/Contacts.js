import React from "react";
import insta from "../images/icons/instagram.svg";
import face from "../images/icons/facebook.svg";
import link from "../images/icons/linkedin.svg";
import disc from "../images/icons/discord.svg";
import telega from "../images/icons/telegram.svg";
import classes from "./Contacts.module.css";

// import withLog from "../components/hoc/withLog";
import TestComponent from "../components/TestComponent";

function Contacts() {
  return (
    <>
      <TestComponent a="name" />
      <h2>Contacts</h2>;
      <address>
        <li>
          <a href="https://en.wikipedia.org/wiki/Houston" className={classes.a}>
            Houston, Texas, USA
          </a>
        </li>
        <li>
          <a href="tel:+183758275837" className={classes.a}>
            +183758275837
          </a>
        </li>
        <li>
          <a href="mailto:dnsdns.dn@googlemail.com" className={classes.a}>
            dnsdns.dn@googlemail.com
          </a>
        </li>
      </address>
      <ul>
        <li>
          <a href="https://www.instagram.com/?hl=ru">Instagram</a>
          <img
            src={insta}
            alt="instagram"
            width="30"
            className={classes.icon}
          />
        </li>
        <li>
          <a href="https://m.facebook.com/login/?locale2=ru_RU">Facebook</a>
          <img src={face} alt="facebook" width="30" className={classes.icon} />
        </li>
        <li>
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <img src={link} alt="linkedin" width="30" className={classes.icon} />
        </li>
        <li>
          <a href="https://discord.com/">Discord</a>
          <img src={disc} alt="discord" width="30" className={classes.icon} />
        </li>
        <li>
          <a href="https://t.me/somebody25">Telegram</a>
          <img
            src={telega}
            alt="telegram"
            width="30"
            className={classes.icon}
          />
        </li>
      </ul>
    </>
  );
}

export default Contacts;
