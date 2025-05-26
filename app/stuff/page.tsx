import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, type buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function StuffPage() {
  const stuffs: {
    name: string;
    description: string;
    links?: {
      name: string;
      url: string;
      target?: string;
      variant?:
        | "outline"
        | "link"
        | "default"
        | "destructive"
        | "secondary"
        | "ghost";
    }[];
  }[] = [
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
  ];

  return (
    <section className="flex justify-center p-4">
      <div className="container flex flex-col gap-4">
        <h1 className="text-4xl">Stuff</h1>
        <p>Basically anything that isn't a gmae is chucked in here</p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {stuffs.map((thing) => (
            <Card>
              <CardHeader>
                <CardTitle>{thing.name}</CardTitle>
                <CardDescription>{thing.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-row gap-1">
                {thing.links?.map((link) => (
                  <Button key={link.name} variant={link.variant}>
                    <Link href={link.url} target={link.target}>
                      {link.name}
                    </Link>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
