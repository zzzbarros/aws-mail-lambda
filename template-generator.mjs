export const generateTemplateData = (type, username, token) => {
  const templates = {
    create: {
      username,
      subject: 'Definir Senha',
      title: 'Bem-vindo!',
      message: 'Você acabou de ser cadastrado como usuário em nossa plataforma.',
      description: 'Clique no botão abaixo para definir sua senha de acesso.',
      buttonText: 'Definir senha',
      urlButton: process.env.FRONTEND_URL.concat('/auth/create-password/').concat(token),
      expirationToken: 24,
    },
    recovery: {
      username,
      subject: 'Recuperação de Senha',
      title: 'Recuperação de Senha!',
      message: 'Você acabou solicitar a recuperação de senha em nossa plataforma.',
      description: 'Clique no botão abaixo para definir sua senha de acesso.',
      buttonText: 'Redefinir senha',
      urlButton: process.env.FRONTEND_URL.concat('/auth/recovery-password/').concat(token),
      expirationToken: 24,
    },
    monitory: {
      username,
      subject: 'Bem-estar diário',
      title: 'Como você se sente hoje?',
      message: 'Ajude o seu treinador a monitorar e adequar seus treinos.',
      description: 'Clique no botão abaixo para responder o questionário diário.',
      buttonText: 'Acessar questionário',
       urlButton: process.env.FRONTEND_URL.concat('/athlete/day-monitory').concat(token),
      expirationToken: 24,
    }
  }
  return templates[type]
}