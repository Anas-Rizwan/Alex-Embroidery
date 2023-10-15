import img1 from "../pictures/v-d-jeans.jpg"
import img2 from "../pictures/v-d-shirt.jpg"
import img3 from "../pictures/v-d-skeleton.jpeg"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../Styling/VecctAndDigi.css"
import { useState } from "react";
import ImgArr from "../Components/ImgArr";
import Modalpop from "./Modalpop"

const VectAndDigi = () => {
    const Arr = [
        { pictures: img1 },
        { pictures: img2 },
        { pictures: img3 }
    ]


    const [showImages, setShowImages] = useState(false);
    const [showMoreButtons, setShowMoreButtons] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)

    const toggleImages = () => {
        setShowImages(!showImages);
        setShowMoreButtons(false)
    };

    return (
        <>
            <div className="VectDigi-Height" id="VectDigi">

                <div className='Up-Arrow'>
                    <a href='#Digitizing'><KeyboardArrowUpIcon
                        className="Up-Arrow-1"
                    /></a>
                </div>

                <div className="VectAndDigi-Img-section">

                    <div className="first-three-images">
                        {Arr.map((item, index) => (
                            <img
                                src={item.pictures}
                                alt=""
                                className="Vect-Digi_img"
                                key={index}
                            />
                        ))}
                    </div>

                    {showImages && (
                        <>
                            <div className="more-six-pictures">
                                {ImgArr.map((item, index) => (
                                    <img
                                        src={item.Images}
                                        alt=""
                                        className="Vect-Digi_img_more"
                                        key={index}
                                    />
                                ))}
                            </div>

                            <div className="More-button">
                                <button className="less" onClick={toggleImages}>Show less</button>
                                <button className="more" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => setModalOpen(true)}>Show more</button>
                            </div>

                            <div className="modal-images">
                                {Modalpop && <Modalpop setOpenModal={setModalOpen} /> }
                            </div>

                        </>

                    )}

                </div>

                <div className="ShowMoreImages">
                    <button className="Show-More" onClick={toggleImages} style={{ display: showImages ? "none" : "block" }}>
                        {showImages ? "Show Less" : "Show More"}
                    </button>

                    {/* {showImages && (
                        <button onClick={toggleMoreButtons}>
                            {showMoreButtons ? "Hide Buttons" : "Show Buttons"}
                        </button>
                    )} */}
                </div>



                <div className="downArrow1">
                    <a href="#contact"><KeyboardArrowDownIcon
                        className="down-Arrow-1"
                    /> </a>
                </div>


            </div>

        </>
    )
}



export default VectAndDigi