import { FiGithub } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    { icon: FiGithub, href: "https://github.com/ThatoneGuywhoStoleyourPassword", label: "GitHub" },
    { icon: LiaLinkedin, href: "https://linkedin.com/in/christianbenavente", label: "LinkedIn" },
];

export const Footer = () => {
    return (
        <footer className="border-t border-border py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Initials */}
                    <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                        CB<span className="text-primary">.</span>
                    </a>

                    {/* Nav Links */}
                    <div className="flex items-center gap-1 flex-wrap justify-center">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all text-sm"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full glass hover:text-primary transition-all duration-300"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                </div>

                {/* Bottom line */}
                <p className="text-center text-xs text-muted-foreground mt-8">
                    © {new Date().getFullYear()} Christian Benavente. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
