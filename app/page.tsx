import GridBackground from "@/components/grid-background";
import { Hero1 } from "@/components/hero1";

export default function Home() {
  return (
    <>
      <GridBackground
        className="absolute -z-10 w-full top-0 h-screen mask-alpha mask-b-from-black"
        cellSize={300}
      />
      <Hero1
        heading="We build stuff"
        description="(like, with code)"
        badge=""
        buttons={{
          primary: {
            text: "Our Stuff",
            url: "/stuff",
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
