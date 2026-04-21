import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle} from "lucide-react";
import {Button} from "@/components/Button";
import {useState} from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "chrisbenavente1234@gmail.com",
        href: "mailto:chrisbenavente1234@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (201) 496-134",
        href: "tel:+12014961348",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Newark, NJ",
        href: "#",
    },
];


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, //'success' or 'error'
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type: null, message:""});

        try{
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            
            if(!serviceID || !templateID || !publicKey){
                throw new Error(
                    "EmailJS configuration is missing. Please check environment variables"
                );
            }

            await emailjs.send(serviceID, templateID, {
                name: formData.name,
                email: formData.email,
                message: formData.message,

            }, publicKey);

            setSubmitStatus({
                type: "success",
                message:"Message was sent successfully! I'll get back to you soon!",
            });

            setFormData({name:"", email:"", message:""});

     } catch (err) {
        console.error("EmailJS error:", error);
        setSubmitStatus({
            type:"error",
            message:
            error.text || "Failed to send message. Please try again later.",
        });

        }finally{
            setIsLoading(false)
        }
    };

    return (
    <section id="contact" className="py-32 relative overflow-hidden"> 
    <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
    </div>

    <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Get in Touch
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Let's build{" "}
                    <span className=" font-serif italic font-normal text-white">
                        something secure
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Have a project in mind? I'd love to hear about it. Send me a message
                    and let's discuss how we can work together.
                </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-2 max-w-5xl mx-auto">
            <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label 
                            htmlFor="name" 
                            className="block text-sm font-medium mb-2"
                        >
                            Name 
                        </label>
                        <input 
                            id="name" 
                            type="text"
                            required
                            placeholder="Your name...."
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({...formData, name: e.target.value})
                            }
                            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"    
                        />
                    </div>


                    <div>
                        <label 
                            htmlFor="email"
                            type="email"
                            className="block text-sm font-medium mb-2" 
                        > 
                            Email 
                        </label>

                        <input 
                            required
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({...formData, email: e.target.value})
                            }
                            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="message" 
                            className="block text-sm font-medium mb-2"
                        > 
                            Message 
                        </label>
                        <textarea 
                            rows={5}
                            required
                            placeholder="Your message...."
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({...formData, message: e.target.value})
                            }
                            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                        />
                    </div>

                    <Button 
                        className="w-full" 
                        type="submit" 
                        size="lg" 
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>Sending...</>       
                        ) : (
                           <>
                                Send Message
                                <Send className="w-5 h-5"/>
                            </>
                    )}
                    </Button>

                    {submitStatus.type && (
                        <div
                            className={`flex items-center gap-3
                                p-4 rounded-xl ${
                                    submitStatus.type === "success"
                                    ? "bg-green-500/10 border border-green-500/20 text-green"
                                    : "bg-red-500/10 border border-red-500/20 text-red"
                                }`}
                        >
                            {submitStatus.type === "success" ? (
                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                            ) : (
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            )}
                            <p className="text-sm">{submitStatus.message}</p>
                        </div>
                    )}
                </form>
            </div>

            {/* Contact Info Column */}
  <div className="flex flex-col gap-6 h-full">

      {/* Contact Info Cards */}
      <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-400 flex-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
          {contactInfo.map((info, idx) => (
              <a 
                  key={idx} 
                  href={info.href}
                  className="flex items-center gap-4 group"
              >
                  <div className="w-16 h-16 rounded-xl bg-surface border border-border flex items-center justify-center text-primary group-hover:border-primary transition-all">
                      <info.icon size={28} />
                  </div>
                  <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">{info.label}</p>
                      <p className="text-base text-foreground font-medium">{info.value}</p>
                  </div>
              </a>
          ))}
      </div>

      {/* Availability Box */}
      <div className="glass p-10 rounded-3xl border border-primary/30 animate-fade-in animation-delay-500 relative">
          <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-green-500">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-ping absolute"/>
          </div>
          <div className="pl-6">
              <p className="text-base font-semibold text-foreground">Available for Work</p>
              <p className="text-sm text-muted-foreground mt-1">Open to new opportunities</p>
          </div>
      </div>

  </div>
        </div>
    </div>
    </section>
    );
};