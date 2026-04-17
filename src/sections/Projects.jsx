const projects = [
    {
        title: "OpenSearch SIEM",
        description: "A comprehensive SIEM solution using custom-built dashboards to provide real-time security insights and threat detection capabilities.",
        image: "placeholder",
        tags: ["OpenSearch", "FluentBit", "Linux"],
        link: "#",
        github: "#"
    },
    {
        title: "Cloud9",
        description: "Sample full stack application served on a custom built AWS VPC",
        image: "placeholder.jpg",
        tags: ["AWS", "API", "CloudWatch"],
        link: "#",
        github: "https://github.com/ThatoneGuywhoStoleyourPassword/IT342"
    },
    {
        title: "Velocitype",
        description: "A typing speed test web application with added social features",
        image: "placeholder.jpg",
        tags: ["Rust", "Flutter", "Firebase"],
        link: "#",
        github: "https://github.com/H-RP/Velocitype",
    },
    {
        title: "MealMate",
        description: "A meal planning/tracking app that helps users count macros and prepare dietary plans",
        image: "placeholder.jpg",
        tags: ["PHP", "RabbitMQ", "MySQL"],
        link: "#",
        github: "https://github.com/oso241/IT490"
    },
    {
        title: "JobConnect",
        description: "A full-stack application for job hunters and employers to connect",
        image: "placeholder.jpg",
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
                           className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>  
                    </div>
                </div>

                ))}

            </div>
        </div>
    </section>
    );
};