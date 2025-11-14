"use client";

import { useState } from "react";
import { Play, BookOpen, Code, Gamepad2, Trophy, Star, ChevronRight, Lock, CheckCircle2, PlayCircle, FileText, Video, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PricingSection } from "@/components/custom/pricing-section";
import { ShareButton } from "@/components/custom/share-button";

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

export default function RobloxCourse() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

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

  const stats = [
    { icon: Video, label: "Vídeo Aulas", value: "120+" },
    { icon: FileText, label: "Tutoriais", value: "80+" },
    { icon: Code, label: "Projetos", value: "25+" },
    { icon: Users, label: "Alunos", value: "15k+" },
  ];

  const features = [
    {
      icon: PlayCircle,
      title: "Vídeos em HD",
      description: "Aulas gravadas em alta qualidade com explicações detalhadas"
    },
    {
      icon: Code,
      title: "Código Prático",
      description: "Exemplos de código prontos para usar em seus projetos"
    },
    {
      icon: Trophy,
      title: "Certificado",
      description: "Receba certificado ao concluir o curso completo"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Acesso à comunidade exclusiva de desenvolvedores"
    },
  ];

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="w-4 h-4" />;
      case "text": return <FileText className="w-4 h-4" />;
      case "code": return <Code className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center space-y-6">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
              Curso Mais Completo de Roblox
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Aprenda a Criar Jogos no
              <span className="block text-yellow-300 mt-2">Roblox Studio</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Do zero ao avançado: tutoriais em vídeo, projetos práticos e suporte completo para você se tornar um desenvolvedor Roblox profissional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                <Play className="w-5 h-5 mr-2" />
                Começar Agora Grátis
              </Button>
              <ShareButton 
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto p-1">
            <TabsTrigger value="overview" className="text-sm sm:text-base py-3">
              <BookOpen className="w-4 h-4 mr-2" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="modules" className="text-sm sm:text-base py-3">
              <Gamepad2 className="w-4 h-4 mr-2" />
              Módulos
            </TabsTrigger>
            <TabsTrigger value="pricing" className="text-sm sm:text-base py-3">
              <Trophy className="w-4 h-4 mr-2" />
              Planos
            </TabsTrigger>
            <TabsTrigger value="resources" className="text-sm sm:text-base py-3">
              <Code className="w-4 h-4 mr-2" />
              Recursos
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12">
            {/* Features */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                O Que Você Vai Aprender
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Course Path */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-8">Jornada de Aprendizado</h2>
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <Card key={module.id} className="overflow-hidden border-2 hover:border-blue-500 transition-all">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <CardTitle className="text-xl">{module.title}</CardTitle>
                              <CardDescription className="mt-1">{module.description}</CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex-1">
                              <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Progresso</span>
                                <span className="font-semibold">{module.progress}%</span>
                              </div>
                              <Progress value={module.progress} className="h-2" />
                            </div>
                            <Badge variant={module.progress > 0 ? "default" : "secondary"}>
                              {module.lessons.length} aulas
                            </Badge>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
                        >
                          <ChevronRight className={`w-5 h-5 transition-transform ${selectedModule === module.id ? 'rotate-90' : ''}`} />
                        </Button>
                      </div>
                    </CardHeader>
                    {selectedModule === module.id && (
                      <CardContent className="pt-6">
                        <div className="space-y-2">
                          {module.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                                lesson.locked
                                  ? 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
                                  : lesson.completed
                                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500'
                              }`}
                            >
                              <div className="flex items-center gap-3 flex-1">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  lesson.locked
                                    ? 'bg-gray-200 dark:bg-gray-700'
                                    : lesson.completed
                                    ? 'bg-green-500'
                                    : 'bg-blue-500'
                                }`}>
                                  {lesson.locked ? (
                                    <Lock className="w-4 h-4 text-gray-500" />
                                  ) : lesson.completed ? (
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  ) : (
                                    getLessonIcon(lesson.type)
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">{lesson.title}</div>
                                  <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                    <Clock className="w-3 h-3" />
                                    {lesson.duration}
                                  </div>
                                </div>
                              </div>
                              {!lesson.locked && (
                                <Button size="sm" variant={lesson.completed ? "outline" : "default"}>
                                  {lesson.completed ? 'Revisar' : 'Iniciar'}
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Modules Tab */}
          <TabsContent value="modules" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Conteúdo do Curso</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                6 módulos completos com mais de 25 aulas em vídeo, tutoriais escritos e projetos práticos
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, index) => (
                <AccordionItem key={module.id} value={`module-${module.id}`} className="border-2 rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg">{module.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">{module.description}</div>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="secondary">{module.lessons.length} aulas</Badge>
                          <span className="text-sm text-muted-foreground">{module.progress}% completo</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pt-4">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {getLessonIcon(lesson.type)}
                            <span className="font-medium">{lesson.title}</span>
                            {lesson.completed && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                            {lesson.locked && <Lock className="w-4 h-4 text-gray-400" />}
                          </div>
                          <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing">
            <PricingSection />
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Recursos Adicionais</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Materiais complementares para acelerar seu aprendizado
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-blue-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Biblioteca de Scripts</CardTitle>
                  <CardDescription>
                    Mais de 100 scripts prontos para usar em seus projetos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Scripts de movimento e física
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Sistemas de inventário
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Mecânicas de combate
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      UI e interfaces
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Acessar Biblioteca</Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Documentação Completa</CardTitle>
                  <CardDescription>
                    Guias detalhados e referências rápidas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Referência da API Roblox
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Guia de boas práticas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Troubleshooting comum
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Glossário de termos
                    </li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">Ver Documentação</Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                    <Gamepad2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Projetos Completos</CardTitle>
                  <CardDescription>
                    Jogos completos para estudar e modificar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Jogo de plataforma 3D
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      RPG multiplayer
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Simulador de fazenda
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Jogo de corrida
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Ver Projetos</Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-orange-500 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Comunidade Exclusiva</CardTitle>
                  <CardDescription>
                    Conecte-se com outros desenvolvedores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Fórum de discussão
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Grupo no Discord
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Lives semanais
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Suporte prioritário
                    </li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">Entrar na Comunidade</Button>
                </CardContent>
              </Card>
            </div>

            {/* Bonus Section */}
            <Card className="border-2 border-yellow-500 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-8 h-8 text-yellow-600" />
                  <CardTitle className="text-2xl">Bônus Exclusivos</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Conteúdo extra para turbinar seu aprendizado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Trophy className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Certificado Digital</div>
                      <div className="text-sm text-muted-foreground">
                        Certificado reconhecido ao completar o curso
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Star className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Assets Premium</div>
                      <div className="text-sm text-muted-foreground">
                        Modelos 3D, texturas e sons exclusivos
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Code className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Templates Prontos</div>
                      <div className="text-sm text-muted-foreground">
                        10+ templates de jogos para começar rápido
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <PlayCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Masterclasses</div>
                      <div className="text-sm text-muted-foreground">
                        Aulas especiais com desenvolvedores profissionais
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Card className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden">
            <CardHeader className="space-y-4 pb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl sm:text-4xl">
                Pronto para Criar Seus Jogos?
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Comece agora mesmo e junte-se a milhares de desenvolvedores que já estão criando jogos incríveis no Roblox
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 h-auto">
                  <Play className="w-5 h-5 mr-2" />
                  Começar Curso Grátis
                </Button>
                <ShareButton 
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                ✨ Acesso imediato • 📱 Aprenda no seu ritmo • 🎓 Certificado incluído
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Curso</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sobre o Curso</li>
                <li>Módulos</li>
                <li>Certificado</li>
                <li>Preços</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Biblioteca de Scripts</li>
                <li>Documentação</li>
                <li>Projetos</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Comunidade</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Discord</li>
                <li>Fórum</li>
                <li>YouTube</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Central de Ajuda</li>
                <li>FAQ</li>
                <li>Contato</li>
                <li>Termos de Uso</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Curso Roblox Studio. Todos os direitos reservados.</p>
            <p className="mt-2">Criado com 💜 para desenvolvedores iniciantes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
