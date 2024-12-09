import ImageSlider from './Slider';

function App() {
  const slides = [
    { url: "/img1.jpg", title: "Img1", link:"#1"},
    { url: "/img2.jpg", title: "Img2", link:"#2"},
    { url: "/img3.jpg", title: "Img3", link:"#3"},
  ];

  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    margin: "0 auto",
  };

  const sliderStyles = {
    width: "500px",
    height: "280px",
  };


  return (
    <div style={containerStyles}>
      <div style={sliderStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
