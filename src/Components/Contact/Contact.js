import "./Contact.css"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { Button} from "@mui/material";

export default function Contact() {

    const InputLabelStyle = { fontFamily: "Poppins",fontWeight:"400"};
    const InputStyle = {color:"#FFF", marginBottom:"3%",...InputLabelStyle};

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
        </div>
    )
}