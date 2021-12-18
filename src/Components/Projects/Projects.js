import project1 from "../../Media/project-1.png";
import project2 from "../../Media/project-2.PNG";
import project3 from "../../Media/project-3.PNG";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {

    return (
        <div className="Projects">
            <h1 className="heading">
                Projects
            </h1>
            <div className="card-container">
                <ProjectCard style = {{gridColumnStart:1,gridColumnEnd:3}} imgSrc = {project1} heading = "Portfolio"
                projLink ="https://github.com/IshanPandey703/IEEE-LEAD-2.0/tree/master/Project-1/Ishan%20Pandey" >
                    Portfolio website, describing about me and my interests and skills. Made using Html, CSS and Javascript.
                </ProjectCard>
                <ProjectCard style = {{gridColumnStart:2,gridColumnEnd:4}} imgSrc = {project2} heading = "JobScraper"
                projLink ="https://github.com/IshanPandey703/IEEE-LEAD-2.0/tree/master/Project-2/Ishan%20Pandey" >
                    A JobScaper, scraping data from LinkedIn, Naukri.com, SimplyHired and indeed.com. Made using Python.
                </ProjectCard>
                <ProjectCard style = {{gridColumnStart:1,gridColumnEnd:3}} imgSrc = {project3} heading = "Covid Stats"
                projLink ="https://github.com/IshanPandey703/IEEE-LEAD-2.0/tree/master/Project-3/Ishan%20Pandey" >
                    Website to fetch COVID Stats using APIs. Made using Html, CSS and Javascript.
                </ProjectCard>
            </div>
        </div>
    );
}