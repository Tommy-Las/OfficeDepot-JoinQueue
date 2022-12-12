import logo from "../assets/OfficeDepotLogo.png";
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";

function Home(){
    return <div>
            <img src={logo} alt="logo" id="logo" />
            <div className="homeContainer">
                <h1>Welcome to Office Depot Print/Copy</h1>
                <h2>There is <span id="num_people">4</span> people waiting in line</h2>
                <h2>Wait Time:</h2>
                <h2 id="time">15 minutes</h2>
                <Link to="/join">
                    <Button variant="contained" id="home-button">Join Queue</Button>
                </Link>
            </div>

            <Outlet />
            
            </div>
}

export default Home;