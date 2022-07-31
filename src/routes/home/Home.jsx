import { Outlet } from "react-router";
import Slider from "../../components/slider/Slider";



import './home.css';

const Home = () => {
  return (
    <div className="home-container">
            <h1 className="home-title">Ozark Pepper Company</h1>

            <div>
                <Slider />
            </div>

           {/* <div className="media-container">
                <h2>Media Acknowledgements</h2>
            </div> */}

            <div className="directory-container">
                <h2>Shop Directory</h2>
            </div>

            <div className="featured-items-container">
                <h2>Featured Goods</h2>
            </div>

            <div className="join-mailing-container">
                <h3>Stay up to date on new goodies!</h3>
                <p>Sign up for our mailing list and be in the know when new sauces and other items become available!</p>
                
                <div className="email-container">
                    <input type="email" placeholder="Enter email" />
                    <button className="info-contact-button">SUBSCRIBE</button>
                </div>
            </div>

            <Outlet />
        </div>
  );
}
 
export default Home;