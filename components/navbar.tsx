import { Menu } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url?: string;
  description?: string;
  icon?: React.ReactNode;
  target?: string;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    mobileSrc: string;
    alt: string;
  };
  menu?: MenuItem[];
  buttons?: {
    title: string;
    url: string;
    target?: string;
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
    size?: "sm" | "default" | "lg" | "icon";
    icon?: React.ReactNode;
  }[];
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/logos/horizontal.svg",
    mobileSrc: "/logos/favicon.svg",
    alt: "logo",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Gmaes",
      items: [
        {
          title: "View all",
          url: "/games",
        },
      ],
    },
    {
      title: "Other Stuff",
      items: [
        {
          title: "SmasnugType",
          description: "Type smasnug as fast a possible",
          url: "https://type.smasnug.dev",
          target: "_blank",
        },
        {
          title: "Smasbook Calculator",
          description: "Calculate the Smasbook you have",
          url: "https://smasbook-calculator.smasnug.dev",
          target: "_blank",
        },
        {
          title: "View all",
          url: "/stuff",
        },
      ],
    },
    {
      title: "About Us",
      url: "#",
    },
  ],
  buttons = [
    {
      title: "Github",
      url: "https://github.com/SmasnugDevelopment",
      icon: <FaGithub />,
      target: "_blank",
    },
  ],
}: NavbarProps) => {
  return (
    <section className="p-4 flex justify-center sticky top-0">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="h-10" alt={logo.alt} />
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            {buttons.map((button, index) => (
              <Button
                asChild
                variant={button.variant}
                size={button.size}
                key={index}
              >
                <Link href={button.url} target={button.target}>
                  {button.icon}
                  {button.title}
                </Link>
              </Button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <img src={logo.mobileSrc} className="h-10" alt={logo.alt} />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    {buttons.map((button, index) => (
                      <Button
                        asChild
                        variant={button.variant}
                        size={button.size}
                        key={index}
                      >
                        <Link href={button.url} target={button.target}>
                          {button.icon}
                          {button.title}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        target={item.target}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="text-md font-semibold"
      target={item.target}
    >
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
      target={item.target}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };
