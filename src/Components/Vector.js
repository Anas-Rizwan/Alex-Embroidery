import '../Styling/Vector.css'
import { ThemeProvider } from "styled-components";
import { Heading, Text, FontWeight } from "styled-typography";
import { Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import vect1 from "../pictures/vect-cat.jpg"
import vect2 from "../pictures/vect-dog.jpg"
import vect3 from "../pictures/vect-dumb.jpeg"
const Vector = () => {

    return (

        <>
            <div className="Vetor-Height" id="Vect">
                <div className='Up-Arrow'>
                    <a href='#Home'><KeyboardArrowUpIcon
                    className='Up-Arrow-1'
                    /></a>
                </div>
                <div className="Vect-heading">

                    <ThemeProvider theme={{}}>
                        <Heading
                            color="white"
                            fontWeight={FontWeight.Light}
                        >Vectorization Art</Heading>
                    </ThemeProvider>

                </div>

                <div className='vect-por'>



                    <div className='Para'>

                        <ThemeProvider theme={{}}>

                            <Typography 
                             className='Typo'
                             >
                                <Text

                                    className="Vectpara"
                                    color="white"
                                >
                                    Get the highest quality vectorization image and vector art conversion services thanks to our qualified graphic design team and our exclusive tools Why convert an image to vector? If you compare raster to vector, you might notice that raster image or logo can cause you what is called 'pixelization' (it happens when you enlarge the image, and it gets distorted). Vector format is quite practical and has advantages over the raster one. Take for instance a vector logo which can be resized and used in whatever way you want.
                                </Text>
                                <Text
                                    className="Vectpara"
                                    color="white"
                                >
                                    Our team of qualified designers can help you with the creation of a vector file, vector graphics or vector drawing. We can assist you with vectorization image and vector artwork conversion. With Alexkh.embroidery vector conversion service, you can qualitatively convert the image to vector art. Necessary to convert the image to PDF, SVG, EPS, AI. There are no obstacles. You will receive your image in any vector format. We are confident that you will be satisfied with vector drawing, as it is executed by professional graphic designers by hand. Our team has many professionals, so orders are made quickly and without delays. Thanks to direct communication, all your desires and features are taken into account.
                                </Text>
                                <Text
                                    className="Vectpara"
                                    color="white"
                                >
                                    Alex embroidery also provides a wide range of image editing services. Our professional graphic designers do photo clipping, layer mask, clip path, replacing color, retouching, and background editing manually in less than 5 hours. Let's start our cooperation. We are always happy to make our customers satisfied with the quality of vectorization and image editing services.
                                </Text>
                            </Typography>
                        </ThemeProvider>
                    </div>

                    <div className='Vect-Img-Section'>
                        <img src={vect1} alt='cat' className='vect-img' />
                        <img src={vect2} alt='dog' className='vect-img' />
                        <img src={vect3} alt='dumb' className='vect-img' />
                    </div>

                </div>

                <div className="downArrow1">
                    <a href="#Digitizing"><KeyboardArrowDownIcon 
                    className='down-Arrow-1'
                    /> </a>
                </div>
            </div>
        </>
    )
}

export default Vector