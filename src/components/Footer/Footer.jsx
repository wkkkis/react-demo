import React from "react";
import s from './Footer.module.css';
import {NavLink} from "react-router-dom";
import github from "../../assets/images/github.png"
import instagram from "../../assets/images/instagram.png"
import facebook from "../../assets/images/facebook.png"
import telegram from "../../assets/images/telegram.png"
import whatsApp from "../../assets/images/whatsapp.png"

const Footer = () => {
    return (
        <footer className={s.footerMain}>
            <div className={s.imageFooter}>
                <div className={s.textFooter}>
                    <NavLink to="/profile"><h1>I<span>S</span>S<span>.</span></h1></NavLink>
                </div>
                <div className={s.socialFooter}>
                    <a href="https://github.com/wkkkis"><img className={s.github} src={github} alt=""/></a>
                    <a href="https://www.facebook.com/profile.php?id=100026994910022"><img className={s.facebook} src={facebook} alt=""/></a>
                    <a href="https://www.instagram.com/layryc/"><img className={s.instagram} src={instagram} alt=""/></a>
                    <a href="https://t.me/hagelu"><img className={s.telegram} src={telegram} alt=""/></a>
                    <a href="https://wa.me/+996500100805"><img className={s.whatsapp} src={whatsApp} alt=""/></a>
                </div>
            </div>
            <div className={s.aboutMe}>
                <div>
                    <a href="#">my blog</a><br/>
                    <a href="#">about this project</a>
                </div>
                <div>
                    <a href="#">my blog</a><br/>
                    <a href="#">about this project</a>
                </div>
                <div>
                    <a href="#">my blog</a><br/>
                    <a href="#">about this project</a>
                </div>
                <div>
                    <a href="#">my blog</a><br/>
                    <a href="#">about this project</a>
                </div>
            </div>
            <div className={s.dateSite}><br/>
                <span>© iSS social network, 2021</span>
            </div>
        </footer>
    )
}

export default Footer;