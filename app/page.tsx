import GridBackground from "@/components/grid-background";
import { Hero1 } from "@/components/hero1";

export default function Home() {
  return (
    <>
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
        image={{ src: "/logos/maskable.svg", alt: "Logo" }}
      />
      <GridBackground />
    </>
  );
}
