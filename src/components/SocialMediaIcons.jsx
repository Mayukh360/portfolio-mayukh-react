import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import linkdn from '../assets/linkedin.png'
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/mayukh-chatterjee-962017256/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkdn} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/Chat79045Mayukh"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitter} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/mkc360"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebook} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/mayukhchatterjee/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instagram} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
