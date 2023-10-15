import { ThemeProvider } from "styled-components"
import { Heading, FontWeight, Text } from "styled-typography"
import { Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import digi1 from "../pictures/dig-car.jpg";
import digi2 from "../pictures/dig-logo.jpg";
import digi3 from "../pictures/dig-logo2.jpg";
import "../Styling/Digitizing.css"
const Digitizing = () => {

    return (
        <>
            <div className="Digitizing-Height" id="Digitizing">
                <div className='Up-Arrow'>
                    <a href='#Vect'><KeyboardArrowUpIcon
                    className="Up-Arrow-1"
                    /></a>
                </div>

                <div className="Digi-Heading">
                    <ThemeProvider theme={{}}>
                        <Heading
                            color="white"
                            fontWeight={FontWeight.Light}
                        >Digitizing</Heading>
                    </ThemeProvider>
                </div>

                <div className="Dig-por">

                    <div className="Di-para">

                        <ThemeProvider theme={{}}>
                            <Typography>

                                <Text
                                    className="Digi-para"
                                    color="white"
                                >
                                    Embroidery digitizing is our profession and we digitize with great passion. We have experience with good brands like Adidas, Nike, Puma. We have sound knowledge about different embroidery types like 3D Puff, embroidery patch, applique patch,chain etc.
                                </Text>

                                <Text
                                    className="Digi-para"
                                    color="white"
                                >
                                    Alex embroidery provide quality digitizing artwork for embroidery and vector conversion with thousands of satisfied customers.
                                </Text>

                                <Text
                                    className="Digi-para"
                                    color="white"
                                >
                                    Alexkhembroidery provide quality digitizing artwork for embroidery and vector conversion with thousands of satisfied customers.
                                </Text>

                                <Text
                                    className="Digi-para"
                                    color="white"
                                >
                                    Our Digitizers are expert in digitizing small letters, digitizing for embroidery design for 3d Puff, Applique. We digitize for all hoops sizes from 4x4, 5x7 and big embroidery machine hoop sizes.
                                </Text>

                            </Typography>
                        </ThemeProvider>

                    </div>

                    <div className="Digi-Img-Section">
                        <img src={digi1} alt="digi" className="Digi-img" />
                        <img src={digi2} alt="digi" className="Digi-img" />
                        <img src={digi3} alt="digi" className="Digi-img" />
                    </div>
                </div>


                <div className="downArrow1">
                    <a href="#VectDigi"><KeyboardArrowDownIcon
                    className="down-Arrow-1"
                    /> </a>
                </div>
            </div>
        </>
    )
}

export default Digitizing