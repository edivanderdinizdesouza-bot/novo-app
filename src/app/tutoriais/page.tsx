"use client";

import { ArrowLeft, Code, Lightbulb, Wrench, Zap, BookOpen, Video, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function TutoriaisPage() {
  const tutoriais = [
    {
      id: 1,
      categoria: "Iniciante",
      titulo: "Instalando e Configurando o Roblox Studio",
      descricao: "Aprenda a instalar o Roblox Studio e configurar seu ambiente de desenvolvimento",
      duracao: "10 min",
      nivel: "Iniciante",
      topicos: [
        "Download do Roblox Studio",
        "Criação de conta de desenvolvedor",
        "Interface do Studio",
        "Configurações básicas",
        "Primeiro projeto"
      ]
    },
    {
      id: 2,
      categoria: "Iniciante",
      titulo: "Criando Seu Primeiro Mundo 3D",
      descricao: "Construa um mundo básico usando as ferramentas de terreno e objetos",
      duracao: "25 min",
      nivel: "Iniciante",
      topicos: [
        "Ferramentas de terreno",
        "Adicionando partes (Parts)",
        "Manipulando objetos 3D",
        "Texturas e materiais",
        "Iluminação básica"
      ]
    },
    {
      id: 3,
      categoria: "Intermediário",
      titulo: "Introdução à Programação Lua",
      descricao: "Aprenda os fundamentos da linguagem Lua para criar scripts no Roblox",
      duracao: "40 min",
      nivel: "Intermediário",
      topicos: [
        "Variáveis e tipos de dados",
        "Operadores matemáticos",
        "Estruturas condicionais (if/else)",
        "Loops (for, while)",
        "Funções básicas"
      ]
    },
    {
      id: 4,
      categoria: "Intermediário",
      titulo: "Criando Portas Automáticas",
      descricao: "Implemente portas que abrem automaticamente quando o jogador se aproxima",
      duracao: "30 min",
      nivel: "Intermediário",
      topicos: [
        "Detecção de proximidade",
        "Eventos TouchEnded",
        "Animação de objetos",
        "Debounce (evitar spam)",
        "Sons e efeitos"
      ]
    },
    {
      id: 5,
      categoria: "Avançado",
      titulo: "Sistema de Inventário Completo",
      descricao: "Crie um sistema de inventário funcional com interface gráfica",
      duracao: "60 min",
      nivel: "Avançado",
      topicos: [
        "DataStores para salvar dados",
        "Interface GUI customizada",
        "Sistema de itens",
        "Drag and drop",
        "Persistência de dados"
      ]
    },
    {
      id: 6,
      categoria: "Avançado",
      titulo: "Multiplayer e Sincronização",
      descricao: "Aprenda a criar experiências multiplayer sincronizadas",
      duracao: "50 min",
      nivel: "Avançado",
      topicos: [
        "RemoteEvents e RemoteFunctions",
        "Client-Server architecture",
        "Replicação de dados",
        "Segurança e validação",
        "Otimização de rede"
      ]
    }
  ];

  const codigoExemplos = [
    {
      titulo: "Script Básico - Olá Mundo",
      descricao: "Seu primeiro script no Roblox",
      codigo: `-- Coloque este script em ServerScriptService
print("Olá, Mundo do Roblox!")

-- Espera 3 segundos
wait(3)

-- Imprime outra mensagem
print("Bem-vindo ao desenvolvimento de jogos!")`,
      linguagem: "lua"
    },
    {
      titulo: "Porta Automática",
      descricao: "Porta que abre quando o jogador se aproxima",
      codigo: `-- Coloque este script dentro da porta
local porta = script.Parent
local aberta = false
local debounce = false

local function abrirPorta()
    if not debounce then
        debounce = true
        aberta = true
        
        -- Move a porta para cima
        porta:TweenPosition(
            porta.Position + Vector3.new(0, 5, 0),
            "Out",
            "Quad",
            1
        )
        
        wait(3) -- Porta fica aberta por 3 segundos
        
        -- Fecha a porta
        porta:TweenPosition(
            porta.Position - Vector3.new(0, 5, 0),
            "Out",
            "Quad",
            1
        )
        
        wait(1)
        aberta = false
        debounce = false
    end
end

-- Detecta quando jogador toca a porta
porta.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if humanoid and not aberta then
        abrirPorta()
    end
end)`,
      linguagem: "lua"
    },
    {
      titulo: "Sistema de Pontos",
      descricao: "Sistema básico de pontuação para jogadores",
      codigo: `-- Coloque este script em ServerScriptService
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    -- Cria leaderstats
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player
    
    -- Cria valor de pontos
    local pontos = Instance.new("IntValue")
    pontos.Name = "Pontos"
    pontos.Value = 0
    pontos.Parent = leaderstats
end)

-- Função para adicionar pontos
function adicionarPontos(player, quantidade)
    local leaderstats = player:FindFirstChild("leaderstats")
    if leaderstats then
        local pontos = leaderstats:FindFirstChild("Pontos")
        if pontos then
            pontos.Value = pontos.Value + quantidade
        end
    end
end`,
      linguagem: "lua"
    },
    {
      titulo: "Coletável (Moeda)",
      descricao: "Item que o jogador pode coletar para ganhar pontos",
      codigo: `-- Coloque este script dentro da moeda
local moeda = script.Parent
local valor = 10 -- Pontos que a moeda vale
local coletada = false

moeda.Touched:Connect(function(hit)
    if not coletada then
        local humanoid = hit.Parent:FindFirstChild("Humanoid")
        if humanoid then
            coletada = true
            
            -- Pega o jogador
            local player = game.Players:GetPlayerFromCharacter(hit.Parent)
            
            if player then
                -- Adiciona pontos
                local leaderstats = player:FindFirstChild("leaderstats")
                if leaderstats then
                    local pontos = leaderstats:FindFirstChild("Pontos")
                    if pontos then
                        pontos.Value = pontos.Value + valor
                    end
                end
                
                -- Efeito visual
                moeda.Transparency = 1
                moeda.CanCollide = false
                
                -- Som (opcional)
                -- local som = moeda:FindFirstChild("SomColeta")
                -- if som then som:Play() end
                
                -- Respawn após 30 segundos
                wait(30)
                moeda.Transparency = 0
                moeda.CanCollide = true
                coletada = false
            end
        end
    end
end)`,
      linguagem: "lua"
    }
  ];

  const ferramentas = [
    {
      nome: "Roblox Studio",
      descricao: "IDE oficial para desenvolvimento de jogos Roblox",
      link: "https://www.roblox.com/create",
      icone: Wrench
    },
    {
      nome: "Roblox Developer Hub",
      descricao: "Documentação oficial e tutoriais",
      link: "https://create.roblox.com/docs",
      icone: BookOpen
    },
    {
      nome: "Roblox Creator Store",
      descricao: "Marketplace de assets e modelos 3D",
      link: "https://create.roblox.com/store",
      icone: Download
    },
    {
      nome: "DevForum",
      descricao: "Fórum oficial de desenvolvedores Roblox",
      link: "https://devforum.roblox.com",
      icone: ExternalLink
    }
  ];

  const dicas = [
    {
      titulo: "Comece Simples",
      descricao: "Não tente criar um jogo complexo logo de início. Comece com projetos pequenos e vá aumentando a complexidade gradualmente.",
      icone: Lightbulb
    },
    {
      titulo: "Teste Frequentemente",
      descricao: "Sempre teste seu jogo no modo Play para verificar se tudo está funcionando como esperado. Use o botão F5 para testar rapidamente.",
      icone: Zap
    },
    {
      titulo: "Use a Documentação",
      descricao: "A documentação oficial do Roblox é muito completa. Sempre consulte quando tiver dúvidas sobre funções e APIs.",
      icone: BookOpen
    },
    {
      titulo: "Aprenda com Exemplos",
      descricao: "Estude jogos de outros desenvolvedores. O Roblox permite que você veja o código de jogos não protegidos.",
      icone: Code
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Curso
            </Button>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Tutoriais Práticos
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Guias passo a passo para criar funcionalidades incríveis no Roblox Studio
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="tutoriais" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto p-1">
            <TabsTrigger value="tutoriais" className="text-sm sm:text-base py-3">
              <BookOpen className="w-4 h-4 mr-2" />
              Tutoriais
            </TabsTrigger>
            <TabsTrigger value="codigo" className="text-sm sm:text-base py-3">
              <Code className="w-4 h-4 mr-2" />
              Códigos
            </TabsTrigger>
            <TabsTrigger value="recursos" className="text-sm sm:text-base py-3">
              <Wrench className="w-4 h-4 mr-2" />
              Recursos
            </TabsTrigger>
          </TabsList>

          {/* Tutoriais Tab */}
          <TabsContent value="tutoriais" className="space-y-6">
            <div className="grid gap-6">
              {tutoriais.map((tutorial) => (
                <Card key={tutorial.id} className="border-2 hover:border-blue-500 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={
                            tutorial.nivel === "Iniciante" ? "default" :
                            tutorial.nivel === "Intermediário" ? "secondary" :
                            "destructive"
                          }>
                            {tutorial.nivel}
                          </Badge>
                          <Badge variant="outline">{tutorial.duracao}</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">{tutorial.titulo}</CardTitle>
                        <CardDescription className="text-base">{tutorial.descricao}</CardDescription>
                      </div>
                      <Video className="w-8 h-8 text-blue-500 shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground">O que você vai aprender:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {tutorial.topicos.map((topico, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {topico}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full sm:w-auto mt-4">
                        <Video className="w-4 h-4 mr-2" />
                        Assistir Tutorial
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Código Tab */}
          <TabsContent value="codigo" className="space-y-6">
            <div className="space-y-6">
              {codigoExemplos.map((exemplo, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="w-6 h-6 text-purple-500" />
                      <CardTitle className="text-xl">{exemplo.titulo}</CardTitle>
                    </div>
                    <CardDescription>{exemplo.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100 font-mono">
                        <code>{exemplo.codigo}</code>
                      </pre>
                    </div>
                    <Button variant="outline" className="mt-4">
                      <Download className="w-4 h-4 mr-2" />
                      Copiar Código
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Dicas de Programação */}
            <Card className="border-2 border-yellow-500 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 mt-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Lightbulb className="w-7 h-7 text-yellow-600" />
                  Dicas Importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {dicas.map((dica, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <dica.icone className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">{dica.titulo}</div>
                        <div className="text-sm text-muted-foreground">{dica.descricao}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recursos Tab */}
          <TabsContent value="recursos" className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {ferramentas.map((ferramenta, index) => (
                <Card key={index} className="border-2 hover:border-blue-500 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                      <ferramenta.icone className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{ferramenta.nome}</CardTitle>
                    <CardDescription>{ferramenta.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={ferramenta.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Acessar
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Guia Rápido */}
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="text-2xl">Guia Rápido de Referência</CardTitle>
                <CardDescription>Comandos e funções mais usados no Roblox Studio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Atalhos do Teclado:</h4>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Testar jogo</span>
                        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">F5</kbd>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Parar teste</span>
                        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Shift + F5</kbd>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Mover objeto</span>
                        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Ctrl + M</kbd>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Rotacionar objeto</span>
                        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Ctrl + R</kbd>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Escalar objeto</span>
                        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Ctrl + L</kbd>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Duplicar objeto</span>
                        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Ctrl + D</kbd>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Funções Lua Essenciais:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <code className="text-purple-600 dark:text-purple-400">print(mensagem)</code>
                        <p className="text-muted-foreground mt-1">Imprime mensagem no console</p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <code className="text-purple-600 dark:text-purple-400">wait(segundos)</code>
                        <p className="text-muted-foreground mt-1">Pausa a execução por X segundos</p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <code className="text-purple-600 dark:text-purple-400">Instance.new("Tipo")</code>
                        <p className="text-muted-foreground mt-1">Cria um novo objeto</p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <code className="text-purple-600 dark:text-purple-400">objeto:Destroy()</code>
                        <p className="text-muted-foreground mt-1">Remove um objeto do jogo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
