import { GraduationCap, Award, Languages, Heart } from "lucide-react";

const About = () => {
  const education = [
    {
      year: "2025",
      title: "Développeur Full Stack",
      institution: "Orange Digital Center (SONATEL ACADEMIE)",
      description: "Formation intensive en développement web et mobile",
    },
    {
      year: "2024",
      title: "Technicien Supérieur en Informatique",
      institution: "Mention Bien",
      description: "Développement web et mobile",
    },
    {
      year: "2023 - 2024",
      title: "License 2 en Informatique DWM",
      institution: "ISEP de Thiès",
      description: "Développement Web et Mobile",
    },
    {
      year: "2022 - 2023",
      title: "License 1 en Informatique DWM",
      institution: "ISEP de Thiès",
      description: "Développement Web et Mobile",
    },
    {
      year: "2021 - 2022",
      title: "Baccalauréat",
      institution: "Mention Assez Bien",
      description: "",
    },
  ];

  const certifications = [
    "Learn Object-Oriented Programming with PHP",
    "Introduction to Javascript: The Basics",
    "Getting Started with Azure DevOps",
    "Linux: Processes & System Resource Management for DevOps",
  ];

  const languages = [
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Intermédiaire" },
    { name: "Wolof", level: "Langue maternelle" },
  ];

  const interests = ["Lecture", "Bénévolat", "Football"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            À Propos de <span className="gradient-text">Moi</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Développeur Full Stack & DevOps avec 3 ans d'expérience dans la création de sites et
            d'applications web. Solide expertise en intégration d'API, gestion de bases de données
            et CMS. Maîtrise des outils DevOps modernes tels que Docker, Jenkins, JMeter et
            Kubernetes pour l'automatisation, le déploiement et l'orchestration d'applications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Co-fondateur d'Ecosys IT Services, motivé, orienté solution et passionné par
            l'optimisation des processus de développement et de déploiement.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-container bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Formation</h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg card-hover animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-bold text-sm">
                      {edu.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-muted-foreground">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-lg card-hover"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-foreground font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Interests */}
      <section className="section-container bg-secondary/50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Languages className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Langues</h2>
            </div>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="bg-card rounded-xl p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{lang.name}</span>
                    <span className="tech-badge">{lang.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Centres d'intérêt</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card rounded-xl shadow-lg font-medium card-hover"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
