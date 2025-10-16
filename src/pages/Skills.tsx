import { Code, Database, Smartphone, Server, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 88 },
      ],
    },
    {
      title: "Développement Backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PHP Laravel", level: 90 },
        { name: "Python", level: 75 },
        { name: "Node.js", level: 85 },
      ],
    },
    {
      title: "Applications Mobiles",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      featured: true,
      description:
        "Expertise avancée en développement mobile avec Flutter pour des applications cross-platform performantes et natives. Maîtrise complète du framework pour créer des interfaces utilisateur fluides et des expériences mobiles exceptionnelles.",
      skills: [{ name: "Flutter", level: 92 }],
    },
    {
      title: "Gestion de Bases de Données",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "SupaBase", level: 80 },
        { name: "MongoDB", level: 82 },
        { name: "Firebase", level: 85 },
      ],
    },
    {
      title: "Création de Contenus Dynamiques",
      icon: <Globe className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "WordPress", level: 88 },
        { name: "Joomla", level: 75 },
      ],
    },
    {
      title: "DevOps & Systèmes",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      featured: true,
      description:
        "Maîtrise complète des outils DevOps pour l'automatisation et l'orchestration : Docker pour la conteneurisation, Kubernetes pour l'orchestration, Jenkins et JMeter pour l'intégration continue et les tests de performance, GitHub Actions et GitLab CI pour les pipelines CI/CD, Linux (Ubuntu, Debian) pour l'administration système, et NGINX pour le reverse proxy et le load balancing. Ces compétences me permettent d'optimiser les déploiements et d'assurer la scalabilité des applications.",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Jenkins", level: 88 },
        { name: "JMeter", level: 82 },
        { name: "GitHub Actions", level: 87 },
        { name: "GitLab CI", level: 85 },
        { name: "Linux (Ubuntu/Debian)", level: 90 },
        { name: "NGINX", level: 85 },
      ],
    },
  ];

  const thirdPartyServices = [
    "PayPal",
    "PayTech",
    "Firebase",
    "Stripe",
    "Twilio",
    "SendGrid",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-container">
        <div className="text-center space-y-6 animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Mes <span className="gradient-text">Compétences</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Une expertise technique complète pour créer des solutions innovantes et performantes
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-container bg-secondary/50">
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-xl card-hover animate-fade-in ${
                category.featured ? "md:col-span-2 border-2 border-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              {category.description && (
                <p className="text-muted-foreground mb-6 leading-relaxed bg-primary/5 p-4 rounded-lg border border-primary/10">
                  {category.description}
                </p>
              )}

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `slideIn 1s ease-out ${skillIndex * 100}ms forwards`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Third Party Services */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Intégration de <span className="gradient-text">Services Tiers</span>
          </h2>
          <p className="text-muted-foreground">
            Expérience avec les principales API et services de paiement et communication
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {thirdPartyServices.map((service, index) => (
            <div
              key={index}
              className="px-8 py-4 bg-card rounded-xl shadow-lg font-bold text-lg card-hover border border-border"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
