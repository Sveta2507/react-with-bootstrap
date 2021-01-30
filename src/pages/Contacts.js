import React from "react";
import insta from "../images/icons/instagram.svg";
import face from "../images/icons/facebook.svg";
import link from "../images/icons/linkedin.svg";
import disc from "../images/icons/discord.svg";
import classes from "./Contacts.module.css";

function Contacts() {
  return (
    <>
      <h2>Contacts</h2>;
      <address>
        <span>
          <a href="https://en.wikipedia.org/wiki/Houston" className={classes.a}>
            Houston, Texas, USA
          </a>
        </span>
        <span>
          <a href="tel:+183758275837" className={classes.a}>
            +183758275837
          </a>
        </span>
        <span>
          <a href="mailto:dnsdns.dn@googlemail.com" className={classes.a}>
            dnsdns.dn@googlemail.com
          </a>
        </span>
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
          <a href="https://www.linkedin.com/">LinkeDin</a>
          <img src={link} alt="linkedin" width="30" className={classes.icon} />
        </li>
        <li>
          <a href="https://discord.com/">Discord</a>
          <img src={disc} alt="discord" width="30" className={classes.icon} />
        </li>
      </ul>
    </>
  );
}

export default Contacts;
