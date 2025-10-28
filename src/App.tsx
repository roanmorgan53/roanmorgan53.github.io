import "./styles/App.css";
import PhotoBox from "./components/PhotoBox.tsx";
import BiographyBox from "./components/BiographyBox.tsx";
import roanImgUrl from "./assets/roan.png";
import PhotoIcon from "./components/PhotoIcon.tsx";
import polyLogo from "./assets/cal-poly-logo.png";
import utLogo from "./assets/uticon.jpg";
import cosLogo from "./assets/cos.png";
import ContentBox from "./components/ContentBox.tsx";

function App() {
  return (
    <>
      <div className="bodyWrapper">
        <div className="introWrapper">
          <PhotoBox img={roanImgUrl} />
          <BiographyBox>
            <div className="universityIconsWrapper">
              <PhotoIcon url={polyLogo} alt="Cal Poly Logo" />
              <PhotoIcon url={utLogo} alt="University of Tennessee Logo" />
              <PhotoIcon url={cosLogo} alt="College of the Sequoias Logo" />
            </div>
          </BiographyBox>
        </div>
        <div className="contentItem">
          <ContentBox title="Achievement Showcase">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              molestias labore sint a dolorum et doloremque praesentium id
              dignissimos similique aliquid, inventore quisquam placeat. Ad,
              pariatur cum? Optio, quos harum!
            </p>
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
