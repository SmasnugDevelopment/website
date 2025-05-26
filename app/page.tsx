import GridBackground from "@/components/grid-background";
import { Hero1 } from "@/components/hero1";

export default function Home() {
  return (
    <>
      <GridBackground
        className="absolute -z-10 w-full top-0 h-screen mask-alpha mask-b-from-black"
        cellSize={100}
      />
      <Hero1
        heading="We build stuff"
        description="(mostly gmaes)"
        badge=""
        buttons={{
          primary: {
            text: "Our Gmaes",
            url: "/gmaes",
          },
          secondary: {
            text: "Github",
            url: "https://github.com/smasnugdevelopment",
            target: "_blank",
          },
        }}
      />
    </>
  );
}
