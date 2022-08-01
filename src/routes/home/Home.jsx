import { Outlet } from "react-router";
import Slider from "../../components/slider/Slider";



import './home.css';

const Home = () => {
  return (
    <div className="home-container">
            <h1 className="home-title">Ozark Airbnb</h1>

            <div>
                <Slider />
            </div>

            <div>
              Follow us | @ozarkairbnb!
            </div>

            <p>
              Ozark Airbnb, LLC | email: info@ozarkairbnb.com
            </p>

            <Outlet />
        </div>
  );
}
 
export default Home;