import Intro from "./Intro";
import Content from "./Content";
import Slider from "./Slider";

function HomePage() {
    return (
      <div className=" inline-block mx-10 my-16 h-auto ">
        <Slider/>
        <Intro/>
        <Content/>
      </div>

    )
   }
   
   export default HomePage;