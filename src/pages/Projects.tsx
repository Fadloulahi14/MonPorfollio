import { ExternalLink, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [

    {
      title: "Luxury Jet – E-commerce (Produits naturels)",
      description: "Site e-commerce spécialisé dans la vente de produits naturels : huiles naturelles, parfums, thiourayes et poudre de riz. Développé avec Next.js pour une expérience utilisateur optimale.",
      technologies: ["Next.js", "Vercel"],
      link: "https://luxury-jet.vercel.app/",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Senegal Travel – Agence de voyage",
      description: "Application web d'agence de voyage permettant la réservation et la gestion de voyages. Développée avec React pour le frontend et Spring Boot pour le backend.",
      technologies: ["React", "Spring Boot", "Vercel"],
      link: "https://senegal-travel.vercel.app/",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Murafa – E-commerce (Vente d’habits)",
      description:
        "Plateforme de commerce en ligne permettant la mise envente et l’achat de vêtements. Intègre la gestion des produits, panier, paiement et utilisateurs.",
      technologies: ["Next.js,", "Supabase,", "Bootstrap", "TailwindCSS"],
       link: "https://murafacreation.vercel.app/",
       gradient: "from-blue-500 to-cyan-500",

    
    },
     {
      title: "Application du Mussee de la civilisation Africaine",
      description:
        "plateforme pour la virtualisation du mussee .",
      technologies: ["React", "Nodes js", "postegres", "docker"],
       link: "https://musser-fadildev.vercel.app/",
      // referent: "M. Birane Baila Wane",
      // phone: "77 766 95 95",
       gradient: "from-blue-500 to-cyan-500",
    },
     {
      title: "BankODC – Gestion des comptes et clients bancaires",
      description:
        "Application backend développée avec Spring Boot permettant la gestion complète des clients et des comptes bancaires.",
      technologies: ["Spring Boot", "Spring Data JPA", "BSpring Security", ", PostgreSQL", "Docker"],
       link: "https://github.com/Fadloulahi14/OMPaySpringBoot",
      referent: "M. Birane Baila Wane",
      phone: "77 766 95 95",
      gradient: "from-blue-500 to-cyan-500",
    },
     {
      title: "BANQUE – Gestion Bancaire",
      description:
        "Application backend développée avec Laravel pour la gestion complète des clients, comptes bancaires et transactions.",
      technologies: ['Laravel', 'PostgreSQL','(Railway / Neon)', 'MongoDB', 'Horizon', 'JWT', 'Docker', 'Render' ,'déploiement cloud'],
      link: "https://github.com/Fadloulahi14/projetLaravelGestionBancaire",
      referent: "M. Birane Baila Wane",
      phone: "77 766 95 95",
      gradient: "from-blue-500 to-cyan-500",
    },
     
    //limite
    {
      title: "Gestion des étudiants",
      description:
        "Application web complète de gestion académique permettant de gérer les étudiants, les cours, les notes et les présences avec une interface intuitive.",
      technologies: ["PHP OO", "MySQL", "Bootstrap", "JavaScript"],
      // link: "https://ndiaye-fallou.infinityfreeapp.com/index.php?page=login_apprenant",
      referent: "M. Birane Baila Wane",
      phone: "77 766 95 95",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "JOOTAAYBI – Clone WhatsApp",
      description:
        "Application de messagerie instantanée en temps réel avec interface moderne, gestion des conversations, envoi de messages et notifications.",
      technologies: ["HTML", "TailwindCSS", "JavaScript", "JSON Server"],
      link: "https://projet-jotaybi.vercel.app/",
      referent: "M. Birane Baila Wane",
      phone: "77 766 95 95",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "MAXITSA – Transfert & Paiements",
      description:
        "Solution complète de transfert d'argent et de paiements en ligne avec API REST sécurisée, intégration de services de paiement et architecture containerisée.",
      technologies: ["PHP POO", "API REST", "MySQL", "PostgreSQL", "Docker", "NGINX"],
      referent: "M. Birane Baila Wane",
      phone: "77 766 95 95",
      gradient: "from-purple-500 to-pink-500",
      featured: true,
    },
    {
      title: "GSalaire – Gestion des salaires",
      description:
        "Application moderne de gestion de la paie avec calcul automatique des salaires, génération de fiches de paie et statistiques RH détaillées.",
      technologies: ["React.js", "Node.js", "MySQL", "Prisma ORM", "TailwindCSS"],
      referent: "M. Aly Tall NIANG",
      phone: "77 182 54 14",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "AppDAF – Recherche citoyen",
      description:
        "API backend robuste pour la recherche et la gestion d'informations citoyennes avec authentification JWT et architecture RESTful.",
      technologies: ["Laravel", "PostgreSQL", "API REST", "Docker", "JWT"],
      referent: "M. Birane Baila Wane",
      phone: "77 766 95 95",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Applications web – ecosysITservice",
      description:
        "Ensemble d'applications web sur mesure pour divers clients, incluant sites vitrines, e-commerce et applications métier avec solutions adaptées.",
      technologies: ["React.js", "Node.js", "TailwindCSS", "PostgreSQL", "MySQL"],
      link: "https://ecosys-it-tservice.vercel.app/index.html",
      gradient: "from-yellow-500 to-orange-500",
      personal: true,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-container">
        <div className="text-center space-y-6 animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Mes <span className="gradient-text">Projets</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Découvrez une sélection de mes réalisations techniques et créatives
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-container bg-secondary/50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl overflow-hidden shadow-xl card-hover animate-fade-in group ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div
                className={`h-3 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-6 space-y-4">
                {/* Title & Badge */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.personal && (
                    <span className="tech-badge shrink-0">Personnel</span>
                  )}
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shrink-0">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Referent Info */}
                {project.referent && (
                  <div className="pt-4 border-t border-border space-y-1">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Référent:</span> {project.referent}
                    </p>
                    {project.phone && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>{project.phone}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Button */}
                {project.link && (
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <Button className="w-full group/btn" variant="outline">
                        Voir le projet
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
