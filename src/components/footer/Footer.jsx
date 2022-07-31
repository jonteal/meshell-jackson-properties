import { Link } from 'react-router-dom';
import FBIcon from '../../assets/icons/fb_logo_icon.png';
import TwitterIcon from '../../assets/icons/twitter_logo_icon.png';
import IGIcon from '../../assets/icons/ig_logo_icon.png';

import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-item-container'>
                <h4>CONTACT INFO</h4>
                <p>123 Main St</p>
                <p>Fayetteville, AR 72701</p>
                <p>555-555-5555</p>
                <p>ozarkpepperco@gmail.com</p>
            </div>
            <div className='footer-item-container'>
                <h4>QUICK LINKS</h4>
                <Link to='about'>ABOUT</Link>
                <Link to='contact'>CONTACT US</Link>
            </div>
            <div className='footer-item-container'>
                <h4>HELP</h4>
            </div>
            <div className='footer-item-container'>
                <h4>SOCIAL</h4>
                <div className='footer-social-container'>
                    <img className='footer-social-icon' src={FBIcon} alt="Clickable Icon of Facebook logo" />
                    <img className='footer-social-icon' src={TwitterIcon} alt="Clickable Icon of Twitter logo" />
                    <img className='footer-social-icon' src={IGIcon} alt="Clickable Icon of Instagram logo" />
                </div> 
            </div>
            <div className='footer-item-container'>
                <h4>Copyright© 2022</h4>
                <p>Ozark Pepper Company, LLC</p>
                <p>All Rights Reserved</p>
            </div>
        </div>
    );
}
 
export default Footer;