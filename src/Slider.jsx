import { useState } from "react";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Fixed typo: setCurrentUser -> setCurrentIndex

	const sliderStyles = {
		height: "100%",
		position: "relative",
		overflow: "hidden",
	};

  const slidesStyles = {
	width: '100%',
	height: '100%',
	borderRadius: '10px',
	backgroundPosition: 'center',
	backgroundSize: "cover",
	backgroundImage: `url(${slides[currentIndex].url})`,
	transition: "background-image 0.8s ease-in-out",
  };

  const leftArrowStyles = {
	position: "absolute",
	top: "50%",
	transform: "translate(0, -50%)",
	left: "32px",
	fontSize: "45px",
	color: "#fff",
	zIndex:1,
	cursor: "pointer",
  };

  const rightArrowStyles = {
	position: "absolute",
	top: "50%",
	transform: "translate(0, -50%)",
	right: "32px",
	fontSize: "45px",
	color: "#fff",
	zIndex:1,
	cursor: "pointer",
  };

  const buttonStyles = {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "3px",
    fontSize: "12px",
    cursor: "pointer",
    padding: "5px 10px",
    zIndex: 2,
	transition: "transform 0.3s ease, background-color 0.3s ease",
  };


  const goToPrevious = () => {
	const isFirstSlide = currentIndex === 0
	const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
	setCurrentIndex(newIndex)
  };

  const goToNext = () => {
	const isLastSlide = currentIndex === slides.length - 1;
	const newIndex = isLastSlide ? 0 : currentIndex+1;
	setCurrentIndex(newIndex)
  };

  const handleRedirect = () => {
    // Redirect based on the current slide's link
    window.location.href = slides[currentIndex].link;
  };

  return (
    <div style={sliderStyles}>
		<div style={leftArrowStyles} onClick={goToPrevious}>
			<img
				src="/leftArrow.png"
				alt="left arrow"
				style={{ width: "30px", height: "30px" }}
			/>
		</div>
		<div style={rightArrowStyles} onClick={goToNext}>
			<img
				src="/rightArrow.png"
				alt="right arrow"
				style={{ width: "30px", height: "30px" }}
			/>			
		</div>
		<div style={slidesStyles}></div>

		<button
        style={buttonStyles}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)"; // Added hover effect for button
          e.target.style.backgroundColor = "#fff"; // Added background color change on hover
          e.target.style.color = "#000"; // Text color change on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)"; // Reset transform on mouse leave
          e.target.style.backgroundColor = "transparent"; // Reset background color
          e.target.style.color = "#fff"; // Reset text color
        }}
        onClick={handleRedirect}
      >
        Know More
      </button>

		{/* <button style={buttonStyles} onClick={handleRedirect}>
    	    Know More
		</button> */}

    </div>
  );
};

export default Slider;
