
import pic_1 from "./images/pic_1.jpg";
import pic_2 from "./images/pic_2.jpg";
import pic_3 from "./images/pic_3.jpg";

function Carousels() {
  return (
    <div className="container-fluid">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic_1} className="d-block w-100 h-80" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: 30, color: "white" }}>Falcon 9</h5>
              <p style={{fontSize:'25px'}}>
              <b>Discover the outer space with SpaceTech.co.</b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic_2} className="d-block w-100 h-80" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: 30, color: "white" }}>Our Mission</h5>
              <p style={{fontSize:'25px'}}>
              Revolutionise the aerospace industry and make space flight a reality.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic_3} className="d-block w-100 h-80" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: 30, color: "white" }}>SpaceX Launcing Site</h5>
              <p style={{fontSize:'25px'}}>
              Get to know the cosmic world with the launching site.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousels;
