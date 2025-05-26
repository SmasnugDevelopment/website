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
  const gmaes: {
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
  }[] = [];

  return (
    <section className="flex justify-center p-4">
      <div className="container flex flex-col gap-4">
        <h1 className="text-4xl">Gmaes</h1>
        <p>Mostly in Godot</p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          Coming soon™
          {gmaes.map((thing) => (
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
