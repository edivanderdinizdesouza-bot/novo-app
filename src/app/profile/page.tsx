"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Calendar, MapPin, Gamepad2, Target, Edit2, Save, ArrowLeft, Trophy, Clock, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface UserProfile {
  name: string;
  email: string;
  age: string;
  location: string;
  robloxUsername: string;
  experienceLevel: string;
  goals: string;
  avatar: string;
  createdAt: string;
  completedLessons: number[];
  progress: number;
}

export default function ProfilePage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [editedProfile, setEditedProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);
      setProfile(parsedProfile);
      setEditedProfile(parsedProfile);
    } else {
      router.push("/onboarding");
    }
  }, [router]);

  const handleSave = () => {
    if (editedProfile) {
      localStorage.setItem("userProfile", JSON.stringify(editedProfile));
      setProfile(editedProfile);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    if (editedProfile) {
      setEditedProfile({ ...editedProfile, [field]: value });
    }
  };

  const getExperienceLevelLabel = (level: string) => {
    switch (level) {
      case "beginner": return "Iniciante";
      case "intermediate": return "Intermediário";
      case "advanced": return "Avançado";
      default: return level;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (!profile || !editedProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando perfil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => router.push("/dashboard")}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Dashboard
            </Button>
            {!isEditing ? (
              <Button
                variant="outline"
                onClick={() => setIsEditing(true)}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Editar Perfil
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Salvar
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="border-2 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-blue-500">
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    {getInitials(profile.name)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{profile.name}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-2 mt-2">
                  <Gamepad2 className="w-4 h-4" />
                  @{profile.robloxUsername}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground">E-mail</div>
                    <div className="text-sm font-medium truncate">{profile.email}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="text-xs text-muted-foreground">Idade</div>
                      <div className="text-sm font-medium">{profile.age} anos</div>
                    </div>
                  </div>

                  {profile.location && (
                    <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-xs text-muted-foreground">Local</div>
                        <div className="text-sm font-medium">{profile.location}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-orange-600" />
                    <div className="text-xs text-muted-foreground">Nível</div>
                  </div>
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    {getExperienceLevelLabel(profile.experienceLevel)}
                  </Badge>
                </div>

                <div className="text-center pt-4 border-t">
                  <div className="text-xs text-muted-foreground mb-1">Membro desde</div>
                  <div className="text-sm font-medium">
                    {new Date(profile.createdAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="border-2 shadow-lg mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Aulas Completas</span>
                  </div>
                  <span className="font-bold text-lg">{profile.completedLessons.length}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">Progresso</span>
                  </div>
                  <span className="font-bold text-lg">{profile.progress}%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Tempo de Estudo</span>
                  </div>
                  <span className="font-bold text-lg">{profile.completedLessons.length * 15}min</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Certificados</span>
                  </div>
                  <span className="font-bold text-lg">{profile.progress >= 100 ? 1 : 0}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Edit Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {isEditing ? "Editar Informações" : "Informações do Perfil"}
                </CardTitle>
                <CardDescription>
                  {isEditing
                    ? "Atualize suas informações pessoais"
                    : "Visualize e gerencie suas informações"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Info */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Informações Pessoais
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="edit-name">Nome Completo</Label>
                      {isEditing ? (
                        <Input
                          id="edit-name"
                          value={editedProfile.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="mt-2"
                        />
                      ) : (
                        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          {profile.name}
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="edit-email">E-mail</Label>
                      {isEditing ? (
                        <Input
                          id="edit-email"
                          type="email"
                          value={editedProfile.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-2"
                        />
                      ) : (
                        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          {profile.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="edit-age">Idade</Label>
                      {isEditing ? (
                        <Input
                          id="edit-age"
                          type="number"
                          value={editedProfile.age}
                          onChange={(e) => handleInputChange("age", e.target.value)}
                          className="mt-2"
                        />
                      ) : (
                        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          {profile.age} anos
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="edit-location">Localização</Label>
                      {isEditing ? (
                        <Input
                          id="edit-location"
                          value={editedProfile.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          className="mt-2"
                        />
                      ) : (
                        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          {profile.location || "Não informado"}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Roblox Info */}
                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5" />
                    Informações do Roblox
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="edit-roblox">Nome de Usuário</Label>
                      {isEditing ? (
                        <Input
                          id="edit-roblox"
                          value={editedProfile.robloxUsername}
                          onChange={(e) => handleInputChange("robloxUsername", e.target.value)}
                          className="mt-2"
                        />
                      ) : (
                        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          @{profile.robloxUsername}
                        </div>
                      )}
                    </div>

                    <div>
                      <Label>Nível de Experiência</Label>
                      {isEditing ? (
                        <select
                          value={editedProfile.experienceLevel}
                          onChange={(e) => handleInputChange("experienceLevel", e.target.value)}
                          className="mt-2 w-full p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                        >
                          <option value="beginner">Iniciante</option>
                          <option value="intermediate">Intermediário</option>
                          <option value="advanced">Avançado</option>
                        </select>
                      ) : (
                        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          {getExperienceLevelLabel(profile.experienceLevel)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Goals */}
                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Seus Objetivos
                  </h3>
                  {isEditing ? (
                    <Textarea
                      value={editedProfile.goals}
                      onChange={(e) => handleInputChange("goals", e.target.value)}
                      className="min-h-[120px] resize-none"
                    />
                  ) : (
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg whitespace-pre-wrap">
                      {profile.goals}
                    </div>
                  )}
                </div>

                {/* Progress Overview */}
                {!isEditing && (
                  <div className="pt-6 border-t">
                    <h3 className="font-semibold text-lg mb-4">Progresso no Curso</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progresso Geral</span>
                          <span className="font-semibold">{profile.progress}%</span>
                        </div>
                        <Progress value={profile.progress} className="h-3" />
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">
                            {profile.completedLessons.length}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Aulas Completas</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">
                            {Math.floor(profile.completedLessons.length * 15 / 60)}h
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Tempo Total</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">
                            {Math.floor(profile.completedLessons.length / 4)}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Módulos</div>
                        </div>
                        <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">
                            {profile.progress >= 100 ? "✓" : "-"}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Certificado</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
