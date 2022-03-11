import "./intro.css"
import Me from "../../img/cs.png"

const Intro = () => {
    return (
        <div className="i" id="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro"> Hello, my name is </h2>   
                    <h2 className="i-name"> Pooja </h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item"> Software Developer </div>
                            <div className="i-title-item"> Test Engineer </div>
                            <div className="i-title-item"> Administrator </div>
                        </div>
                    </div>
                    <p className="i-desc">I'm a software developer and aspire to work in software development. I have worked as a software
                    tester which is an important quality in developing a software with fewer bugs. I've also done a few administrative jobs 
                    which requires great attention to details.</p>
                </div>    
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="girl" className="i-img"/>
            </div>
        </div>
    );
}
export default Intro