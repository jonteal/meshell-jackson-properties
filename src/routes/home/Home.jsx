import { Outlet } from "react-router";
import Slider from "../../components/slider/Slider";



import './home.css';

const Home = () => {
  return (
    <div className="home-container">
            <h1 className="home-title">Meshell-Jackson Properties</h1>

            <div>
                <Slider />
            </div>

            <div>
              Follow us | @meshell-jackson-properties!
            </div>

            <p>
              Meshell-Jackson Properties, LLC | email: info@meshell-jackson.com
            </p>

            <Outlet />
        </div>
  );
}
 
export default Home;