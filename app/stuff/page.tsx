import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, type buttonVariants } from "@/components/ui/button";

export default function StuffPage() {
  const stuffs: {
    name: string;
    description: string;
    links?: {
      name: string;
      url: string;
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
      name: "asdf",
      description: "",
      links: [{ name: "asdf", url: "asdf", variant: "outline" }],
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
              <CardFooter>
                {thing.links?.map((link) => (
                  <Button key={link.name} variant={link.variant}>
                    {link.name}
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
