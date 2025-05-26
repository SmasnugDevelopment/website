import Cards from "@/components/cards";

export default function StuffPage() {
  return (
    <section className="flex justify-center p-4">
      <div className="container flex flex-col gap-4">
        <h1 className="text-4xl">Stuff</h1>
        <p>Basically anything that isn't a gmae is chucked in here</p>
        <Cards
          cards={[
            {
              name: "SmasnugType",
              description: "Type smasnug as fast as you can",
              links: [
                {
                  name: "Website",
                  url: "https://type.smasnug.dev",
                  target: "_blank",
                  variant: "default",
                },
                {
                  name: "Github",
                  url: "https://github.com/smasnugdevelopment/smasnugtype",
                  target: "_blank",
                  variant: "outline",
                },
              ],
            },
            {
              name: "Smasbook Calculator",
              description: "Calculate the Smasbook you have",
              links: [
                {
                  name: "Website",
                  url: "https://smasbook-calculator.smasnug.dev",
                  target: "_blank",
                  variant: "default",
                },
                {
                  name: "Github",
                  url: "https://github.com/smasnugdevelopment/smasbook-calculator",
                  target: "_blank",
                  variant: "outline",
                },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}
