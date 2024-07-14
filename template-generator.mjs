export const generateTemplateData = (type, username, token, email) => {
  const templates = {
    create: {
      username,
      subject: 'Definir Senha',
      title: 'Bem-vindo!',
      message: 'Você acabou de ser cadastrado como usuário em nossa plataforma.',
      description: 'Clique no botão abaixo para definir sua senha de acesso.',
      buttonText: 'Definir Senha',
      unsubscribeURL: process.env.FRONTEND_URL.concat('/unsubscribe/').concat(token).concat(`?email=${email}`), 
      buttonURL: process.env.FRONTEND_URL.concat('/auth/create-password/').concat(token),
      expirationToken: 24,
    },
    recovery: {
      username,
      subject: 'Recuperação de Senha',
      title: 'Recuperação de Senha!',
      message: 'Você acabou de solicitar a recuperação de senha em nossa plataforma.',
      description: 'Clique no botão abaixo para definir sua nova senha de acesso.',
      buttonText: 'Redefinir Senha',
      unsubscribeURL: process.env.FRONTEND_URL.concat('/unsubscribe/').concat(token).concat(`?email=${email}`), 
      buttonURL: process.env.FRONTEND_URL.concat('/auth/forgot-password/').concat(token),
      expirationToken: 24,
    },
    monitory: {
      username,
      subject: 'Bem-estar diário',
      title: 'Como você está se sentindo hoje?',
      message: 'Ajude seu treinador a entender melhor como vai seu condicionamento físico, possibilitando-o adequar melhor suas cargas de treinamento para a semana.',
      description: 'Clique no botão abaixo para responder o questionário diário de bem-estar.',
      buttonText: 'Acessar Questionário',
      unsubscribeURL: process.env.FRONTEND_URL.concat('/unsubscribe/').concat(token).concat(`?email=${email}`),  
      buttonURL: process.env.FRONTEND_URL.concat('/athlete/day-monitory/').concat(token).concat(`?name=${username}`),
      expirationToken: 24,
    }
  }
  return templates[type]
}