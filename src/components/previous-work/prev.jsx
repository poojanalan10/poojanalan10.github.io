import "./prev.css"
import lifecycle from "../../img/testing-lifecyle.png"
import PSU from "../../img/PSU.jpg"
const Previous = () => {
    return(
        <div className="prev" id="prev">
        <div className="animate-box"></div>
            <div className="prev-text"> 
                <h1 className="prev-title"> Work Experience</h1>
                    <h2 className="prev-title-sub1">Software Quality Assurance Engineer</h2>
                    <div className="work-image">
                        <img src={lifecycle} alt="testing lifecycle" className="prev-img1"/>
                        <p className="prev-desc-1"> 
                            Developed automation test scripts in an existing matured test framework to automate the process of testing 
                        on a developed website. I have presented workflow models and Proof of Concept during weekly connect with the client (onsite lead- USA).
                        This job also involved analyzing feature files and user stories for functional testing.
                        In a sprint I have Attended scrum meetings to understand the current priorities and the scope for sprints in an agile model.
                        Since my work involved automating the testing process I coordinated with Quality assurance manual testers and the software developers 
                        to verify conformance with customer established quality check benchmarks. At the end of which I logged defects when bugs were detected.
                        </p> 
                    </div>    
                    <h2 className="prev-title-sub2">Graduate Assistant at PSU</h2>
                    <div className="work-image">
                        <img src={PSU} alt="PSU logo" className="prev-img2"/>
                        <p className="prev-desc-2"> 
                            I have done software installations based on customer requests in Linux from the source code. The requests are typically
                        from research students at the university in Computing. During that time, I handled issues such as missing module files, 
                        errors in an existing piece of code, etc
                        </p>
                    </div>
                   
            </div>
        </div>
    )
}
export default Previous