import { Button } from "@/components/Button";
import { ArrowRight, Download} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden"> 
    {/* BG */}
    <div className="absolute inset-0">
        <img 
        src="/hero-bg.jpg" 
        alt= "Hero Image" 
        className=" w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
    </div>
    
    {/* Green Dots */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
        <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
        style={{
            backgroundColor: "#20B2A6",
            // eslint-disable-next-line react-hooks/purity
            left: `${Math.random() * 100}%`,
            // eslint-disable-next-line react-hooks/purity
            top: `${Math.random() * 100}%`,
            // eslint-disable-next-line react-hooks/purity
            animation: `slow-driftc${15 + Math.random() * 20}s 
            ease-in-out infinite`,
            // eslint-disable-next-line react-hooks/purity
            animationDelay: `${Math.random() *5}s`,
        }}
        />
    ))}
    </div>

    {/* Content */}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column -Text Content */}
            <div className="space-y-8">
                <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass test-sm text-primary">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> 
                        CyberSecurity / Network Engineer Student 
                </span>
                </div>
                {/* Headline */}
                <div className="space-y-4">
                    <h1 className="text5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        Securing <span className="text-primary glow-text">Information Systems </span>
                        before  <br/>
                        <span className="font-serif italic font-normal text-white">
                            not after.
                         </span>
                    </h1>
                    <p className=" text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                        Hi, I'm Christian Benavente - a Senior IT student at NJIT 
                        with a passion for cybersecurity and network engineering.
                        I specialze in Network Security and Engineering with 
                        hands on experience building secure networks, full stack web applications and SIEM systems.
                    </p>
                </div>
            </div>

            {/* CTA Buttons */}
            <div>
                <Button size="lg">
                    Contact Me <ArrowRight className="w-5 h-5" />
                </Button>

                <AnimatedBorderButton />

            </div>
            {/* Right Column - Image */}

        </div>
    </div>

     </section>
}