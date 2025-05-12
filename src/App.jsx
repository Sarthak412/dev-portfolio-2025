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
      className={`flex flex-col w-full h-full gap-5 pb-8 items-center
        ${darkTheme ? `bg-[#111] whiteSvg` : `whiteSvg`}`}
    >
      <div className="w-full flex flex-col h-full lg:h-screen ">
        <Navbar />
        <HeroBanner />
      </div>
      <div className="p-6 mx-8 bg-white text-black w-fit lg:w-3/4 border border-neutral-200 shadow">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        molestias nulla id enim iure consequatur itaque ratione, pariatur
        necessitatibus inventore natus velit dolorem perferendis ad quia
        maiores, libero fuga sint. Ipsa natus itaque architecto expedita neque
        ipsam necessitatibus, rem sed. Quasi exercitationem voluptatem aut
        repellendus at officiis fuga perspiciatis dolor atque recusandae omnis,
        nesciunt suscipit earum est deserunt numquam sit! Voluptates, doloribus
        nostrum enim odio labore hic quo eius nobis! Dignissimos quibusdam
        soluta, tempore, repellendus id qui dolores enim minima consequatur cum
        possimus perferendis a sequi? Suscipit ullam esse dolorem! Voluptatem,
        pariatur optio similique at animi doloremque? Amet optio natus rem.
        Veritatis quae aliquam eveniet. Tempore eveniet ipsum perferendis
        laboriosam dolorem. Deleniti sint, tempora consectetur nesciunt
        molestias soluta voluptatum quam. A error repellendus delectus
        repudiandae laborum? Natus, unde. Laboriosam dolorem atque
        necessitatibus, dolor laborum nobis sit nemo aut accusamus error ipsum,
        autem optio dicta repellat quo hic fuga. Modi, cumque. Alias, minus?
        Dolorum, ab molestiae? Neque dicta ullam est accusamus repudiandae in
        impedit facilis adipisci numquam doloremque. Officia mollitia suscipit,
        odit ullam nisi expedita minus! At, temporibus a? Magnam, eum. Assumenda
        vitae itaque inventore sequi! Voluptatum tempore corporis numquam totam
        mollitia nobis, commodi possimus atque labore, laborum quae qui
        accusamus sint saepe impedit ea accusantium temporibus maxime culpa
        consectetur! Ab! Vero eius, pariatur sapiente rem numquam error quas.
        Aperiam dolorum incidunt consequatur, aut debitis ipsam sed et
        voluptatem eos? Autem reiciendis delectus ea suscipit minus praesentium
        atque alias, aspernatur earum! Pariatur distinctio nam voluptates,
        earum, nemo, quidem adipisci minus sint porro nostrum laboriosam
        dignissimos itaque? Vitae, laboriosam magni. Veritatis voluptatibus, qui
        veniam impedit optio odio a distinctio quod deleniti fugit? Ratione
        voluptatibus ipsum voluptate officia! A aliquid reiciendis fugit, nisi
        repellendus consequuntur ex maiores sint temporibus? In neque accusamus
        illo totam maxime consequuntur consectetur voluptatem minima. Expedita
        magnam exercitationem sed. Distinctio velit quisquam necessitatibus
        tempora dolor culpa? Alias ab harum aspernatur commodi ipsa fuga,
        incidunt odit iure, nam nisi cum accusantium? Ex libero rerum sequi
        atque ducimus sunt, sapiente consectetur. Voluptate quisquam voluptates
        velit voluptatum, excepturi iste similique corporis, quod dicta
        doloribus neque enim doloremque ipsum corrupti. Consequatur ipsam quidem
        eveniet dicta labore tenetur aperiam esse inventore, doloremque dolorem
        ab? Similique ducimus voluptatem possimus. Temporibus nesciunt ut in
        numquam quia placeat ipsum quae officia, corrupti dolor sequi expedita
        eius tenetur sint, accusamus est iste ab perspiciatis! Quidem voluptas
        cumque similique! Eos aliquam, magnam, quibusdam consequuntur sed
        distinctio aperiam quidem veniam dolorum, tempore odio architecto magni
        deleniti obcaecati eaque soluta nemo voluptatum eius atque possimus.
        Vitae ipsum reiciendis culpa hic ea? Unde autem quis eligendi
        repellendus error culpa commodi natus pariatur id nisi, laboriosam
        quibusdam magnam voluptatem maiores odit totam sequi sed eum excepturi
        sit libero qui. Veritatis magnam nemo ut! Repudiandae, voluptates!
        Numquam, aperiam repellat? Culpa asperiores dolorum quis ullam alias
        sit, porro nobis quasi quidem eaque eveniet atque soluta iure modi
        perferendis obcaecati expedita minima, quaerat nam, debitis nulla? Dicta
        modi amet porro est pariatur eius vitae, quisquam accusamus consequatur
        quo deserunt sapiente dolorem nihil laudantium! Deserunt quasi, eligendi
        ipsum, repellendus eveniet aperiam blanditiis ipsam reprehenderit,
        architecto temporibus impedit? Et sint atque explicabo corporis
        molestias quam, quae esse quia in blanditiis corrupti aspernatur quas
        adipisci voluptatum harum. Blanditiis recusandae, eaque libero vel
        placeat odit impedit hic commodi! Est, saepe? Non ad cupiditate harum
        tenetur nisi quod accusamus libero ipsam culpa tempora minus fugit
        tempore, eum quo fuga vitae atque quasi esse nemo nostrum! Officiis
        tempora non officia minus a? Aliquam natus, iusto error vitae eveniet
        facilis nobis totam inventore voluptas fugiat iure reprehenderit beatae
        facere voluptatum illum ex aut cum ipsa. Placeat explicabo corporis
        voluptate vel ipsam ab accusantium!
      </div>
    </div>
  );
}

export default App;
