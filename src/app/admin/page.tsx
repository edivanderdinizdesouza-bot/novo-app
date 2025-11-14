"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Settings, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Share2, 
  Link as LinkIcon,
  Copy,
  Check,
  Eye,
  Download,
  BarChart3,
  UserPlus,
  CreditCard,
  Globe,
  Mail,
  Bell,
  Shield,
  Database,
  FileText,
  Video,
  Code,
  Folder,
  BookOpen,
  PlayCircle,
  CheckCircle2,
  Clock,
  Edit,
  Trash2,
  Plus,
  Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ShareButton } from "@/components/custom/share-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: "video" | "text" | "code";
  completed: boolean;
  locked: boolean;
}

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  progress: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [appUrl] = useState(typeof window !== 'undefined' ? window.location.origin : '');

  // Dados do criador (você pode editar aqui)
  const [creatorData, setCreatorData] = useState({
    name: "Seu Nome",
    email: "seu@email.com",
    phone: "+55 (11) 99999-9999",
    bio: "Criador do curso de Roblox Studio",
    website: "https://seusite.com",
    socialMedia: {
      instagram: "@seuinstagram",
      youtube: "@seuyoutube",
      discord: "discord.gg/seuservidor"
    }
  });

  // Estatísticas do app
  const [stats] = useState({
    totalUsers: 15234,
    activeUsers: 8456,
    revenue: 45678.90,
    conversionRate: 12.5,
    newUsersToday: 234,
    revenueToday: 1234.56
  });

  // Todos os módulos e conteúdos do curso
  const modules: Module[] = [
    {
      id: 1,
      title: "Introdução ao Roblox Studio",
      description: "Aprenda os fundamentos do Roblox Studio e crie seu primeiro jogo",
      progress: 75,
      lessons: [
        { id: 1, title: "O que é Roblox Studio?", duration: "8 min", type: "video", completed: true, locked: false },
        { id: 2, title: "Interface e Ferramentas Básicas", duration: "15 min", type: "video", completed: true, locked: false },
        { id: 3, title: "Criando seu Primeiro Mundo", duration: "20 min", type: "video", completed: true, locked: false },
        { id: 4, title: "Exercício Prático: Construa uma Casa", duration: "30 min", type: "code", completed: false, locked: false },
      ]
    },
    {
      id: 2,
      title: "Programação Lua Básica",
      description: "Domine a linguagem Lua para criar scripts no Roblox",
      progress: 40,
      lessons: [
        { id: 5, title: "Introdução à Linguagem Lua", duration: "12 min", type: "video", completed: true, locked: false },
        { id: 6, title: "Variáveis e Tipos de Dados", duration: "18 min", type: "video", completed: true, locked: false },
        { id: 7, title: "Funções e Condicionais", duration: "22 min", type: "video", completed: false, locked: false },
        { id: 8, title: "Loops e Tabelas", duration: "25 min", type: "video", completed: false, locked: false },
        { id: 9, title: "Exercício: Calculadora Simples", duration: "35 min", type: "code", completed: false, locked: false },
      ]
    },
    {
      id: 3,
      title: "Scripts e Interatividade",
      description: "Adicione comportamentos e interações aos seus jogos",
      progress: 0,
      lessons: [
        { id: 10, title: "Entendendo Scripts no Roblox", duration: "10 min", type: "video", completed: false, locked: false },
        { id: 11, title: "Eventos e Listeners", duration: "20 min", type: "video", completed: false, locked: false },
        { id: 12, title: "Criando Portas Automáticas", duration: "25 min", type: "code", completed: false, locked: false },
        { id: 13, title: "Sistema de Pontuação", duration: "30 min", type: "code", completed: false, locked: false },
      ]
    },
    {
      id: 4,
      title: "Mecânicas de Jogo Avançadas",
      description: "Implemente sistemas complexos como inventário e combate",
      progress: 0,
      lessons: [
        { id: 14, title: "Sistema de Inventário", duration: "35 min", type: "video", completed: false, locked: true },
        { id: 15, title: "Sistema de Combate", duration: "40 min", type: "video", completed: false, locked: true },
        { id: 16, title: "Power-ups e Coletáveis", duration: "30 min", type: "code", completed: false, locked: true },
        { id: 17, title: "Sistema de Níveis", duration: "45 min", type: "code", completed: false, locked: true },
      ]
    },
    {
      id: 5,
      title: "Multiplayer e Networking",
      description: "Crie experiências multiplayer sincronizadas",
      progress: 0,
      lessons: [
        { id: 18, title: "Conceitos de Multiplayer", duration: "15 min", type: "video", completed: false, locked: true },
        { id: 19, title: "RemoteEvents e RemoteFunctions", duration: "25 min", type: "video", completed: false, locked: true },
        { id: 20, title: "Sincronização de Dados", duration: "30 min", type: "code", completed: false, locked: true },
        { id: 21, title: "Chat e Comunicação", duration: "20 min", type: "code", completed: false, locked: true },
      ]
    },
    {
      id: 6,
      title: "Monetização e Publicação",
      description: "Aprenda a publicar e monetizar seus jogos",
      progress: 0,
      lessons: [
        { id: 22, title: "Game Passes e Developer Products", duration: "20 min", type: "video", completed: false, locked: true },
        { id: 23, title: "Sistema de Robux", duration: "15 min", type: "text", completed: false, locked: true },
        { id: 24, title: "Publicando seu Jogo", duration: "25 min", type: "video", completed: false, locked: true },
        { id: 25, title: "Marketing e Crescimento", duration: "30 min", type: "text", completed: false, locked: true },
      ]
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveCreatorData = () => {
    localStorage.setItem("creatorData", JSON.stringify(creatorData));
    alert("Dados salvos com sucesso!");
  };

  useEffect(() => {
    const saved = localStorage.getItem("creatorData");
    if (saved) {
      setCreatorData(JSON.parse(saved));
    }
  }, []);

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="w-4 h-4" />;
      case "text": return <FileText className="w-4 h-4" />;
      case "code": return <Code className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const totalVideos = modules.reduce((acc, module) => 
    acc + module.lessons.filter(l => l.type === "video").length, 0
  );
  const totalExercises = modules.reduce((acc, module) => 
    acc + module.lessons.filter(l => l.type === "code").length, 0
  );
  const totalArticles = modules.reduce((acc, module) => 
    acc + module.lessons.filter(l => l.type === "text").length, 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Painel do Criador</h1>
              </div>
              <p className="text-blue-100">Gerencie seu curso e acompanhe resultados</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => router.push("/dashboard")}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Eye className="w-4 h-4 mr-2" />
                Ver como Aluno
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/")}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Globe className="w-4 h-4 mr-2" />
                Página Inicial
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-blue-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total de Usuários
                </CardTitle>
                <Users className="w-4 h-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +{stats.newUsersToday} hoje
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Usuários Ativos
                </CardTitle>
                <UserPlus className="w-4 h-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.activeUsers.toLocaleString()}</div>
              <Progress value={(stats.activeUsers / stats.totalUsers) * 100} className="mt-3 h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {((stats.activeUsers / stats.totalUsers) * 100).toFixed(1)}% do total
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Receita Total
                </CardTitle>
                <DollarSign className="w-4 h-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">R$ {stats.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  +R$ {stats.revenueToday.toFixed(2)} hoje
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Taxa de Conversão
                </CardTitle>
                <BarChart3 className="w-4 h-4 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.conversionRate}%</div>
              <Progress value={stats.conversionRate} className="mt-3 h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Visitantes que se tornam alunos
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access to Pricing */}
        <Card className="border-2 border-yellow-500 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                  Acesso Rápido aos Planos
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Visualize e gerencie os planos de assinatura do seu curso
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => {
                  router.push("/?tab=pricing");
                  setTimeout(() => {
                    const pricingTab = document.querySelector('[value="pricing"]') as HTMLElement;
                    if (pricingTab) pricingTab.click();
                  }, 100);
                }}
                className="flex-1"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Ver Planos e Preços
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => router.push("/")}
                className="flex-1"
              >
                <Globe className="w-5 h-5 mr-2" />
                Ir para Página Principal
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              💡 Dica: Você pode acessar os planos diretamente pela página inicial na aba "Planos"
            </p>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-5 h-auto p-1">
            <TabsTrigger value="projects" className="text-sm sm:text-base py-3">
              <Folder className="w-4 h-4 mr-2" />
              Projetos
            </TabsTrigger>
            <TabsTrigger value="share" className="text-sm sm:text-base py-3">
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-sm sm:text-base py-3">
              <Settings className="w-4 h-4 mr-2" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="content" className="text-sm sm:text-base py-3">
              <Database className="w-4 h-4 mr-2" />
              Conteúdo
            </TabsTrigger>
            <TabsTrigger value="payments" className="text-sm sm:text-base py-3">
              <CreditCard className="w-4 h-4 mr-2" />
              Pagamentos
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            {/* Overview Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total de Módulos
                    </CardTitle>
                    <Folder className="w-4 h-4 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{modules.length}</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {totalLessons} aulas no total
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Vídeo Aulas
                    </CardTitle>
                    <Video className="w-4 h-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{totalVideos}</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Conteúdo em vídeo
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Exercícios
                    </CardTitle>
                    <Code className="w-4 h-4 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{totalExercises}</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Práticas de código
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Artigos
                    </CardTitle>
                    <FileText className="w-4 h-4 text-orange-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{totalArticles}</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Tutoriais escritos
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Add New Content Button */}
            <Card className="border-2 border-dashed border-blue-500 bg-blue-50/50 dark:bg-blue-900/10">
              <CardContent className="py-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Adicionar Novo Conteúdo</h3>
                    <p className="text-muted-foreground">
                      Expanda seu curso com novos módulos, aulas e exercícios
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button>
                      <Folder className="w-4 h-4 mr-2" />
                      Novo Módulo
                    </Button>
                    <Button variant="outline">
                      <Video className="w-4 h-4 mr-2" />
                      Nova Aula
                    </Button>
                    <Button variant="outline">
                      <Code className="w-4 h-4 mr-2" />
                      Novo Exercício
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* All Modules and Content */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Todos os Módulos e Conteúdos</h2>
                <Badge variant="secondary" className="text-sm">
                  {modules.length} módulos • {totalLessons} aulas
                </Badge>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {modules.map((module, index) => (
                  <AccordionItem 
                    key={module.id} 
                    value={`module-${module.id}`} 
                    className="border-2 rounded-lg px-6 bg-white dark:bg-gray-800"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4 text-left w-full">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg">{module.title}</div>
                          <div className="text-sm text-muted-foreground mt-1">{module.description}</div>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="secondary">{module.lessons.length} aulas</Badge>
                            <span className="text-sm text-muted-foreground">
                              {module.lessons.filter(l => l.type === "video").length} vídeos • 
                              {module.lessons.filter(l => l.type === "code").length} exercícios • 
                              {module.lessons.filter(l => l.type === "text").length} artigos
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-4">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                lesson.type === "video" ? "bg-purple-100 text-purple-600" :
                                lesson.type === "code" ? "bg-green-100 text-green-600" :
                                "bg-orange-100 text-orange-600"
                              }`}>
                                {getLessonIcon(lesson.type)}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">{lesson.title}</div>
                                <div className="flex items-center gap-3 mt-1">
                                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {lesson.duration}
                                  </span>
                                  <Badge variant="outline" className="text-xs">
                                    {lesson.type === "video" ? "Vídeo" : 
                                     lesson.type === "code" ? "Exercício" : "Artigo"}
                                  </Badge>
                                  {lesson.locked && (
                                    <Badge variant="secondary" className="text-xs">
                                      Bloqueado
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                        
                        <Button variant="outline" className="w-full mt-4">
                          <Plus className="w-4 h-4 mr-2" />
                          Adicionar Aula a Este Módulo
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Share Tab */}
          <TabsContent value="share" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Compartilhe Seu Curso</CardTitle>
                <CardDescription>
                  Use estes links para divulgar seu curso e atrair novos alunos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Link Principal */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Link do Curso</Label>
                  <div className="flex gap-2">
                    <Input 
                      value={appUrl} 
                      readOnly 
                      className="font-mono text-sm"
                    />
                    <Button
                      onClick={() => copyToClipboard(appUrl)}
                      variant="outline"
                      className="shrink-0"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                {/* Links Específicos */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Link de Inscrição</Label>
                    <div className="flex gap-2">
                      <Input 
                        value={`${appUrl}/onboarding`} 
                        readOnly 
                        className="font-mono text-xs"
                      />
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(`${appUrl}/onboarding`)}
                        variant="outline"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Link dos Planos</Label>
                    <div className="flex gap-2">
                      <Input 
                        value={`${appUrl}/?tab=pricing`} 
                        readOnly 
                        className="font-mono text-xs"
                      />
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(`${appUrl}/?tab=pricing`)}
                        variant="outline"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Botão de Compartilhamento */}
                <div className="pt-4 border-t">
                  <Label className="text-base font-semibold mb-3 block">
                    Compartilhar nas Redes Sociais
                  </Label>
                  <ShareButton size="lg" className="w-full sm:w-auto" />
                </div>

                {/* QR Code (placeholder) */}
                <div className="pt-4 border-t">
                  <Label className="text-base font-semibold mb-3 block">
                    QR Code do Curso
                  </Label>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center border-2 border-dashed">
                      <div className="text-center text-sm text-muted-foreground">
                        <LinkIcon className="w-12 h-12 mx-auto mb-2" />
                        QR Code será<br />gerado aqui
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Use este QR Code em materiais impressos, apresentações ou eventos para facilitar o acesso ao seu curso.
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Baixar QR Code
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Informações do Criador</CardTitle>
                <CardDescription>
                  Configure seus dados como criador do curso
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={creatorData.name}
                      onChange={(e) => setCreatorData({ ...creatorData, name: e.target.value })}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={creatorData.email}
                      onChange={(e) => setCreatorData({ ...creatorData, email: e.target.value })}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={creatorData.phone}
                      onChange={(e) => setCreatorData({ ...creatorData, phone: e.target.value })}
                      placeholder="+55 (11) 99999-9999"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={creatorData.website}
                      onChange={(e) => setCreatorData({ ...creatorData, website: e.target.value })}
                      placeholder="https://seusite.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Biografia</Label>
                  <textarea
                    id="bio"
                    value={creatorData.bio}
                    onChange={(e) => setCreatorData({ ...creatorData, bio: e.target.value })}
                    placeholder="Conte um pouco sobre você..."
                    className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                  />
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <Label className="text-base font-semibold">Redes Sociais</Label>
                  
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="instagram" className="text-sm">Instagram</Label>
                      <Input
                        id="instagram"
                        value={creatorData.socialMedia.instagram}
                        onChange={(e) => setCreatorData({
                          ...creatorData,
                          socialMedia: { ...creatorData.socialMedia, instagram: e.target.value }
                        })}
                        placeholder="@seuinstagram"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="youtube" className="text-sm">YouTube</Label>
                      <Input
                        id="youtube"
                        value={creatorData.socialMedia.youtube}
                        onChange={(e) => setCreatorData({
                          ...creatorData,
                          socialMedia: { ...creatorData.socialMedia, youtube: e.target.value }
                        })}
                        placeholder="@seuyoutube"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="discord" className="text-sm">Discord</Label>
                      <Input
                        id="discord"
                        value={creatorData.socialMedia.discord}
                        onChange={(e) => setCreatorData({
                          ...creatorData,
                          socialMedia: { ...creatorData.socialMedia, discord: e.target.value }
                        })}
                        placeholder="discord.gg/seuservidor"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button onClick={handleSaveCreatorData} className="flex-1 sm:flex-none">
                    <Check className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </Button>
                  <Button variant="outline" onClick={() => router.push("/profile")}>
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Perfil Público
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-blue-500 transition-all">
                <CardHeader>
                  <Video className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Vídeo Aulas</CardTitle>
                  <CardDescription>{totalVideos} aulas gravadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Gerenciar Vídeos
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 transition-all">
                <CardHeader>
                  <FileText className="w-8 h-8 text-purple-600 mb-2" />
                  <CardTitle>Tutoriais</CardTitle>
                  <CardDescription>{totalArticles} artigos escritos</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Gerenciar Tutoriais
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-500 transition-all">
                <CardHeader>
                  <Code className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>Projetos</CardTitle>
                  <CardDescription>{totalExercises} projetos práticos</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Gerenciar Projetos
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Adicionar Novo Conteúdo</CardTitle>
                <CardDescription>
                  Expanda seu curso com novos materiais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  <Button className="w-full">
                    <Video className="w-4 h-4 mr-2" />
                    Nova Aula
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Novo Tutorial
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Code className="w-4 h-4 mr-2" />
                    Novo Projeto
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Configurar Pagamentos</CardTitle>
                <CardDescription>
                  Configure suas formas de recebimento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="border-2 hover:border-blue-500 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">Stripe</CardTitle>
                          <CardDescription className="text-sm">
                            Cartão de crédito internacional
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">Recomendado</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Conectar Stripe
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-green-500 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">Mercado Pago</CardTitle>
                          <CardDescription className="text-sm">
                            PIX, boleto e cartão
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">Popular</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Conectar Mercado Pago
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-4">Histórico de Pagamentos</h3>
                  <div className="space-y-3">
                    {[
                      { date: "Hoje", amount: 1234.56, users: 12 },
                      { date: "Ontem", amount: 2345.67, users: 23 },
                      { date: "Esta semana", amount: 8901.23, users: 89 },
                      { date: "Este mês", amount: 45678.90, users: 456 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                          <div className="font-medium">{item.date}</div>
                          <div className="text-sm text-muted-foreground">{item.users} novos alunos</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">
                            R$ {item.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <Button variant="outline" className="h-auto py-4" onClick={() => router.push("/")}>
            <Globe className="w-5 h-5 mr-2" />
            Ver Página Pública
          </Button>
          <Button variant="outline" className="h-auto py-4" onClick={() => router.push("/dashboard")}>
            <Eye className="w-5 h-5 mr-2" />
            Visualizar como Aluno
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <Mail className="w-5 h-5 mr-2" />
            Enviar Email aos Alunos
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <Bell className="w-5 h-5 mr-2" />
            Criar Notificação
          </Button>
        </div>
      </div>
    </div>
  );
}
