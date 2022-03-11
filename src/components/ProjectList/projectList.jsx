import "./projectList.css"
import Projects from "../Projects/projects"
import {projects} from "../../data"
const ProjectList = () => {
    return(
        <div className="pl" id="pl">
            <div className="pl-text">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-desc">
                    These are the projects I've worked at various points
                    during my masters studies.
                </p>
            </div>
            <div className="pl-list">
                {projects.map(item => (
                    <Projects key={item.id} title={item.title} description={item.description} link={item.link}/>
                ))}   
            </div>
        </div>
    )
}
export default ProjectList;