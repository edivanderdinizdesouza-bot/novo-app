"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Calendar, MapPin, Gamepad2, Target, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    location: "",
    robloxUsername: "",
    experienceLevel: "",
    goals: "",
    avatar: ""
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Salvar dados no localStorage
      localStorage.setItem("userProfile", JSON.stringify({
        ...formData,
        createdAt: new Date().toISOString(),
        completedLessons: [],
        progress: 0
      }));
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.age;
      case 2:
        return formData.robloxUsername && formData.experienceLevel;
      case 3:
        return formData.goals;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="text-2xl">Bem-vindo ao Curso!</CardTitle>
              <CardDescription className="text-blue-100 mt-2">
                Passo {step} de {totalSteps}
              </CardDescription>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <Gamepad2 className="w-8 h-8" />
            </div>
          </div>
          <Progress value={progress} className="h-2 bg-white/20" />
        </CardHeader>

        <CardContent className="pt-8">
          {/* Step 1: Informações Básicas */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Informações Básicas</h3>
                <p className="text-muted-foreground">Conte-nos um pouco sobre você</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4" />
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" />
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age" className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4" />
                      Idade *
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="18"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      Localização
                    </Label>
                    <Input
                      id="location"
                      placeholder="Cidade, País"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Experiência com Roblox */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Experiência com Roblox</h3>
                <p className="text-muted-foreground">Ajude-nos a personalizar sua jornada</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="robloxUsername" className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="w-4 h-4" />
                    Nome de Usuário no Roblox *
                  </Label>
                  <Input
                    id="robloxUsername"
                    placeholder="@seu_usuario"
                    value={formData.robloxUsername}
                    onChange={(e) => handleInputChange("robloxUsername", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="mb-3 block">Nível de Experiência *</Label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { value: "beginner", label: "Iniciante", desc: "Nunca usei o Roblox Studio" },
                      { value: "intermediate", label: "Intermediário", desc: "Já criei alguns projetos simples" },
                      { value: "advanced", label: "Avançado", desc: "Tenho experiência com programação" }
                    ].map((level) => (
                      <button
                        key={level.value}
                        onClick={() => handleInputChange("experienceLevel", level.value)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.experienceLevel === level.value
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-blue-300"
                        }`}
                      >
                        <div className="font-semibold mb-1">{level.label}</div>
                        <div className="text-sm text-muted-foreground">{level.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Objetivos */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Seus Objetivos</h3>
                <p className="text-muted-foreground">O que você espera alcançar com este curso?</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="goals" className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4" />
                    Descreva seus objetivos *
                  </Label>
                  <Textarea
                    id="goals"
                    placeholder="Ex: Quero criar meu próprio jogo de aventura no Roblox e aprender a programar em Lua..."
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    className="min-h-[150px] resize-none"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Isso nos ajudará a personalizar sua experiência de aprendizado
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-blue-600" />
                    O que você vai receber:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      Acesso completo a todos os módulos
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      Certificado ao concluir o curso
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      Suporte da comunidade
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      Projetos práticos e recursos extras
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8 pt-6 border-t">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1"
              >
                Voltar
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {step === totalSteps ? "Começar Curso" : "Próximo"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
