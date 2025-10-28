import "./styles/App.css";
import PhotoBox from "./components/PhotoBox.tsx";
import BiographyBox from "./components/BiographyBox.tsx";
import roanImgUrl from "./assets/roan.png";
import PhotoIcon from "./components/PhotoIcon.tsx";
import polyLogo from "./assets/cal-poly-logo.png";
import utLogo from "./assets/uticon.jpg";

function App() {
  return (
    <>
      <div className="introWrapper">
        <PhotoBox img={roanImgUrl} />
        <BiographyBox>
          <div className="universityIconsWrapper">
            <PhotoIcon url={polyLogo} alt="Cal Poly Logo" />
            <PhotoIcon url={utLogo} alt="University of Tennessee Logo" />
          </div>
        </BiographyBox>
      </div>
    </>
  );
}

export default App;
