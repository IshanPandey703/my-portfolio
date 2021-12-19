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

export default function Contact() {

    const InputLabelStyle = { fontFamily: "Poppins",fontWeight:"400"};
    const InputStyle = {color:"#FFF",...InputLabelStyle};

    return(
        <div className="Contact">
            <h1 className="heading">
                Get in Touch
            </h1>
            <form action="">
                <FormControl fullWidth>
                    <InputLabel  sx={InputLabelStyle} htmlFor="full-name" variant="outlined">Full Name</InputLabel>
                    <Input sx={InputStyle} id="full-name" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel sx={InputLabelStyle} htmlFor="email">Email address</InputLabel>
                    <Input sx={InputStyle} id="email" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel sx={InputLabelStyle} htmlFor="contact-number">Contact Number</InputLabel>
                    <Input sx={InputStyle} id="contact-number" aria-describedby="my-helper-text" />
                </FormControl>
                <TextField label="Message" multiline maxRows = {10} fullWidth/>
                <Button className="contact-btn" variant="outlined" > Submit </Button>
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