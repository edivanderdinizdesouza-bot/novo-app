"use client";

import { ArrowLeft, BookOpen, Code, Gamepad2, Lightbulb, Rocket, Settings, Users, Zap, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export default function GuiaCompletoPage() {
  const passos = [
    {
      numero: 1,
      titulo: "Preparação e Instalação",
      icone: Settings,
      descricao: "Configure seu ambiente de desenvolvimento",
      conteudo: [
        {
          subtitulo: "Criando sua Conta Roblox",
          itens: [
            "Acesse www.roblox.com e clique em 'Cadastrar'",
            "Escolha um nome de usuário único (não pode ser alterado depois)",
            "Defina uma senha forte com letras, números e símbolos",
            "Adicione um email válido para recuperação de conta",
            "Ative a verificação em duas etapas para maior segurança"
          ]
        },
        {
          subtitulo: "Instalando o Roblox Studio",
          itens: [
            "Acesse create.roblox.com/landing",
            "Clique em 'Start Creating' ou 'Download Studio'",
            "Execute o instalador baixado (RobloxStudio.exe no Windows)",
            "Faça login com sua conta Roblox",
            "Aguarde a instalação dos componentes necessários"
          ]
        },
        {
          subtitulo: "Configurações Iniciais",
          itens: [
            "Abra o Roblox Studio",
            "Vá em File > Settings",
            "Configure o tema (claro/escuro) em 'Studio Theme'",
            "Ajuste a sensibilidade da câmera em 'Camera'",
            "Ative 'Auto-Save' para salvar automaticamente seu progresso"
          ]
        }
      ]
    },
    {
      numero: 2,
      titulo: "Conhecendo a Interface",
      icone: Gamepad2,
      descricao: "Domine as ferramentas do Roblox Studio",
      conteudo: [
        {
          subtitulo: "Áreas Principais",
          itens: [
            "Explorer: Hierarquia de todos os objetos do seu jogo",
            "Properties: Propriedades do objeto selecionado",
            "Viewport: Visualização 3D do seu mundo",
            "Output: Console para mensagens e erros",
            "Toolbox: Biblioteca de modelos e assets gratuitos"
          ]
        },
        {
          subtitulo: "Ferramentas de Construção",
          itens: [
            "Select (Ctrl+1): Selecionar objetos",
            "Move (Ctrl+2): Mover objetos no espaço 3D",
            "Scale (Ctrl+3): Redimensionar objetos",
            "Rotate (Ctrl+4): Rotacionar objetos",
            "Terrain Editor: Criar montanhas, rios e paisagens"
          ]
        },
        {
          subtitulo: "Navegação na Viewport",
          itens: [
            "Botão direito do mouse + arrastar: Rotacionar câmera",
            "Scroll do mouse: Zoom in/out",
            "Teclas W,A,S,D: Mover câmera (com botão direito pressionado)",
            "F: Focar no objeto selecionado",
            "Shift: Mover câmera mais rápido"
          ]
        }
      ]
    },
    {
      numero: 3,
      titulo: "Construindo Seu Primeiro Mundo",
      icone: Rocket,
      descricao: "Crie um ambiente básico jogável",
      conteudo: [
        {
          subtitulo: "Criando o Terreno",
          itens: [
            "Clique na aba 'Terrain' no topo",
            "Selecione 'Generate' para criar terreno procedural",
            "Ajuste o tamanho (recomendado: 512x512 para iniciantes)",
            "Escolha o bioma (Grass, Desert, Water, etc.)",
            "Clique em 'Generate' e aguarde a criação"
          ]
        },
        {
          subtitulo: "Adicionando Objetos (Parts)",
          itens: [
            "Clique em 'Part' no menu Home",
            "Escolha o tipo: Block, Sphere, Cylinder, Wedge",
            "Use a ferramenta Scale para ajustar o tamanho",
            "Altere a cor em Properties > BrickColor",
            "Mude o material em Properties > Material"
          ]
        },
        {
          subtitulo: "Construindo uma Casa Simples",
          itens: [
            "Crie 4 paredes usando Parts retangulares",
            "Adicione um chão (Part grande e achatada)",
            "Crie um teto usando Wedges ou Parts",
            "Adicione uma porta (Part com Transparency = 0.5)",
            "Decore com móveis do Toolbox (pesquise 'furniture')"
          ]
        },
        {
          subtitulo: "Iluminação e Atmosfera",
          itens: [
            "Em Lighting, ajuste 'ClockTime' para hora do dia",
            "Adicione 'PointLight' dentro de objetos para iluminação",
            "Configure 'Ambient' para luz ambiente",
            "Use 'Atmosphere' para névoa e efeitos atmosféricos",
            "Ajuste 'Brightness' para intensidade geral"
          ]
        }
      ]
    },
    {
      numero: 4,
      titulo: "Introdução à Programação Lua",
      icone: Code,
      descricao: "Aprenda a dar vida ao seu jogo com scripts",
      conteudo: [
        {
          subtitulo: "Seu Primeiro Script",
          itens: [
            "No Explorer, clique com botão direito em 'ServerScriptService'",
            "Selecione 'Insert Object' > 'Script'",
            "Digite: print('Olá, Roblox!')",
            "Pressione F5 para testar",
            "Veja a mensagem no Output (View > Output)"
          ]
        },
        {
          subtitulo: "Variáveis e Tipos de Dados",
          itens: [
            "Números: local idade = 25",
            "Texto (strings): local nome = 'João'",
            "Booleanos: local ativo = true",
            "Tabelas: local cores = {'vermelho', 'azul', 'verde'}",
            "Nil: local vazio = nil (representa ausência de valor)"
          ]
        },
        {
          subtitulo: "Estruturas Condicionais",
          itens: [
            "if pontos > 100 then print('Você venceu!') end",
            "if vida <= 0 then print('Game Over') else print('Continue') end",
            "Operadores: == (igual), ~= (diferente), > < >= <=",
            "Operadores lógicos: and, or, not",
            "elseif para múltiplas condições"
          ]
        },
        {
          subtitulo: "Loops (Repetições)",
          itens: [
            "for i = 1, 10 do print(i) end (conta de 1 a 10)",
            "while true do wait(1) print('Loop infinito') end",
            "repeat ... until condicao (executa pelo menos uma vez)",
            "break para sair de um loop",
            "continue para pular para próxima iteração"
          ]
        },
        {
          subtitulo: "Funções",
          itens: [
            "function saudar(nome) print('Olá, ' .. nome) end",
            "saudar('Maria') -- chama a função",
            "function somar(a, b) return a + b end",
            "local resultado = somar(5, 3) -- resultado = 8",
            "Funções podem retornar múltiplos valores"
          ]
        }
      ]
    },
    {
      numero: 5,
      titulo: "Interatividade e Eventos",
      icone: Zap,
      descricao: "Faça objetos responderem a ações do jogador",
      conteudo: [
        {
          subtitulo: "Evento Touched (Toque)",
          itens: [
            "Detecta quando algo toca um objeto",
            "part.Touched:Connect(function(hit) ... end)",
            "Verifique se é um jogador: hit.Parent:FindFirstChild('Humanoid')",
            "Use para criar coletáveis, armadilhas, teleportes",
            "Sempre adicione debounce para evitar múltiplas ativações"
          ]
        },
        {
          subtitulo: "Criando um Coletável",
          itens: [
            "Crie uma Part (moeda, estrela, etc.)",
            "Adicione um Script dentro da Part",
            "Use Touched para detectar coleta",
            "Adicione pontos ao jogador",
            "Faça a moeda desaparecer e reaparecer depois"
          ]
        },
        {
          subtitulo: "Sistema de Teleporte",
          itens: [
            "Crie duas Parts (origem e destino)",
            "No script da origem, detecte Touched",
            "Use character:SetPrimaryPartCFrame() para teleportar",
            "Defina a posição de destino",
            "Adicione efeito visual (ParticleEmitter)"
          ]
        },
        {
          subtitulo: "Botões Interativos",
          itens: [
            "Crie uma Part que será o botão",
            "Use ClickDetector para detectar cliques",
            "clickDetector.MouseClick:Connect(function(player) ... end)",
            "Execute ação quando clicado (abrir porta, ativar armadilha)",
            "Mude a cor do botão para feedback visual"
          ]
        }
      ]
    },
    {
      numero: 6,
      titulo: "Sistemas Avançados",
      icone: Lightbulb,
      descricao: "Implemente mecânicas complexas",
      conteudo: [
        {
          subtitulo: "Sistema de Pontuação (Leaderboard)",
          itens: [
            "Crie uma pasta 'leaderstats' no jogador",
            "Adicione IntValue para pontos, moedas, etc.",
            "Use Players.PlayerAdded para inicializar",
            "Atualize valores com script.Parent.Value = valor",
            "Valores aparecem automaticamente no leaderboard"
          ]
        },
        {
          subtitulo: "DataStore (Salvar Dados)",
          itens: [
            "Use DataStoreService para persistência",
            "GetDataStore('NomeDoStore') para criar/acessar",
            "SetAsync(chave, valor) para salvar",
            "GetAsync(chave) para carregar",
            "Use pcall() para tratamento de erros"
          ]
        },
        {
          subtitulo: "Interface Gráfica (GUI)",
          itens: [
            "Adicione ScreenGui em StarterGui",
            "Crie Frame para containers",
            "Adicione TextLabel para textos",
            "Use TextButton para botões clicáveis",
            "ImageLabel para imagens e ícones"
          ]
        },
        {
          subtitulo: "RemoteEvents (Cliente-Servidor)",
          itens: [
            "Crie RemoteEvent em ReplicatedStorage",
            "No cliente: remoteEvent:FireServer(dados)",
            "No servidor: remoteEvent.OnServerEvent:Connect(function(player, dados) ... end)",
            "Use para comunicação segura",
            "NUNCA confie em dados do cliente sem validação"
          ]
        }
      ]
    },
    {
      numero: 7,
      titulo: "Publicação e Monetização",
      icone: Users,
      descricao: "Compartilhe seu jogo com o mundo",
      conteudo: [
        {
          subtitulo: "Publicando seu Jogo",
          itens: [
            "Clique em File > Publish to Roblox",
            "Escolha um nome atrativo e descritivo",
            "Escreva uma descrição detalhada do jogo",
            "Adicione uma thumbnail chamativa (ícone do jogo)",
            "Configure se é público ou privado"
          ]
        },
        {
          subtitulo: "Otimização de Performance",
          itens: [
            "Use Anchored = true em objetos estáticos",
            "Evite muitos scripts rodando simultaneamente",
            "Use wait() em loops para não travar o servidor",
            "Remova objetos não utilizados",
            "Use LOD (Level of Detail) para objetos distantes"
          ]
        },
        {
          subtitulo: "Game Passes",
          itens: [
            "Acesse a página do seu jogo no site Roblox",
            "Vá em 'Create' > 'Game Passes'",
            "Defina nome, descrição e preço em Robux",
            "Use MarketplaceService no script para verificar compra",
            "Dê benefícios exclusivos (VIP, itens especiais)"
          ]
        },
        {
          subtitulo: "Developer Products",
          itens: [
            "Produtos consumíveis (podem ser comprados múltiplas vezes)",
            "Ideal para moedas do jogo, vidas extras, power-ups",
            "Configure no site, implemente com MarketplaceService",
            "ProcessReceipt para confirmar compra",
            "Sempre salve a compra em DataStore"
          ]
        }
      ]
    }
  ];

  const dicasImportantes = [
    {
      titulo: "Teste Constantemente",
      descricao: "Pressione F5 frequentemente para testar seu jogo. É melhor encontrar bugs cedo do que depois de horas de trabalho.",
      tipo: "success"
    },
    {
      titulo: "Salve Seu Progresso",
      descricao: "Use Ctrl+S regularmente ou ative Auto-Save. Perder horas de trabalho por não salvar é frustrante.",
      tipo: "warning"
    },
    {
      titulo: "Comece Pequeno",
      descricao: "Não tente criar um jogo AAA no primeiro dia. Comece com projetos simples e vá evoluindo gradualmente.",
      tipo: "info"
    },
    {
      titulo: "Use a Comunidade",
      descricao: "O DevForum e comunidades do Discord são ótimos para tirar dúvidas e aprender com outros desenvolvedores.",
      tipo: "success"
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
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-12 h-12" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">
                Guia Completo de Criação de Jogos
              </h1>
              <p className="text-xl text-blue-100 mt-2">
                Do zero ao primeiro jogo publicado no Roblox
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introdução */}
        <Card className="mb-12 border-2 border-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl">Bem-vindo ao Mundo do Desenvolvimento Roblox!</CardTitle>
            <CardDescription className="text-base">
              Este guia completo vai te levar do absoluto zero até a publicação do seu primeiro jogo no Roblox. 
              Siga os passos em ordem e pratique cada conceito antes de avançar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">7</div>
                <div className="text-sm text-muted-foreground mt-1">Etapas Principais</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2-4h</div>
                <div className="text-sm text-muted-foreground mt-1">Tempo Estimado</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Prático</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dicas Importantes */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {dicasImportantes.map((dica, index) => (
            <Alert key={index} className={
              dica.tipo === "success" ? "border-green-500 bg-green-50 dark:bg-green-900/20" :
              dica.tipo === "warning" ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20" :
              "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
            }>
              {dica.tipo === "success" ? <CheckCircle2 className="h-5 w-5 text-green-600" /> :
               dica.tipo === "warning" ? <AlertCircle className="h-5 w-5 text-yellow-600" /> :
               <Lightbulb className="h-5 w-5 text-blue-600" />}
              <AlertTitle className="font-semibold">{dica.titulo}</AlertTitle>
              <AlertDescription className="text-sm">{dica.descricao}</AlertDescription>
            </Alert>
          ))}
        </div>

        {/* Passos do Guia */}
        <div className="space-y-8">
          {passos.map((passo) => (
            <Card key={passo.numero} className="border-2 hover:border-blue-500 transition-all">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl shrink-0">
                    {passo.numero}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <passo.icone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <CardTitle className="text-2xl">{passo.titulo}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{passo.descricao}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {passo.conteudo.map((secao, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        {secao.subtitulo}
                      </h4>
                      <ul className="space-y-2 ml-4">
                        {secao.itens.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Final */}
        <Card className="mt-12 border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl">Parabéns! Você Completou o Guia!</CardTitle>
            <CardDescription className="text-base mt-2">
              Agora você tem todo o conhecimento necessário para criar jogos incríveis no Roblox. 
              O próximo passo é praticar e deixar sua criatividade fluir!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Rocket className="w-5 h-5 mr-2" />
                Começar Meu Projeto
              </Button>
              <Link href="/">
                <Button size="lg" variant="outline">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Voltar ao Curso
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
