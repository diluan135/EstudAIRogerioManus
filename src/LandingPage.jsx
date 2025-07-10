import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  BookOpen, 
  Brain, 
  Calendar, 
  CheckCircle, 
  Clock, 
  GraduationCap, 
  Menu, 
  Search, 
  Target, 
  TrendingUp, 
  Users, 
  X,
  Zap,
  AlertCircle,
  BookMarked,
  Bell,
  BarChart3
} from 'lucide-react'

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">EstudAI Rogério</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Como Funciona
              </a>
              <a href="#para-quem" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Para Quem?
              </a>
              <a href="#precos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Preços (MVP: Gratuito)
              </a>
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Entrar
                </Button>
              </Link>
              <Link to="/cadastro">
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Comece a Estudar com Inteligência
                </Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Como Funciona
                </a>
                <a href="#para-quem" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Para Quem?
                </a>
                <a href="#precos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Preços (MVP: Gratuito)
                </a>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="w-full">
                    Entrar
                  </Button>
                </Link>
                <Link to="/cadastro">
                  <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Comece a Estudar com Inteligência
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Sua vida de estudante está um caos? 
                  <span className="text-primary"> Você se sente um Rogério?</span> 
                  <span className="text-accent"> Então EstudAI!</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Diga adeus à sobrecarga e à desorganização. Rogério, sua IA de estudos, cria planos personalizados para você focar no que realmente importa e alcançar suas metas sem estresse.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cadastro">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                    <Zap className="mr-2 h-5 w-5" />
                    Criar meu Plano de Estudos Grátis
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Ver Como Funciona
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-card-foreground">Meu Plano de Estudos</h3>
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Matemática - Funções</span>
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">2h</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Química - Estequiometria</span>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">1.5h</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                        <span className="text-sm text-muted-foreground">História - Revolução Industrial</span>
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">1h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Muita matéria, pouco tempo e nenhuma organização?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sabemos como é frustrante se sentir perdido nos estudos. Estes são os principais problemas que todo estudante enfrenta:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Dificuldade para saber por onde começar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tantas matérias e tópicos que você não sabe qual priorizar primeiro.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Sobrecarga de trabalhos e provas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tudo com o mesmo prazo e você não consegue se organizar para dar conta.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Conceitos e jargões difíceis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Termos complicados que ninguém explica de forma simples e clara.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Procrastinação e acúmulo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deixa tudo para depois e quando vê, está tudo acumulado e sem tempo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Deixe o Rogério organizar tudo para você
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa IA inteligente transforma o caos dos seus estudos em um plano organizado e eficiente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-primary/20">
              <CardHeader>
                <BookMarked className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Plano de Estudos Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diga suas matérias e provas, e o Rogério monta um cronograma priorizado para você.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-secondary/20">
              <CardHeader>
                <Brain className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-lg">Glossário Interativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não entendeu um termo? Pergunte ao Rogério e ele explica na hora, com fontes confiáveis.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-accent/20">
              <CardHeader>
                <Bell className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Lembretes Automáticos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nunca mais perca um prazo. Receba notificações sobre suas provas e tarefas importantes.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-chart-4/20">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-chart-4 mx-auto mb-4" />
                <CardTitle className="text-lg">Acompanhe seu Progresso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Veja seu avanço com gráficos e conquistas. A gamificação te mantém motivado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="para-quem" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Feito para todos os tipos de estudantes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Não importa em que fase da vida acadêmica você está, o Rogério se adapta às suas necessidades.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Estudantes do Ensino Médio e Vestibulandos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Organize seus estudos para o ENEM, vestibulares e provas escolares. Foque no que mais cai e otimize seu tempo.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Universitários</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gerencie múltiplas disciplinas, trabalhos e projetos. Mantenha-se em dia com todas as matérias sem stress.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-16 w-16 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl">Concurseiros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prepare-se para concursos públicos com um plano estruturado. Cubra todo o edital de forma organizada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Pronto para transformar seus estudos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Junte-se a milhares de estudantes que já descobriram como estudar de forma inteligente e organizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cadastro">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                  <Brain className="mr-2 h-5 w-5" />
                  Quero conhecer o Rogério!
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Users className="mr-2 h-5 w-5" />
                Ver Depoimentos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">EstudAI Rogério</span>
              </div>
              <p className="text-muted-foreground">
                Sua IA de estudos inteligente para uma vida acadêmica organizada e eficiente.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Produto</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Preços</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Suporte</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EstudAI Rogério. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

