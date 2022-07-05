import project1 from "../../Media/project-1.png";
import project2 from "../../Media/project-2.PNG";
import project3 from "../../Media/project-3.PNG";
import project4 from "../../Media/project-4.PNG";
import project5 from "../../Media/project-5.jpg";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {

    return (
        <div className="Projects">
            <h1 className="heading">
                Projects
            </h1>
            <div className="card-container">
                <ProjectCard imgSrc = {project1} heading = "Portfolio" highlight = "(Special Mention: IEEE Lead 2.0)"
                projLink ="https://github.com/IshanPandey703/IEEE-LEAD-2.0/tree/master/Project-1/Ishan%20Pandey" >
                    Portfolio website, describing about me and my interests and skills. Made using Html, CSS and Javascript.
                </ProjectCard>
                <ProjectCard imgSrc = {project2} heading = "JobScraper" highlight = "(2nd Position: IEEE Lead 2.0)"
                projLink ="https://github.com/IshanPandey703/IEEE-LEAD-2.0/tree/master/Project-2/Ishan%20Pandey" >
                    A JobScaper, scraping data from LinkedIn, Naukri.com, SimplyHired and indeed.com. Made using Python.
                </ProjectCard>
                <ProjectCard imgSrc = {project3} heading = "Covid Stats" highlight ="(2nd Position: IEEE Lead 2.0)"
                projLink ="https://github.com/IshanPandey703/IEEE-LEAD-2.0/tree/master/Project-3/Ishan%20Pandey" >
                    Website to fetch COVID Stats using APIs. Made using Html, CSS and Javascript.
                </ProjectCard>
                <ProjectCard imgSrc={project4} heading = "VSBuddies" highlight = "(Among Top 10: IEEE Mega Project 5.1)"
                projLink="https://github.com/IshanPandey703/vsbuddies-website">
                    Website to connect college students (Developers) with common interests. Made using React, Firebase, NodeJs.
                </ProjectCard> 
                <ProjectCard imgSrc={project5} heading = "NAPS Website"
                projLink="https://github.com/IshanPandey703/vsbuddies-website">
                    Official Website of News And Publication Society, BIT Mesra. Made using NextJS, TailWind, NodeJs, MongoDB.
                </ProjectCard> 
            </div>
        </div>
    );
}