import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "fadloulahi14@gmail.com",
      href: "fadloulahi14@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Téléphone",
      value: "+221 77 801 27 31",
      href: "tel:+221 77 801 27 31",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Localisation",
      value: "Dakar, Sénégal",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Fadloulahi14",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fallou-ndiaye-b089172a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      gradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-container">
        <div className="text-center space-y-6 animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contactez-<span className="gradient-text">Fadil'Dev</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Une question, un projet ou simplement envie d'échanger ? N'hésitez pas à me contacter !
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-container bg-secondary/50">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-3xl font-bold mb-6">Informations de contact</h2>
              <p className="text-muted-foreground mb-8">
                Je suis disponible pour discuter de vos projets et répondre à vos questions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-lg card-hover"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-semibold hover:text-primary transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Retrouvez-moi sur</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-lg card-hover`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">Mon CV</h3>
              <p className="text-white/90 mb-4 text-sm">
                Téléchargez mon curriculum vitae complet pour en savoir plus sur mon parcours
              </p>
              <a
                href="/cv/Fallou_Ndiaye_CV.pdf"
                download="Fallou_Ndiaye_CV.pdf"
                className="inline-block w-full"
              >
                <Button
                  variant="outline"
                  className="w-full bg-white hover:bg-white/90 text-primary group"
                  size="lg"
                >
                  <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                  Télécharger mon CV
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl space-y-6">
              <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-bg group"
                size="lg"
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer le message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
