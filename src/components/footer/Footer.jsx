import { Link } from 'react-router-dom';
import FBIcon from '../../assets/icons/fb_logo_icon.png';
import TwitterIcon from '../../assets/icons/twitter_logo_icon.png';
import IGIcon from '../../assets/icons/ig_logo_icon.png';
import TikTokIcon from '../../assets/icons/tt_logo_icon.png';

import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-item-container'>
                <h4 className='footer-header'>CONTACT INFO</h4>
                <p>123 Main St</p>
                <p>Fayetteville, AR 72701</p>
                <p>555-555-5555</p>
                <p>info@ozarkairbnb.com</p>
            </div>
            <div className='footer-item-container'>
                <h4 className='footer-header'>QUICK LINKS</h4>
                <Link to='/'>HOME</Link>
                <Link to='/rentals'>VACATION RENTALS</Link>
                <Link to='management'>MANAGEMENT</Link>
                <Link to='about'>ABOUT</Link>
                <Link to='contact'>CONTACT US</Link>
            </div>
            <div className='footer-item-container'>
                <h4 className='footer-header'>HELP</h4>
            </div>
            <div className='footer-item-container'>
                <h4 className='footer-header'>SOCIAL</h4>
                <div className='footer-social-container'>
                    <a href="https://www.facebook.com/ozarkairbnb" rel="noreferrer noopener" target="_blank">
                        <img className='footer-social-icon' src={FBIcon} alt="Clickable Icon of Facebook logo" />
                    </a>

                    <a href="" rel="noreferrer noopener" target="_blank">
                        <img className='footer-social-icon' src={TwitterIcon} alt="Clickable Icon of Twitter logo" />
                    </a>

                    <a href="https://instagram.com/ozark.airbnb" rel="noreferrer noopener" target="_blank">
                        <img className='footer-social-icon' src={IGIcon} alt="Clickable Icon of Instagram logo" />
                    </a>
                    
                    <a href="https://www.tiktok.com/@ozark.airbnb" rel="noreferrer noopener" target="_blank">
                        <img className='footer-social-icon' src={TikTokIcon} alt="Clickable Icon of TikTok logo" />
                    </a>
                    
                </div> 
            </div>
            <div className='footer-item-container'>
                <h4>Copyright© 2022</h4>
                <p>Ozark Airbnb, LLC</p>
                <p>All Rights Reserved</p>
            </div>
        </div>
    );
}
 
export default Footer;