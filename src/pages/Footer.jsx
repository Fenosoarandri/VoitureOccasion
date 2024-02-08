import '../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
  { icon: faInstagram, url: 'https://www.instagram.com' },
  { icon: faFacebook, url: 'https://www.facebook.com' },
  { icon: faTwitter, url: 'https://www.twitter.com' },
  { icon: faSnapchat, url: 'https://www.snapchat.com' }
];

const contactDetails = [
  { label: '+ 261 45 879 44', type: 'phone' },
  { label: 'fitahianaroland@gmail.com', type: 'email' }
];

function Footer() {
  return (
    <div id="footerContainer">
      <div id="about">
        <b>About</b>
        <p>Fenosoa Randriamamitina</p>
        <p>Ranaivoarimanana Fitahiana Roland</p>
        <p>Aina Ravelonarivo</p>
        <p>Danny Perry</p>
      </div>
      <div id="middle">
        <b>Follow us</b>
        <div id='svgContainer'>
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={link.url}>
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
      <div id="contact">
        <b>Contact</b>
        {contactDetails.map((detail, index) => (
          <p key={index}>{detail.label}</p>
        ))}
      </div>
    </div>
  );
}

export default Footer;
