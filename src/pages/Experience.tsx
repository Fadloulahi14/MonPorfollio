import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      title: "Développeur Full Stack",
      company: "Orange Digital Center (SONATEL ACADEMY)",
      period: "Février 2025 - Octobre 2025",
      location: "Dakar, Sénégal",
      type: "Developpeur Full Stack",
      description:
        "Développeur full stack,à l'Orange Digital Center (SONATEL ACADEMY)  avec Une riche apprentissage des technologies modernes, méthodologies agiles et bonnes pratiques de développement. Réalisation de projets concrets en équipe.",
      achievements: [
        "Maîtrise approfondie de React et Node.js",
        "Développement d'applications full stack complètes",
        "Travail en équipe avec méthodes agiles",
        "Intégration d'API et services tiers",
      ],
      link: "https://orangedigitalcenter.sn/",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Stage - Développeur Full Stack",
      company: "Agence de Solution Informatique (ASI)",
      period: "06 Février - 08 Août 2024",
      location: "Dakar, Sénégal",
      type: "Stage",
      description:
        "Participation active au développement de projets web et mobiles pour divers clients. Contribution à toutes les phases du cycle de développement, de la conception à la mise en production.",
      achievements: [
        "Développement de 5+ applications web et mobiles",
        "Intégration d'API REST et services de paiement",
        "Optimisation des performances et de la sécurité",
        "Documentation technique complète",
      ],
      link: "https://dakarhost.com/",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Fondateur & Développeur",
      company: "Ecosys IT Services",
      period: "En cours depuis 2023",
      location: "Sénégal",
      type: "Entrepreneuriat",
      description:
        "Co-fondation d'une startup spécialisée dans les solutions informatiques sur mesure. Gestion de projets clients de A à Z, développement d'applications web et mobiles, et conseil technique.",
      achievements: [
        "15+ projets clients réalisés avec succès",
        "Équipe de 3 développeurs gérée",
        "Solutions complètes : du design au déploiement",
        "Satisfaction client 100% avec retours positifs",
      ],
      link: "https://ecosys-it-tservice.vercel.app/index.html",
      gradient: "from-green-500 to-emerald-500",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-container">
        <div className="text-center space-y-6 animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Mon <span className="gradient-text">Parcours</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Un parcours riche et diversifié dans le développement web et mobile
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-container bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                  } md:w-[calc(50%-2rem)] ml-8`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-[-2.25rem] md:left-auto top-8 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} shadow-lg ring-4 ring-background ${
                      index % 2 === 0
                        ? "md:right-[-2.25rem]"
                        : "md:left-[-2.25rem]"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`bg-card rounded-2xl p-8 shadow-xl card-hover border-2 ${
                      exp.featured ? "border-primary/20" : "border-transparent"
                    }`}
                  >
                  
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${exp.gradient} text-white`}
                          >
                            {exp.type}
                          </span>
                          {exp.featured && (
                            <span className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary border border-primary/20">
                              En cours
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-lg text-primary font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                  
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div
                            className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} mt-2`}
                          />
                          <p className="text-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>

                   
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button variant="outline" className="group/btn">
                          En savoir plus
                          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
