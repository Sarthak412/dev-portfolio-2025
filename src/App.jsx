import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { selectHomepage } from "./homepageSlice";
import WordSplitAnimation from "./components/HeroSection/Banner";
import HeroBanner from "./components/HeroSection/HeroBanner";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const { darkTheme } = useSelector(selectHomepage);

  return (
    <div
      className={`flex flex-col items-center h-full py-6 gap-4
        ${darkTheme ? `bg-[#111] whiteSvg` : `whiteSvg`}`}
    >
      <Navbar />
      <HeroBanner />
      <div className="mx-6 lg:w-3/4 p-8 bg-black/80 text-neutral-100 border border-neutral-200 rounded-2xl shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        molestias, dolor vitae impedit autem perferendis blanditiis aliquid.
        Accusamus beatae adipisci sint, vero culpa provident, recusandae
        deserunt amet iste, sit voluptatibus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ipsum molestias, dolor vitae impedit autem
        perferendis blanditiis aliquid. Accusamus beatae adipisci sint, vero
        culpa provident, recusandae deserunt amet iste, sit voluptatibus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias,
        dolor vitae impedit autem perferendis blanditiis aliquid. Accusamus
        beatae adipisci sint, vero culpa provident, recusandae deserunt amet
        iste, sit voluptatibus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum molestias, dolor vitae impedit autem perferendis
        blanditiis aliquid. Accusamus beatae adipisci sint, vero culpa
        provident, recusandae deserunt amet iste, sit voluptatibus. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsum molestias, dolor
        vitae impedit autem perferendis blanditiis aliquid. Accusamus beatae
        adipisci sint, vero culpa provident, recusandae deserunt amet iste, sit
        voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsum molestias, dolor vitae impedit autem perferendis blanditiis
        aliquid. Accusamus beatae adipisci sint, vero culpa provident,
        recusandae deserunt amet iste, sit voluptatibus. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ipsum molestias, dolor vitae impedit
        autem perferendis blanditiis aliquid. Accusamus beatae adipisci sint,
        vero culpa provident, recusandae deserunt amet iste, sit voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        molestias, dolor vitae impedit autem perferendis blanditiis aliquid.
        Accusamus beatae adipisci sint, vero culpa provident, recusandae
        deserunt amet iste, sit voluptatibus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ipsum molestias, dolor vitae impedit autem
        perferendis blanditiis aliquid. Accusamus beatae adipisci sint, vero
        culpa provident, recusandae deserunt amet iste, sit voluptatibus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias,
        dolor vitae impedit autem perferendis blanditiis aliquid. Accusamus
        beatae adipisci sint, vero culpa provident, recusandae deserunt amet
        iste, sit voluptatibus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum molestias, dolor vitae impedit autem perferendis
        blanditiis aliquid. Accusamus beatae adipisci sint, vero culpa
        provident, recusandae deserunt amet iste, sit voluptatibus. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsum molestias, dolor
        vitae impedit autem perferendis blanditiis aliquid. Accusamus beatae
        adipisci sint, vero culpa provident, recusandae deserunt amet iste, sit
        voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsum molestias, dolor vitae impedit autem perferendis blanditiis
        aliquid. Accusamus beatae adipisci sint, vero culpa provident,
        recusandae deserunt amet iste, sit voluptatibus. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ipsum molestias, dolor vitae impedit
        autem perferendis blanditiis aliquid. Accusamus beatae adipisci sint,
        vero culpa provident, recusandae deserunt amet iste, sit voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        molestias, dolor vitae impedit autem perferendis blanditiis aliquid.
        Accusamus beatae adipisci sint, vero culpa provident, recusandae
        deserunt amet iste, sit voluptatibus.
      </div>
    </div>
  );
}

export default App;
