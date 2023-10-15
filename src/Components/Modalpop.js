import PopUpImagse from "./PopUpImages"
import "../Styling/popupimg.css"

export default function Modalpop({ setOpenModal }) {
  return (
    <>
      <div className="modal fade modal-xl" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">

            {/* <!-- Modal Header --> */}
            {/* <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
            </div> */}

            {/* <!-- Modal body --> */}
            <div className="modal-body">
            {/* <button type="button" className="btn-close mb-2 d-flex justify-content-end large" data-bs-dismiss="modal" style={{color: "#fa7d9d", backGroundColor:"white", width: "100%"}}>X</button> */}


              {/* <ImageList
                // sx={{ width: 1000, height: 600 }}
                cols={6}>
                {PopUpImagse.map((pic, index) => (
                  <ImageListItem key={pic.index}>
                    <Image
                      // srcSet={`${pic.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${pic.popImg}`}
                      loading="lazy"
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "fill"
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList> */}

              <div className="container">
                <div className="row">
                  {PopUpImagse.map((pic, index)=> {
                    return(
                      <>
                      <div className="col-md-2 col-sm-4 mb-2" key={index}>
                      <div className="image-container" >
                        <img src={pic.popImg} className="" alt="pic"  />
                      </div>
                      </div>
                      </>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* <!-- Modal footer --> */}
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div> */}

          </div>
        </div>
      </div>
    </>
  )
}
