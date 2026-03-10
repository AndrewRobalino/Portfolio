import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/AndrewRobalino",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/andrew-robalino-garcia-b74563323/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:andrewrobalino1@gmail.com",
    label: "Email",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/andrewrobalino",
    label: "Instagram",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 border-b border-white/10 bg-matte-black/80 backdrop-blur-sm">
      <span className="font-sans text-xs md:text-sm tracking-widest uppercase text-green-400">
        Andrew Robalino Garcia
      </span>

      <div className="flex items-center gap-3 md:gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white/70 hover:text-white transition-opacity duration-200"
          >
            <Icon size={18} strokeWidth={1.5} />
          </a>
        ))}
      </div>
    </nav>
  );
}
