"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Download, Play, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula verificação de pagamento
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Verificando pagamento...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="border-2 border-green-500 shadow-2xl">
          <CardHeader className="text-center pb-8 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <CardTitle className="text-4xl mb-4">
              Pagamento Confirmado! 🎉
            </CardTitle>
            <CardDescription className="text-lg">
              Bem-vindo ao Curso Roblox Studio! Sua jornada como desenvolvedor de jogos começa agora.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-2 border-blue-200">
              <h3 className="font-bold text-lg mb-3">📧 Próximos Passos:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Enviamos um email com suas credenciais de acesso</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Você receberá o link para entrar na comunidade Discord</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Todos os materiais já estão disponíveis na sua área de membros</span>
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="border-2 hover:border-blue-500 transition-all">
                <CardHeader className="text-center pb-4">
                  <Play className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <CardTitle className="text-base">Começar Curso</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full" asChild>
                    <Link href="/">Acessar Aulas</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 transition-all">
                <CardHeader className="text-center pb-4">
                  <Download className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <CardTitle className="text-base">Materiais</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full">
                    Baixar Recursos
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-500 transition-all">
                <CardHeader className="text-center pb-4">
                  <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <CardTitle className="text-base">Comunidade</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full">
                    Entrar no Discord
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-2 border-yellow-200">
              <h3 className="font-bold text-lg mb-3">🎁 Bônus Desbloqueados:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Biblioteca completa de scripts</li>
                <li>✅ 10+ templates de jogos prontos</li>
                <li>✅ Assets premium exclusivos</li>
                <li>✅ Certificado digital ao concluir</li>
              </ul>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                ID da Transação: {sessionId || 'XXXXXXXX'}
              </p>
              <p className="text-sm text-muted-foreground">
                Precisa de ajuda? Entre em contato com nosso suporte
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
