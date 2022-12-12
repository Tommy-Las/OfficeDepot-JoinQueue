import logo from "../assets/OfficeDepotLogo.png";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Outlet, Link } from "react-router-dom";

function JoinQueueForm(){
    const options = ['Copy', 'Print', 'Copy & Print'];

    return <div id="queue-page">
            <img src={logo} alt="logo" id="logo" />
            <div id="form-container">
                <h2 id="form-title">Please enter your information</h2>
                <div id="names-container">
                    <TextField id="outlined-basic" margin="normal" size="small" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" margin="normal" size="small" label="Last Name" variant="outlined" />
                </div>

                <TextField id="outlined-basic" margin="normal" size="small" label="Email Address" variant="outlined" />
                
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                margin="normal"
                options={options}
                size="small"
                sx={{my: 2}}
                renderInput={(params) => <TextField {...params} label="Job Type" />}
                />

                <TextField id="outlined-basic" margin="normal" size="small" label="Page Count" variant="outlined" sx={{width: 125, mt:1, mb: 2}}/>

                <FormGroup>
                <FormControlLabel control={<Checkbox/>} label="Black & White" />
                <FormControlLabel control={<Checkbox/>} label="Double Sided" />
                </FormGroup>

                <div id="buttons">
                    <Link to="/success">
                        <Button variant="contained" id="join-button" size="large">Join Queue</Button>
                    </ Link>
                    <Link to="/">
                        <Button variant="contained" id="cancel" size="large">Cancel</Button>
                    </ Link>
                </div>


                

                
            </div>
            </div>
}

export default JoinQueueForm;