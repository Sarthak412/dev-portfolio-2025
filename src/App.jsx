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
      className={`flex flex-col items-center gap-4 h-full
        ${darkTheme ? `bg-[#111] whiteSvg` : `whiteSvg`}`}
    >
      <Navbar />
      <HeroBanner />
      {/* <div className="w-3/4 p-5 text-center tracking-wider bg-[#222] text-white rounded-lg shadow">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam error
        quis sapiente, ducimus sequi veritatis repellendus fugiat excepturi ipsa
        sunt nulla accusamus quae sit doloremque sint voluptates atque rerum
        fuga! Unde voluptates, non voluptatem doloribus voluptas cupiditate
        ullam molestiae asperiores quisquam? Perferendis nulla quis nam delectus
        atque quam, consequuntur nemo hic labore eligendi officia non iste velit
        aliquam optio veniam! Nulla minus ut quaerat voluptatibus consequuntur
        quis necessitatibus id, eligendi laudantium rerum et, quam ducimus! Cum
        ab culpa facilis dolor! Dolore harum delectus recusandae veniam. Ex
        dolores placeat a earum! Ratione, beatae. Dolorum, consequatur atque
        vero veniam nemo repudiandae provident? Blanditiis cupiditate, non
        labore perspiciatis hic voluptatem sapiente quaerat accusantium error
        libero fugit doloribus qui aliquam, ab sit. Tempora, officiis! Tempore
        sed vel, cupiditate mollitia nemo fuga molestias voluptatum nobis
        nostrum quam. Maiores ea, minima pariatur assumenda cupiditate, deleniti
        quaerat exercitationem autem optio, eveniet modi ipsum voluptate iste
        aliquid ipsam. Totam nisi dolorum doloribus fugiat asperiores, minus
        ipsa quisquam possimus commodi nihil provident repudiandae deserunt
        natus libero delectus facilis et vel iusto quam autem maiores? In
        aperiam praesentium illum. Commodi? Consequatur sunt voluptate iusto
        quam facere nobis vero reiciendis laboriosam iure labore enim, nemo
        aliquid voluptates aliquam dolor ad natus asperiores fugit dignissimos
        dolores dolorum veniam temporibus recusandae. Nostrum, laboriosam!
        Aliquid fuga quaerat vero, sapiente tempore quasi quibusdam perspiciatis
        sunt, eos excepturi explicabo consequatur. Ipsum id, iure debitis eos
        laborum recusandae odio a distinctio quos animi, incidunt, mollitia
        suscipit eligendi! Repellendus nulla eligendi, a laborum illo ea optio
        suscipit ex exercitationem animi nemo ad ut repudiandae, sapiente
        voluptatum? Unde obcaecati incidunt tempore est provident cupiditate
        optio possimus quibusdam quos nesciunt. Doloribus in molestias quis hic
        assumenda, ut repellendus voluptatibus dolores nobis minima maiores odit
        nemo corrupti distinctio consectetur nihil atque unde iusto fugiat!
        Sequi itaque vel tenetur, corrupti necessitatibus odit. Assumenda nihil,
        odio libero non provident inventore magnam rerum perferendis dolor
        voluptas, quibusdam culpa ad qui excepturi omnis molestias quo obcaecati
        laudantium iste veniam. Cumque perferendis officia dolore sint nemo.
        Cumque unde aperiam, ipsa provident porro error officiis suscipit eius
        sit fugit, temporibus repudiandae adipisci fugiat ex cupiditate!
        Repellendus molestiae consectetur tempora magni minima eum perferendis
        at inventore reprehenderit assumenda! Reprehenderit, nam unde. Quam
        accusantium labore illo sed voluptas ullam iure suscipit similique magni
        esse eveniet dolores neque laborum, atque minima? Possimus enim ducimus
        doloremque excepturi autem cupiditate blanditiis ea. Voluptate, sint
        illum! Necessitatibus, dolorem! Asperiores explicabo architecto
        voluptatem voluptatum molestias nobis obcaecati placeat maxime quo
        corrupti! Molestias, alias fugit, iste ab explicabo, quod culpa quis
        exercitationem quia cupiditate nemo. Voluptate sapiente ab minus
        praesentium quibusdam, aperiam hic perferendis aliquam sequi tempore
        earum. Fuga officia, similique unde nam eos quod quae dolores, labore
        veniam voluptates officiis aut quidem eaque ducimus. Rem blanditiis quos
        eum voluptate recusandae dolorum ab ducimus veritatis, accusamus
        necessitatibus officiis ex incidunt quam! Fugiat corporis, mollitia
        tempora omnis quia placeat ab aliquam quasi, obcaecati eveniet, cumque
        dolores? Fuga necessitatibus consequuntur perferendis explicabo sit quas
        beatae ducimus dicta! Esse nesciunt eius illo corrupti fuga, amet totam
        error quos ipsa quas eum delectus assumenda, accusantium dicta aliquid
        neque cum. Unde vitae est placeat quasi non! Placeat cum eos impedit,
        harum distinctio est pariatur libero quam consectetur esse numquam
        provident repellat, non dicta eveniet repudiandae dolore. Placeat
        quisquam earum autem. Vitae natus numquam ratione aliquid nobis tempore,
        perferendis voluptates officia, labore expedita architecto delectus
        dignissimos minus recusandae a quasi repellat quis facilis! Perspiciatis
        natus, eos facere omnis esse dolores aliquam. Maxime amet saepe fugiat
        nam minima et delectus, totam enim alias earum deleniti. Aut eos
        nostrum, accusamus maiores dolore veniam aspernatur quos dicta, quasi
        quae commodi, excepturi voluptatum tenetur quam. Expedita hic eveniet,
        voluptas, consequuntur odio doloremque, quam facilis natus voluptate
        dicta repudiandae! Consequuntur omnis inventore consectetur corporis
        totam, consequatur praesentium id maxime tempore temporibus nobis
        nesciunt dolor distinctio error. Sunt, consequuntur tenetur eligendi sed
        quis porro accusantium explicabo necessitatibus nemo totam veniam
        laudantium molestiae voluptatem dolore esse officiis quae inventore ab
        accusamus quia sequi? Incidunt eligendi id mollitia natus! Suscipit
        illum qui amet itaque culpa, aspernatur aut, dolorem eum eos ex
        molestias consequuntur, rerum nobis! Minus accusantium quibusdam dolorem
        repellendus, adipisci molestiae, consequatur, ducimus nostrum cum
        voluptate quo amet! Optio debitis ducimus provident molestiae, illo
        inventore omnis odio cupiditate, nam quos amet praesentium dolores
        voluptatum itaque. Inventore excepturi molestias id minus quisquam
        praesentium nesciunt voluptatum ad nam, voluptas voluptatem! Accusamus
        adipisci harum, quisquam totam nobis incidunt dolorem deserunt
        voluptatibus, itaque obcaecati esse? Sequi sint veritatis delectus natus
        quos laborum fuga. Deleniti itaque, dignissimos error quas odit saepe
        unde omnis. In quas possimus qui distinctio nesciunt! Fugit non odit ex
        blanditiis dignissimos eum provident sed cumque, eligendi incidunt,
        possimus vitae deserunt nobis dicta debitis mollitia? Numquam doloremque
        quae sit accusamus. Fugit nesciunt totam facilis blanditiis voluptatum
        voluptatem exercitationem nihil corrupti a impedit culpa minima ex
        dolorem eos, nisi quisquam modi? Quisquam alias suscipit consequatur
        omnis dicta itaque dolore amet illo! Eos eum, voluptates facilis
        suscipit temporibus qui id iure ab recusandae unde error aliquam
        cupiditate, porro deserunt? Fugit similique, officia error ullam
        laboriosam soluta, eveniet ad nemo maiores recusandae ipsum. Quo vero
        rerum aut itaque eaque, labore iste maiores quia temporibus ipsam maxime
        accusamus eum et quis? Expedita asperiores accusantium officia quas eum
        alias, fugiat doloremque sequi quaerat, recusandae quam? Suscipit eius
        excepturi aspernatur officiis a facilis delectus iste laudantium, neque
        dicta, praesentium at impedit ea sequi totam omnis. Voluptate ab impedit
        quod vel dolorem cupiditate, assumenda deleniti atque dolores? Officia
        distinctio deleniti nemo cupiditate odit totam libero repellendus
        blanditiis id quae vero quisquam numquam nostrum ipsam, quos aspernatur
        debitis in beatae temporibus alias tempora placeat? Ea laborum ipsam
        tempore? Quaerat ex corporis molestias debitis magnam? Enim nulla
        mollitia reprehenderit id voluptatibus non tempora! Cum labore magnam
        excepturi maxime ut iure voluptate, distinctio, nulla nihil accusantium
        dolorum delectus eos natus. Ipsa sapiente porro fugiat amet. Corrupti
        sunt laboriosam itaque ab vel facilis iusto similique incidunt ad natus
        repudiandae placeat ea voluptatum facere doloribus tenetur cum, quisquam
        sed dignissimos ut! Dolorem. Excepturi modi tenetur dignissimos esse ut
        sunt repudiandae temporibus, iusto expedita voluptatum hic deserunt
        corrupti adipisci eligendi iste, sequi tempora consectetur, debitis
        sapiente maxime quidem explicabo. Eum quisquam nobis enim? Repudiandae
        sit cumque fuga quibusdam incidunt maxime sint, quas praesentium ratione
        aut distinctio dicta nobis esse illum laboriosam exercitationem
        consectetur eius. Tempora doloremque aut dolores ea? Et officia laborum
        porro. At repellat eius inventore voluptatum, sit voluptas nulla vero
        voluptatibus. Et itaque ipsam, laboriosam, repellendus ratione ex,
        laborum ad quia ullam voluptas magnam perspiciatis voluptatibus sunt ut?
        Omnis, eveniet numquam? Distinctio obcaecati, tempore commodi optio
        suscipit eum dignissimos sunt perspiciatis aliquam, soluta nulla
        quibusdam esse praesentium illo numquam magni saepe expedita cum,
        voluptates dolores odit aut sequi. Tempore, error ad? At, reprehenderit
        quidem. Tempora dignissimos amet quidem possimus. At, sequi quis
        doloremque exercitationem voluptate ipsum repudiandae repellendus nisi,
        dignissimos itaque tenetur cum optio quidem assumenda et earum ipsam
        cupiditate fugit? Distinctio aliquid et, magnam dicta fuga similique
        quos itaque nostrum totam quisquam ab placeat debitis non voluptatum,
        fugiat eum blanditiis excepturi corporis pariatur. Non, suscipit! Harum
        similique nesciunt id provident? Aliquid exercitationem magni ipsum
        assumenda corrupti quisquam itaque quas beatae tempore culpa velit quod
        iusto libero ab aliquam, odio soluta quaerat natus repellendus saepe,
        quos delectus in? Omnis, officia facilis. Expedita blanditiis nostrum
        dolores veritatis consequatur, enim quas doloremque nulla commodi cum
        sapiente vel! Cum adipisci maxime, rem corporis iste facere!
        Dignissimos, debitis soluta. Quaerat culpa fugiat corporis numquam quod?
        Amet consequuntur autem voluptatum doloremque dignissimos. Temporibus
        enim eum facilis nulla! Voluptate dignissimos iure corrupti, optio quae
        rem pariatur ratione doloremque vero animi, ex fugit deleniti minus
        ullam dolorum. Praesentium. Amet illo atque quidem ea dolores in
        assumenda pariatur quod minima molestiae. Repudiandae, provident?
        Provident, hic. Ullam enim, dolore excepturi ut eligendi hic blanditiis
        vero harum adipisci inventore voluptatibus sint? Nam, et dolor beatae
        quasi maiores inventore. Veniam corrupti natus repudiandae amet
        consequuntur harum est, eligendi earum a sit, necessitatibus atque
        placeat modi sunt ullam explicabo quaerat rem? Quisquam, atque.
        Molestias quis placeat laborum minus, quos tempore. Voluptas earum, sed
        consectetur eos aliquam impedit autem, delectus ullam consequatur
        provident corrupti distinctio reprehenderit ea enim modi laudantium ad.
        Cupiditate, sequi sit! Distinctio, maiores obcaecati vitae inventore
        officiis eaque. Placeat nostrum aliquid corporis veritatis. Qui enim
        temporibus cumque nulla ducimus accusamus odio libero autem pariatur hic
        maiores omnis harum, placeat fugiat quasi. Praesentium laudantium
        adipisci dolores quibusdam iusto pariatur id ratione, ea reprehenderit
        quasi saepe eius quisquam animi delectus assumenda qui sint? Minus
        nesciunt repudiandae quaerat asperiores soluta. Repudiandae eos
        recusandae tempora. Id, consectetur temporibus. Laboriosam facilis quasi
        quia praesentium culpa assumenda dolorem qui! Ab, cupiditate cumque iste
        animi, minus quod, id suscipit totam distinctio repellendus unde. Eum
        sit pariatur reprehenderit sed! Itaque perferendis saepe ratione? Quidem
        pariatur expedita voluptas, eum consequatur dolore voluptate suscipit.
        Velit aut magnam voluptate quasi veniam, repellendus esse tempora
        facilis distinctio deleniti, ea vitae corporis? Esse, excepturi? Facere
        soluta nemo labore suscipit obcaecati, sit veniam explicabo architecto
        voluptatum, error quis ullam alias consectetur cum magnam, quod
        temporibus aliquid fuga aliquam. Quibusdam dicta, voluptatem deleniti
        corrupti adipisci autem.
      </div> */}
    </div>
  );
}

export default App;
