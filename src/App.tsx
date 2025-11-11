import "./styles/App.css";
import PhotoBox from "./components/PhotoBox.tsx";
import BiographyBox from "./components/BiographyBox.tsx";
import roanImgUrl from "./assets/roan.png";
import PhotoIcon from "./components/PhotoIcon.tsx";
import polyLogo from "./assets/cal-poly-logo.png";
import utLogo from "./assets/uticon.jpg";
import cosLogo from "./assets/cos.png";
import nsfLogo from "./assets/nsf.png";
import caritasLogo from "./assets/caritas.png";
import ContentBox from "./components/ContentBox.tsx";
import Achievement from "./components/Achievement.tsx";
import StatBox from "./components/StatBox.tsx";

function App() {
  return (
    <>
      <div className="bodyWrapper">
        <div className="introWrapper">
          <PhotoBox img={roanImgUrl} />
          <BiographyBox>
            <></>
          </BiographyBox>
        </div>
        <div className="contentItem">
          <ContentBox title="Achievement Showcase">
            <div className="achievementImages">
              <Achievement
                image={polyLogo}
                title="Cal Poly"
                description="B.S. in Computer Science. 2026"
              />
              <Achievement
                image={utLogo}
                title="University of Tennessee"
                description="Attended for a year."
              />
              <Achievement
                image={cosLogo}
                title="College of the Sequoias"
                description="Attended for two years. Associate Degrees in Computer Science, Math, and Physics"
              />
              <Achievement
                image={nsfLogo}
                title="NSF REU"
                description="Completed an NSF REU in San Juan, Puerto Rico. Worked with a computer vision bee detection system!"
              />
              <Achievement
                image={caritasLogo}
                title="Cáritas Valencia"
                description="For my Cal Poly capstone project, I am a Mobile Software Engineer developing an app for the technicians of Cáritas Valencia to streamline operations."
              />
            </div>
            <div className="statBoxContainer">
              <StatBox value="1412" label="Bees Labeled" />
              <StatBox value="0" label="Days Since I Forgot a Semicolon;" />
              <StatBox value="Too Long" label="Since I've Seen My Dog" />
            </div>
          </ContentBox>
        </div>
        <div className="contentItem">
          <ContentBox title="Recent Activity">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
              vel, sequi minima iusto animi officiis maiores odio, eligendi
              expedita necessitatibus ratione. Assumenda non officia libero
              nostrum ex deserunt consequuntur. Quod. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. A hic praesentium illum vel neque
              soluta delectus repudiandae itaque nesciunt voluptatum asperiores
              distinctio, magni libero tenetur at fugiat deserunt maiores quasi?
            </p>
          </ContentBox>
        </div>
        <div className="contentItem">
          <ContentBox title="Education">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              excepturi sunt at fugiat, odit quo delectus dicta temporibus? Sint
              sunt hic, voluptatem cupiditate et molestiae labore? Veritatis
              deserunt facilis sapiente.
            </p>
          </ContentBox>
        </div>
        <div className="contentItem">
          <ContentBox title="Projects and Clubs">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptatibus quas dolorum rerum eveniet eum cumque itaque nulla
              tempora, amet praesentium laudantium officia labore distinctio
              corrupti perferendis ullam aspernatur autem.
            </p>
          </ContentBox>
        </div>
        <div className="contentItem">
          <ContentBox title="Experience">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ipsum accusamus possimus. Mollitia aspernatur ducimus ratione
              consectetur doloremque, autem numquam, non nisi voluptates vitae,
              excepturi quod rerum minus eum aliquid?
            </p>
          </ContentBox>
        </div>
      </div>
    </>
  );
}

export default App;
