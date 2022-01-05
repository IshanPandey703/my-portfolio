import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import "./ProjectCard.css";

export default function ProjectCard(props) {

    return (
        <Card sx = {{backgroundColor:"#201E23", color:"#FFF"}}>
            <CardMedia
                component="img"
                height="200"
                image={props.imgSrc}
                alt="green iguana"
            />
            <CardContent >
                <h3 className="Project-title">
                    {props.heading}
                </h3>
                <div className="Project-description">
                    {props.children}
                </div>
            </CardContent>
            <CardActions>
                <a href={props.projLink} style={{textDecoration:"none"}}>
                    <Button size="small">View Source</Button>
                </a>
            </CardActions>
        </Card>
    );
}