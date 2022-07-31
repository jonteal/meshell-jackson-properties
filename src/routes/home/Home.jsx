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

            <Outlet />
        </div>
  );
}
 
export default Home;