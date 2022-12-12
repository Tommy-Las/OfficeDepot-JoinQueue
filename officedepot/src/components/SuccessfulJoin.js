import logo from "../assets/OfficeDepotLogo.png";
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";

function SuccessfulJoin(){
    return <div>
        <img src={logo} alt="logo" id="logo" />
            <div className="successContainer">
                <h1 id="success-message">You successfully joined the queue!</h1>
                <h1 id="wait-time">Wait Time:</h1>
                <h2 id="time">20 minutes</h2>
                <Link to="/">
                    <Button variant="contained" id="back-button">back</Button>
                </Link>
            </div>
    </div>
}

export default SuccessfulJoin