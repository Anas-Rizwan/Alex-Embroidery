import logo from "./../pictures/AlexEmbriodryLogo.png"
import '../Styling/Header.css'
import Typewriter from 'typewriter-effect'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Header() {

    new Typewriter('#typewriter', {
        strings: ['Hello', 'World'],
        autoStart: true,
    });


    return (
        <>
            <div className="Header-Height" id="Home">
                <div className="logo">
                    <img src={logo} className="logo-img" alt="" />
                </div>

                <div className="Welcome">
                    <h1 className="Header-heading">
                        <span>
                            <Typewriter
                                options={{
                                    strings: ['Welcome to Alex Embroidery'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 70,
                                }}
                            />


                        </span>
                    </h1>

                    <h2 className="header-subheading">
                        We are experts in <span>
                            <Typewriter
                                options={{
                                    strings: ['Digitizing', 'Vectorization'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h2>

                    <h4 className="links">
                        <a href="https://www.facebook.com" target="_blank"><FacebookIcon /></a>
                        <a href="https://www.Instagram.com" target="_blank"><InstagramIcon /></a>
                        <a href="https://www.Linkedin.com" target="_blank"><LinkedInIcon /></a>
                    </h4>

                </div>
                <div className="downArrow1">
                    <a href="#Vect"><KeyboardArrowDownIcon
                     className="down-Arrow-1"
                    /> </a>
                </div>
            </div>


        </>
    )
}