import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { Button} from "@mui/material";
import "./Contact.css"
import gmail from "../../Media/gmail.svg";
import github from "../../Media/github.svg";
import linkedin from "../../Media/linkedin.svg";
import instagram from "../../Media/instagram.svg";
import {useState} from "react";

export default function Contact() {

    const InputLabelStyle = { fontFamily: "Poppins",fontWeight:"400"};
    const InputStyle = {color:"#FFF",...InputLabelStyle};

    // details will store the form input values
    const [details, setDetails ] = useState({
        fullName: "",
        email: "",
        contactNumber: "",
        message: ""
    });

    function handleOnChange(event) {
        
        console.log(event.target);
        // target will point to input field that triggered handleOnChange 
        const target = event.target.name;

        // value stores updataed value of target input field  
        const value = event.target.value;

        setDetails(prevDetails=> {
            return {...prevDetails,[target]:value}
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:3001/",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(details)
        }).then(()=>{
            window.location.reload();
        });
    }

    return(
        <div className="Contact">
            <h1 className="heading">
                Get in Touch
            </h1>
            <form onSubmit={handleSubmit} action="">
                
                <FormControl fullWidth>
                    <InputLabel sx={InputLabelStyle} htmlFor="full-name" variant="outlined">Full Name</InputLabel>
                    <Input name="fullName" onChange={handleOnChange} value={details.fullName} 
                    sx={InputStyle} id="full-name" required />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel sx={InputLabelStyle} htmlFor="email">Email address</InputLabel>
                    <Input name="email" onChange={handleOnChange} value={details.email} 
                    sx={InputStyle} id="email" required />
                </FormControl>
                
                <FormControl fullWidth>
                    <InputLabel sx={InputLabelStyle} htmlFor="contact-number">Contact Number</InputLabel>
                    <Input name="contactNumber" onChange={handleOnChange} value={details.contactNumber}
                    sx={InputStyle} id="contact-number" required />
                </FormControl>
                
                <TextField name="message" onChange={handleOnChange} value={details.message} 
                label="Message" multiline maxRows = {10} fullWidth/>
                
                <Button type="Submit" className="contact-btn" variant="outlined" > Submit </Button>
            </form>
            <div className="connect-icons">
                <a href="https://www.linkedin.com/in/ishan-pandey-15527717b/">
                    <img src={linkedin} alt="linkedin icon" />
                </a>
                <a href="https://github.com/IshanPandey703">
                    <img src={github} alt="github icon" />
                </a>
                <a href="mailto:pandey.ishan703@gmail.com">
                    <img src={gmail} alt="gmail icon" />
                </a>
                <a href="https://www.instagram.com/ishan__pandey_/?hl=en">
                    <img src={instagram} alt="instagram icon" />
                </a>
            </div>
        </div>
    )
}