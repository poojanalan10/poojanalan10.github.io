import "./projects.css"
const Projects = ({description,title,link}) => {
    return(
        <div className="p" id="p"> 
            <div className="p-effect">
                <div className="p-dot"></div>
                <div className="p-dot"></div>
                <div className="p-dot"></div> 
                <a href={link} className="link" target="_blank" rel="noreferrer">
            {title}</a> 
            </div>
            <p className="p-desc">{description}</p>
        </div>
        )
    }
export default Projects;