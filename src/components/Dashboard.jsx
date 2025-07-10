import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Brain, 
  Home, 
  BookOpen, 
  TrendingUp, 
  Search, 
  Settings, 
  Calendar,
  Clock,
  CheckCircle,
  Plus,
  Edit,
  Trash2,
  Award,
  Target,
  Zap,
  LogOut,
  User,
  Bell
} from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('painel')
  const [searchTerm, setSearchTerm] = useState('')
  const [disciplinas, setDisciplinas] = useState([
    { id: 1, nome: 'Matemática', cor: 'bg-blue-500', progresso: 75, proximaProva: '2024-07-15' },
    { id: 2, nome: 'Química', cor: 'bg-green-500', progresso: 60, proximaProva: '2024-07-20' },
    { id: 3, nome: 'História', cor: 'bg-purple-500', progresso: 45, proximaProva: '2024-07-25' }
  ])

  const proximasTarefas = [
    { id: 1, titulo: 'Estudar Funções Quadráticas', disciplina: 'Matemática', prazo: '2024-07-12', prioridade: 'alta' },
    { id: 2, titulo: 'Revisar Estequiometria', disciplina: 'Química', prazo: '2024-07-13', prioridade: 'média' },
    { id: 3, titulo: 'Ler sobre Revolução Industrial', disciplina: 'História', prazo: '2024-07-14', prioridade: 'baixa' },
    { id: 4, titulo: 'Resolver exercícios de Derivadas', disciplina: 'Matemática', prazo: '2024-07-15', prioridade: 'alta' },
    { id: 5, titulo: 'Estudar Tabela Periódica', disciplina: 'Química', prazo: '2024-07-16', prioridade: 'média' }
  ]

  const conquistas = [
    { id: 1, nome: 'Primeira Semana Completa!', descricao: 'Estudou todos os dias da semana', icone: '🎯', desbloqueada: true },
    { id: 2, nome: 'Focado!', descricao: 'Completou 10 sessões de estudo', icone: '🔥', desbloqueada: true },
    { id: 3, nome: 'Polímata', descricao: 'Estudou 3 matérias diferentes', icone: '🧠', desbloqueada: true },
    { id: 4, nome: 'Maratonista', descricao: 'Estudou por 5 horas em um dia', icone: '🏃‍♂️', desbloqueada: false },
    { id: 5, nome: 'Consistente', descricao: 'Estudou por 30 dias consecutivos', icone: '📅', desbloqueada: false }
  ]

  const glossarioTermos = [
    { termo: 'Estequiometria', definicao: 'Parte da química que estuda as relações quantitativas entre reagentes e produtos em uma reação química.' },
    { termo: 'Função Quadrática', definicao: 'Função polinomial de segundo grau, representada por f(x) = ax² + bx + c, onde a ≠ 0.' },
    { termo: 'Revolução Industrial', definicao: 'Processo de transformação econômica e social iniciado na Inglaterra no século XVIII, caracterizado pela mecanização da produção.' }
  ]

  const sidebarItems = [
    { id: 'painel', label: 'Meu Painel', icon: Home },
    { id: 'disciplinas', label: 'Minhas Disciplinas', icon: BookOpen },
    { id: 'progresso', label: 'Meu Progresso', icon: TrendingUp },
    { id: 'glossario', label: 'Glossário', icon: Search },
    { id: 'configuracoes', label: 'Configurações do Perfil', icon: Settings }
  ]

  const getPrioridadeColor = (prioridade) => {
    switch (prioridade) {
      case 'alta': return 'bg-red-500'
      case 'média': return 'bg-yellow-500'
      case 'baixa': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const renderPainel = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Bom dia, João! 👋</h1>
        <p className="text-muted-foreground">O que vamos estudar hoje?</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Próximas Tarefas */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Próximas Tarefas
            </CardTitle>
            <CardDescription>Suas 5 tarefas mais urgentes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {proximasTarefas.slice(0, 5).map((tarefa) => (
                <div key={tarefa.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getPrioridadeColor(tarefa.prioridade)}`}></div>
                    <div>
                      <p className="font-medium text-sm">{tarefa.titulo}</p>
                      <p className="text-xs text-muted-foreground">{tarefa.disciplina}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{tarefa.prazo}</p>
                    <Badge variant="outline" className="text-xs">
                      {tarefa.prioridade}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Calendário de Provas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Calendário de Provas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {disciplinas.map((disciplina) => (
                <div key={disciplina.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${disciplina.cor}`}></div>
                    <span className="text-sm font-medium">{disciplina.nome}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{disciplina.proximaProva}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Input Rápido */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Pergunte ao Rogério
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input 
              placeholder="Ex: 'O que é estequiometria?' ou 'Crie um plano para minha prova de biologia'"
              className="flex-1"
            />
            <Button>
              <Zap className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderDisciplinas = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Minhas Disciplinas</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Disciplina
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {disciplinas.map((disciplina) => (
          <Card key={disciplina.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${disciplina.cor}`}></div>
                  {disciplina.nome}
                </CardTitle>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progresso</span>
                    <span>{disciplina.progresso}%</span>
                  </div>
                  <Progress value={disciplina.progresso} className="h-2" />
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Próxima prova:</p>
                  <p className="font-medium">{disciplina.proximaProva}</p>
                </div>
                <Button variant="outline" className="w-full">
                  Ver Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderProgresso = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Meu Progresso</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Horas Estudadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">42h</div>
            <p className="text-sm text-muted-foreground">Esta semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Tarefas Concluídas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">18/25</div>
            <p className="text-sm text-muted-foreground">Esta semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Dias Consecutivos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">7</div>
            <p className="text-sm text-muted-foreground">Sequência atual</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Conquistas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conquistas.map((conquista) => (
              <div 
                key={conquista.id} 
                className={`p-4 border rounded-lg ${conquista.desbloqueada ? 'bg-secondary/10 border-secondary/20' : 'bg-muted/30 border-muted opacity-50'}`}
              >
                <div className="text-2xl mb-2">{conquista.icone}</div>
                <h3 className="font-semibold text-sm">{conquista.nome}</h3>
                <p className="text-xs text-muted-foreground">{conquista.descricao}</p>
                {conquista.desbloqueada && (
                  <Badge variant="secondary" className="mt-2 text-xs">
                    Desbloqueada!
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderGlossario = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Glossário</h1>

      <Card>
        <CardHeader>
          <CardTitle>Buscar Conceito</CardTitle>
          <CardDescription>Digite um termo para encontrar sua definição</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input 
              placeholder="Ex: estequiometria, função quadrática..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button>
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {glossarioTermos
          .filter(item => 
            searchTerm === '' || 
            item.termo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.definicao.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{item.termo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.definicao}</p>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </div>
  )

  const renderConfiguracoes = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Configurações do Perfil</h1>

      <Card>
        <CardHeader>
          <CardTitle>Informações Pessoais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" defaultValue="João Silva" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="joao@email.com" />
            </div>
          </div>
          <Button>Salvar Alterações</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notificações</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Lembretes de Estudo</p>
              <p className="text-sm text-muted-foreground">Receber notificações sobre tarefas pendentes</p>
            </div>
            <Button variant="outline" size="sm">Ativado</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Relatórios Semanais</p>
              <p className="text-sm text-muted-foreground">Resumo do seu progresso semanal</p>
            </div>
            <Button variant="outline" size="sm">Ativado</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'painel': return renderPainel()
      case 'disciplinas': return renderDisciplinas()
      case 'progresso': return renderProgresso()
      case 'glossario': return renderGlossario()
      case 'configuracoes': return renderConfiguracoes()
      default: return renderPainel()
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">EstudAI Rogério</span>
          </Link>
        </div>
        
        <nav className="px-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Link to="/">
            <Button variant="outline" className="w-full">
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  )
}

