import { WeightIcon, Rocket, Users, LockIcon, Weight } from "lucide-react";




export const About = () => {
    return ( 
    <section id="about"className="py-32 relative overflow-hidden">
        <div className=" container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 {/* Left Column */}
                 <div className="space-y-8">
                    <div className="animate-fade-in">
                       <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                 <h2 className="text-4xl md:text-5xl font-bold leading-tight animation-fade-in animation-delay-100 text-secondary-foreground">
                    Securing the world, {" "}
                    <span className="font-serif italic font-normal text-white"> one port at a time</span>
                 </h2>
                
                <div className=" space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        I am an passionate Information technology student focused in the field of Cybersecurity
                        and Network Engineering. My curiosity and drive to learn exactly how the systems that coexist with us work
                        has lead me into this world of designing and securing said systems.
                    </p>
                    <p>
                        Throughout my time at NJIT I have worked with countless technologies and groups of people. 
                        I have experience developing full-stack applications, secure cloud VPCs, websites and SIEM systems.
                        These experiences have helped me sharpen my abilities in programming, network engineering and designing secure architecturers.
                    </p>
                    <p>
                        For those still reading i hope that you will be part of the next step in my journey where I aim to
                        apply all the skills i have learned for the good of the world. Whether it be securing a vulnerable system, developing the next big
                        application, or just learning something new, I am always looking for the next challenge to tackle.
                    </p>

                </div>

                <div className=" glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        "My mission is to create systems that do not have to compromise functionality for security,
                        systems that users can trust and use with ease."
                    </p>
                </div>


            </div>
          </div>
        </div>
    </section>
    );
};