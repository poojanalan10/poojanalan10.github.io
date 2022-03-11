import "./contact.css";
import EmailIcon from "../../img/email.jpg"


const Contact = () => {
    return(
        <div className="c" id="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title"> What's up with your project?</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={EmailIcon} alt="email icon" className="c-icon"></img>
                                pnalan@pdx.edu
                            </div>
                        </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Have any comments or a story to share?</b> Get in touch now! 
                    </p>
                    <form>
                        <input type="text"  placeholder="Name" name="user_name"></input>
                        <input type="text"  placeholder="Subject" name="user_subject"></input>
                        <input type="text"  placeholder="Email" name="user_email"></input>
                        <textarea rows="5" placeholder="comments" name="user_message"></textarea>
                        <button className="button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact