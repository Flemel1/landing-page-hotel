import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__menu">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Popular Hotel</li>
          </ul>
        </div>
        <div className="footer__wrapper__support">
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer__icon">
          <Icon icon="akar-icons:instagram-fill" color="#fff" height="30" />
          <Icon icon="akar-icons:facebook-fill" color="#fff" height="30" />
          <Icon icon="ant-design:twitter-circle-filled" color="#fff" height="33" />
      </div>
    </div>
  );
};

export default Footer;
