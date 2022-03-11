import "./About.css"

const About = () => {
    return (
        <div className="a" id="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <div className="a-img">
                    </div>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title"> About Me </h1>
                <p className="a-sub">
                An investment in knowledge pays the best interest.
                                            - Benjamin Franklin
                </p>
                <p className="a-desc">
                Being a computer science masters student I have had the opportnity
                to learn and execute various concepts of programming and analytics 
                that widened my perspective. I have learnt how to gather, analyze, 
                filter, combine and represent data in the desired format using database managemnt
                systems. And, also have my hands on some basic concepts in networking to a few
                advanced programming in java.
                I also have a basic understanding of web technologies. This wide array of learning
                has helped me a long way in my masters journey and the thirst for knowledge will continue
                as the only constant is change when it comes to tchnology.
                </p>
            </div>
        </div>
    )
}
export default About