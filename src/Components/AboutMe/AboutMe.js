import myimg from "../../Media/my-img.jpg";
import "./AboutMe.css";

export default function AboutMe() {
    return (
    <div className="About-me popout">
        <img src={myimg} alt="My-Photo"/>
        <div className="Aboutme-text-container">
            <h1 className="heading">About Me</h1>
            <p className="text">Hi, I'm Ishan Pandey, Btech 2nd year undergrad in Electrical & Electronics Engineering, BIT Mesra.
                My interest lies in programming, problem solving, developing stuff, learning and exploring
                new technologies. I'm a Full Stack Developer inclined towards Back-end development.
            </p>
        </div>
    </div>
    );
}