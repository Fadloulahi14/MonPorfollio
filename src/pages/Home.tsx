import { Link } from "react-router-dom";
import { ArrowRight, Code2, Rocket, Users, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Disponible pour de nouveaux projets
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Bonjour, je suis{" "}
                <span className="gradient-text">Fallou Ndiaye</span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Développeur Full Stack & DevOps passionné par la création
                d'applications web et mobiles innovantes avec 3 ans d'expérience.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button size="lg" className="gradient-bg group">
                    Voir mes projets
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Me contacter
                  </Button>
                </Link>
                <a
                  href="/cv/Fallou_Ndiaye_CV.pdf"
                  download="Fallou_Ndiaye_CV.pdf"
                >
                  <Button size="lg" variant="outline" className="group">
                    <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                    Télécharger CV
                  </Button>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">Années d'exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-muted-foreground">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative animate-fade-in">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 gradient-bg rounded-full opacity-20 blur-3xl animate-float" />
                <div className="relative bg-card rounded-2xl shadow-2xl p-8 border border-border">
                  <img
                    src="/image/fallou.jpeg"
                    alt="Fallou Ndiaye"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://i.ibb.co/Xkj8QhLY/fallou-Copie.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-secondary/50">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6 rounded-xl bg-card shadow-lg card-hover">
            <div className="w-16 h-16 mx-auto gradient-bg rounded-2xl flex items-center justify-center">
              <Code2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Développement Full Stack</h3>
            <p className="text-muted-foreground">
              Expertise en Spring Boot, Laravel, Node.js, React, Angular et Flutter pour des applications complètes
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-xl bg-card shadow-lg card-hover">
            <div className="w-16 h-16 mx-auto gradient-bg rounded-2xl flex items-center justify-center">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">DevOps & Cloud</h3>
            <p className="text-muted-foreground">
              Maîtrise de Docker, Kubernetes, Jenkins, Jmeter et CI/CD pour des déploiements optimisés
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-xl bg-card shadow-lg card-hover">
            <div className="w-16 h-16 mx-auto gradient-bg rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Collaboration & Agilité</h3>
            <p className="text-muted-foreground">
              Travail en équipe agile avec une forte orientation solution et qualité
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
