import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardItem {
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
}

interface CardsProps {
  cards: CardItem[];
}

export default function Cards({ cards }: CardsProps) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {cards.map((thing, index) => (
        <Card key={index}>
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
  );
}
