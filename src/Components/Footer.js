import React from 'react';
import styles from './Footer.module.css';
import facebookIcon from '../assets/images/instagram.webp';
import instagramIcon from '../assets/images/x.webp';
import twitterIcon from '../assets/images/fb.png';
var Footer = function () {
    return (React.createElement("footer", { className: styles.footer },
        React.createElement("div", { className: styles.logo },
            React.createElement("a", { href: '/bookings' },
                React.createElement("h2", { className: 'company' }, "Rent A Car"))),
        React.createElement("div", { className: styles.contact },
            React.createElement("a", { href: '/contact-us' },
                React.createElement("h3", null, "Contact US"))),
        React.createElement("div", { className: styles.social },
            React.createElement("a", { href: "https://www.facebook.com" },
                React.createElement("img", { src: facebookIcon, alt: "Facebook" })),
            React.createElement("a", { href: "https://www.instagram.com" },
                React.createElement("img", { src: instagramIcon, alt: "Instagram" })),
            React.createElement("a", { href: "https://www.twitter.com" },
                React.createElement("img", { src: twitterIcon, alt: "Twitter" })))));
};
export default Footer;
