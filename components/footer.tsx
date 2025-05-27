import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
    target?: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "/logos/horizontal.png",
    alt: "Smasnug Development",
    url: "/",
  },
  menuItems = [
    {
      title: "Stuff",
      links: [
        { text: "Gmaes", url: "/gmaes" },
        { text: "Other", url: "/stuff" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "/about" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Team",
      links: [
        { text: "Ingo Wolf", url: "https://ingo.au", target: "_blank" },
        {
          text: "Bombrrr",
          url: "https://github.com/bombrrr",
          target: "_blank",
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          text: "Github",
          url: "https://github.com/smasnugdevelopment",
          target: "_blank",
        },
      ],
    },
  ],
  copyright = "Not affiliated with Samsung Electronics",
  bottomLinks = [{ text: "Privacy Policy", url: "/privacy" }],
}: FooterProps) => {
  return (
    <section className="pt-32 flex justify-center p-4 pb-8">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href="/">
                  <Image
                    width={1000}
                    height={280}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 w-full"
                  />
                </Link>
              </div>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <Link href={link.url} target={link.target}>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <Link href={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
