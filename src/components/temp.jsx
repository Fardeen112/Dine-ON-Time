import React from "react";

const Carousal = () => {
  return (
    <div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide w-9/12 carousel-fade"
          style={{
            objectFit: "contain !important",
            maxHeight: "500px",
            objectFit: "contain",
            overflow: "hidden",
          }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption d-none d-md-block">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success text-white bg-success"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="carousel-item active">
              <img
                styles={{
                  maxHeight: "100px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                src="https://source.unsplash.com/random/900×700/?halwa"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                styles={{ maxHeight: "100px" }}
                src="https://source.unsplash.com/random/900×700/?cake"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                styles={{ maxHeight: "100px" }}
                src="https://source.unsplash.com/random/900×700/?burger"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
