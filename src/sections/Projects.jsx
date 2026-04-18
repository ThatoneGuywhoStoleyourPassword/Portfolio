import { FiGithub } from "react-icons/fi";
import { ArrowUpRight} from "lucide-react";


const projects = [
    {
        title: "OpenSearch SIEM",
        description: "A comprehensive SIEM solution using custom-built dashboards to provide real-time security insights and threat detection capabilities.",
        image: "/Projects/opensearch.png",
        tags: ["OpenSearch", "FluentBit", "Linux"],
        link: "#",
        github: "#"
    },
    {
        title: "Cloud9",
        description: "Sample full stack application served on a custom built AWS VPC",
        image: "/Projects/cloud9.png",
        tags: ["AWS", "PHP", "MySQL"],
        link: "#",
        github: "https://github.com/ThatoneGuywhoStoleyourPassword/IT342"
    },
    {
        title: "Velocitype",
        description: "A typing speed test web application with added social features",
        image: "/Projects/velocitype.png",
        tags: ["Rust", "Flutter", "Firebase"],
        link: "#",
        github: "https://github.com/H-RP/Velocitype",
    },
    {
        title: "MealMate",
        description: "A meal planning/tracking app that helps users count macros and prepare dietary plans",
        image: "/Projects/mealmate.png",
        tags: ["PHP", "RabbitMQ", "MySQL"],
        link: "#",
        github: "https://github.com/oso241/IT490"
    },
    {
        title: "JobConnect",
        description: "A full-stack application for job hunters and employers to connect",
        image: "/Projects/jobconnect.png",
        tags: ["PHP", "BASH", "RabbitMQ"],
        link:"#",
        github:"https://github.com/IT490TeamBambooclat/IT490"
    }
];


export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 classNAme="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that
                    <span className=" font-serif italic font-normal text-white">{" "}make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my most recent work, from full-stack applications to network monitoring tools.
                </p>
            </div>
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                <div 
                    key={idx} 
                    className="group glass rounded-xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                    {/* Image*/}
                    <div className="relative overflow-hidden aspect-video">
                        <img 
                           src ={project.image}  
                           alt={project.title} 
                           className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 pointer-events-none"
                            />
                             {/* Overlay Links */}
                             <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <FiGithub className="w-5 h-5"/>
                                </a>
                            </div> 
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <ArrowUpRight 
                            className=" w-5 h-5 text-muted-foreground group-hover:text-primary 
                            group-hover:translate-x-1 group-hover:translate-y-1 transition-all" 
                            />
                        </div>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIdx) => (
                                <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
                ))}

            </div>
        </div>
    </section>
    );
};