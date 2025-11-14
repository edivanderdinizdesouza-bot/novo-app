"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Play, CheckCircle2, Lock, Video, FileText, Code, Download, Trophy, Users, Clock, ChevronRight, BookOpen, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShareButton } from "@/components/custom/share-button";

interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: "video" | "text" | "code";
  completed: boolean;
  videoUrl?: string;
  content?: string;
}

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  progress: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [userName, setUserName] = useState<string>("Aluno");

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (!savedProfile) {
      router.push("/onboarding");
    } else {
      const profile = JSON.parse(savedProfile);
      setUserName(profile.name.split(" ")[0]);
    }
  }, [router]);
  const [modules, setModules] = useState<Module[]>([
    {
      id: 1,
      title: "Introdução ao Roblox Studio",
      description: "Aprenda os fundamentos do Roblox Studio e crie seu primeiro jogo",
      progress: 75,
      lessons: [
        { 
          id: 1, 
          title: "O que é Roblox Studio?", 
          duration: "8 min", 
          type: "video", 
          completed: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          content: "Nesta aula você aprenderá os conceitos básicos do Roblox Studio..."
        },
        { 
          id: 2, 
          title: "Interface e Ferramentas Básicas", 
          duration: "15 min", 
          type: "video", 
          completed: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          content: "Explore a interface completa do Roblox Studio..."
        },
        { 
          id: 3, 
          title: "Criando seu Primeiro Mundo", 
          duration: "20 min", 
          type: "video", 
          completed: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          content: "Vamos criar seu primeiro mundo 3D no Roblox..."
        },
        { 
          id: 4, 
          title: "Exercício Prático: Construa uma Casa", 
          duration: "30 min", 
          type: "code", 
          completed: false,
          content: `# Exercício: Construa uma Casa no Roblox Studio

## Objetivo
Criar uma casa simples usando as ferramentas básicas do Roblox Studio.

## Passos:
1. Abra o Roblox Studio
2. Crie um novo projeto vazio
3. Use a ferramenta Part para criar as paredes
4. Adicione um telhado usando wedges
5. Crie portas e janelas

## Código de exemplo:
\`\`\`lua
-- Script para porta automática
local door = script.Parent
local isOpen = false

door.Touched:Connect(function(hit)
    if hit.Parent:FindFirstChild("Humanoid") and not isOpen then
        isOpen = true
        door.CanCollide = false
        door.Transparency = 0.5
        wait(3)
        door.CanCollide = true
        door.Transparency = 0
        isOpen = false
    end
end)
\`\`\`

## Dicas:
- Use Ctrl+D para duplicar partes
- Pressione F para focar em objetos
- Use a grade (Grid) para alinhar objetos`
        },
      ]
    },
    {
      id: 2,
      title: "Programação Lua Básica",
      description: "Domine a linguagem Lua para criar scripts no Roblox",
      progress: 40,
      lessons: [
        { 
          id: 5, 
          title: "Introdução à Linguagem Lua", 
          duration: "12 min", 
          type: "video", 
          completed: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        { 
          id: 6, 
          title: "Variáveis e Tipos de Dados", 
          duration: "18 min", 
          type: "video", 
          completed: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        { 
          id: 7, 
          title: "Funções e Condicionais", 
          duration: "22 min", 
          type: "video", 
          completed: false,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        { 
          id: 8, 
          title: "Loops e Tabelas", 
          duration: "25 min", 
          type: "video", 
          completed: false,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        { 
          id: 9, 
          title: "Exercício: Calculadora Simples", 
          duration: "35 min", 
          type: "code", 
          completed: false,
          content: `# Exercício: Calculadora em Lua

## Objetivo
Criar uma calculadora simples usando Lua.

## Código base:
\`\`\`lua
-- Calculadora Simples
local function somar(a, b)
    return a + b
end

local function subtrair(a, b)
    return a - b
end

local function multiplicar(a, b)
    return a * b
end

local function dividir(a, b)
    if b ~= 0 then
        return a / b
    else
        return "Erro: Divisão por zero"
    end
end

-- Teste as funções
print("5 + 3 =", somar(5, 3))
print("10 - 4 =", subtrair(10, 4))
print("6 * 7 =", multiplicar(6, 7))
print("20 / 4 =", dividir(20, 4))
\`\`\`

## Desafio:
Adicione funções para potência e raiz quadrada!`
        },
      ]
    },
    {
      id: 3,
      title: "Scripts e Interatividade",
      description: "Adicione comportamentos e interações aos seus jogos",
      progress: 0,
      lessons: [
        { id: 10, title: "Entendendo Scripts no Roblox", duration: "10 min", type: "video", completed: false },
        { id: 11, title: "Eventos e Listeners", duration: "20 min", type: "video", completed: false },
        { id: 12, title: "Criando Portas Automáticas", duration: "25 min", type: "code", completed: false },
        { id: 13, title: "Sistema de Pontuação", duration: "30 min", type: "code", completed: false },
      ]
    },
    {
      id: 4,
      title: "Mecânicas de Jogo Avançadas",
      description: "Implemente sistemas complexos como inventário e combate",
      progress: 0,
      lessons: [
        { id: 14, title: "Sistema de Inventário", duration: "35 min", type: "video", completed: false },
        { id: 15, title: "Sistema de Combate", duration: "40 min", type: "video", completed: false },
        { id: 16, title: "Power-ups e Coletáveis", duration: "30 min", type: "code", completed: false },
        { id: 17, title: "Sistema de Níveis", duration: "45 min", type: "code", completed: false },
      ]
    },
    {
      id: 5,
      title: "Multiplayer e Networking",
      description: "Crie experiências multiplayer sincronizadas",
      progress: 0,
      lessons: [
        { id: 18, title: "Conceitos de Multiplayer", duration: "15 min", type: "video", completed: false },
        { id: 19, title: "RemoteEvents e RemoteFunctions", duration: "25 min", type: "video", completed: false },
        { id: 20, title: "Sincronização de Dados", duration: "30 min", type: "code", completed: false },
        { id: 21, title: "Chat e Comunicação", duration: "20 min", type: "code", completed: false },
      ]
    },
    {
      id: 6,
      title: "Monetização e Publicação",
      description: "Aprenda a publicar e monetizar seus jogos",
      progress: 0,
      lessons: [
        { id: 22, title: "Game Passes e Developer Products", duration: "20 min", type: "video", completed: false },
        { id: 23, title: "Sistema de Robux", duration: "15 min", type: "text", completed: false },
        { id: 24, title: "Publicando seu Jogo", duration: "25 min", type: "video", completed: false },
        { id: 25, title: "Marketing e Crescimento", duration: "30 min", type: "text", completed: false },
      ]
    },
  ]);

  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = modules.reduce((acc, module) => 
    acc + module.lessons.filter(l => l.completed).length, 0
  );
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  const markAsComplete = (moduleId: number, lessonId: number) => {
    setModules(prevModules => 
      prevModules.map(module => {
        if (module.id === moduleId) {
          const updatedLessons = module.lessons.map(lesson =>
            lesson.id === lessonId ? { ...lesson, completed: true } : lesson
          );
          const completedCount = updatedLessons.filter(l => l.completed).length;
          const progress = Math.round((completedCount / updatedLessons.length) * 100);
          return { ...module, lessons: updatedLessons, progress };
        }
        return module;
      })
    );
  };

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
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Área de Membros</h1>
              <p className="text-blue-100">Bem-vindo de volta, {userName}! Continue seu aprendizado</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => router.push("/profile")}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <User className="w-4 h-4 mr-2" />
                Meu Perfil
              </Button>
              <ShareButton 
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Progress Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-2 border-blue-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Seu Progresso</CardTitle>
                <CardDescription className="text-base mt-2">
                  {completedLessons} de {totalLessons} aulas concluídas
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-blue-600">{overallProgress}%</div>
                <div className="text-sm text-muted-foreground">Completo</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={overallProgress} className="h-3" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Trophy className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold">{completedLessons}</div>
                <div className="text-xs text-muted-foreground">Aulas Completas</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Clock className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <div className="text-2xl font-bold">{totalLessons - completedLessons}</div>
                <div className="text-xs text-muted-foreground">Aulas Restantes</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <BookOpen className="w-6 h-6 mx-auto mb-2 text-green-600" />
                <div className="text-2xl font-bold">{modules.length}</div>
                <div className="text-xs text-muted-foreground">Módulos</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Award className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <div className="text-2xl font-bold">{overallProgress >= 100 ? '1' : '0'}</div>
                <div className="text-xs text-muted-foreground">Certificados</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Modules List */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Módulos do Curso</h2>
            {modules.map((module, index) => (
              <Card 
                key={module.id} 
                className="border-2 hover:border-blue-500 transition-all cursor-pointer"
                onClick={() => setSelectedLesson(module.lessons[0])}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base leading-tight mb-1">{module.title}</CardTitle>
                      <CardDescription className="text-xs">{module.lessons.length} aulas</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-semibold">{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Lesson Content */}
          <div className="lg:col-span-2">
            {selectedLesson ? (
              <Card className="border-2 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getLessonIcon(selectedLesson.type)}
                        <Badge>{selectedLesson.type === "video" ? "Vídeo" : selectedLesson.type === "code" ? "Prática" : "Leitura"}</Badge>
                        <Badge variant="outline">{selectedLesson.duration}</Badge>
                      </div>
                      <CardTitle className="text-2xl">{selectedLesson.title}</CardTitle>
                    </div>
                    {selectedLesson.completed && (
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  {selectedLesson.type === "video" && selectedLesson.videoUrl && (
                    <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
                      <iframe
                        src={selectedLesson.videoUrl}
                        className="w-full h-full"
                        allowFullScreen
                        title={selectedLesson.title}
                      />
                    </div>
                  )}
                  
                  {selectedLesson.content && (
                    <div className="prose dark:prose-invert max-w-none mb-6">
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {selectedLesson.content}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
                    {!selectedLesson.completed && (
                      <Button 
                        className="flex-1"
                        onClick={() => {
                          const module = modules.find(m => m.lessons.some(l => l.id === selectedLesson.id));
                          if (module) markAsComplete(module.id, selectedLesson.id);
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Marcar como Concluída
                      </Button>
                    )}
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Materiais
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 h-full flex items-center justify-center min-h-[500px]">
                <CardContent className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-bold mb-2">Selecione uma aula</h3>
                  <p className="text-muted-foreground">
                    Escolha um módulo ao lado para começar seu aprendizado
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quick Links */}
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <Card className="border-2 hover:border-blue-500 transition-all">
                <CardHeader className="text-center pb-4">
                  <Download className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <CardTitle className="text-base">Recursos</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" size="sm" className="w-full">
                    Baixar Tudo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 transition-all">
                <CardHeader className="text-center pb-4">
                  <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <CardTitle className="text-base">Comunidade</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" size="sm" className="w-full">
                    Discord
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-500 transition-all">
                <CardHeader className="text-center pb-4">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <CardTitle className="text-base">Certificado</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    disabled={overallProgress < 100}
                  >
                    {overallProgress >= 100 ? 'Baixar' : 'Bloqueado'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
