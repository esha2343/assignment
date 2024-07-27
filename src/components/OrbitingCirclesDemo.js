import ContentSection from "./ContentSection";
import MainSection from "./MainSection";
import OrbitingCircles from "./OrbitingCircles";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css.svg";
import gitlabImg from "../assets/gitlab.svg";
import reactImg from "../assets/react.svg";
import awsImg from "../assets/aws.svg";
import flutterImg from "../assets/flutter.svg";
import androidImg from "../assets/android.svg";
import jsImg from "../assets/js.svg";


export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl text-center">
      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[110px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={190}
      >
        <img src={htmlImg} alt="HTML" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[110px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={190}
      >
        <img src={flutterImg} alt="Flutter" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[110px] border-none bg-transparent"
        radius={300}
        duration={20}
        reverse
      >
        <img src={cssImg} alt="CSS" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[130px] border-none bg-transparent"
        radius={300}
        duration={20}
        delay={20}
        reverse
      >
        <img src={jsImg} alt="JavaScript" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[130px] border-none bg-transparent"
        radius={420}
        duration={20}
        delay={20}
        reverse
      >
        <img src={awsImg} alt="AWS" />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[130px] border-none bg-transparent"
        radius={420}
        duration={20}
        reverse
      >
        <img src={gitlabImg} alt="Gitlab" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[130px] border-none bg-transparent"
        radius={540}
        duration={20}
        delay={20}
        reverse
      >
        <img src={androidImg} alt="Android" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[130px] border-none bg-transparent"
        radius={540}
        duration={20}
        reverse
      >
        <img src={reactImg} alt="React" />
      </OrbitingCircles>
      <MainSection />   
    </div>
  );
}
