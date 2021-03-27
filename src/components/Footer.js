import React from "react";
import "../App.css";

  import { FaCopyright ,FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaHeart,FaCoffee,FaGithub} from 'react-icons/fa';

class Footer extends React.Component{
    render(){
        return(
           <div className="footer">
                            <div className="copy"> <p> No <FaCopyright/>copyright issues.</p></div>
                          
                           <div>
                                   <p className="user_name"> Vivek Pandey </p>
                                   <p> Made with <FaHeart color="red"/> and <FaCoffee color="brown"/> in India </p> 
                            </div>
                            

                           <div className="apps">

                           <a href="https://github.com/vivpan24" className="github social">
                            <FaGithub  size="35px"/>
                            </a>

                           <a href="https://www.linkedin.com/in/vivek-kumar-pandey-840629172/" className="linkedin social">
                            <FaLinkedin  size="35px"/>
                            </a>

                             <a href="https://www.facebook.com/vivek.pandey.581187/" className="facebook social">
                            <FaFacebook  size="35px"/>
                            </a>

                            <a href="https://twitter.com/Vivek2407pandey" className="twitter social">
                            <FaTwitter  size="35px"/>
                            </a>

                            <a href="https://www.instagram.com/vivek2407pandey/"className="instagram social">
                            <FaInstagram  size="35px"/>
                            </a>
                           </div>
</div>
        );
    }
};
export default Footer;