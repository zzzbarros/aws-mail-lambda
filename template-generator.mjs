export const generateTemplateData = (payload) => {
  const { type, name: username, token, email, schedule } = payload

  const templates = {
    'create-user': {
      username,
      subject: 'Definir Senha',
      title: 'Bem-vindo!',
      message: 'Você acabou de ser cadastrado como usuário em nossa plataforma.',
      description: 'Clique no botão abaixo para definir sua senha de acesso.',
      buttonText: 'Definir Senha',
      unsubscribeURL: process.env.FRONTEND_URL.concat('/unsubscribe/').concat(token).concat(`?email=${email}`), 
      buttonURL: process.env.FRONTEND_URL.concat('/create-password/').concat(token),
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
      buttonURL: process.env.FRONTEND_URL.concat('/forgot-password/').concat(token),
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
    },
    'create-schedule': {
      username,
      subject: 'Treino agendado - dia '.concat(schedule?.date ?? ''),
      title: 'Treino agendado.',
      message: `Você tem um treino agendado com ${schedule?.coach} para ${schedule?.date} das ${schedule?.time?.start} até ${schedule?.time?.end}.`,
      description: 'Clique no botão abaixo para confirmar ou cancelar o agendamento.',
      buttonText: 'Confirmar',
      buttonURL: process.env.FRONTEND_URL.concat('/athlete/schedule/').concat(token).concat(`?type=confirm&name=${username}`),
      secondaryButtonText: 'Cancelar',
      secondaryButtonURL: process.env.FRONTEND_URL.concat('/athlete/schedule/').concat(token).concat(`?type=cancel&name=${username}`),
      unsubscribeURL: process.env.FRONTEND_URL.concat('/unsubscribe/').concat(token).concat(`?email=${email}`), 
    },
    'update-schedule': {
      username,
      subject: 'Agendamento atualizado  - novo dia '.concat(schedule?.date ?? ''),
      title: 'Agendamento atualizado.',
      message: `Um treino que estava agendado foi atualizado para ${schedule?.date} das ${schedule?.time.start} até ${schedule?.time?.end}.`,
      description: 'Clique no botão abaixo para confirmar ou cancelar o agendamento.',
      buttonText: 'Confirmar agendamento',
      buttonURL: process.env.FRONTEND_URL.concat('/athlete/schedule/').concat(token).concat(`?type=confirm&name=${username}`),
      secondaryButtonText: 'Cancelar agendamento',
      secondaryButtonURL: process.env.FRONTEND_URL.concat('/athlete/schedule/').concat(token).concat(`?type=cancel&name=${username}`),
      unsubscribeURL: process.env.FRONTEND_URL.concat('/unsubscribe/').concat(token).concat(`?email=${email}`), 
    },
    'cancel-schedule': {
      username,
      subject: 'Agendamento cancelado - dia '.concat(schedule?.date ?? ''),
      title: 'Agendamento cancelado.',
      message: `O treino que estava agendado para ${schedule?.date} das ${schedule?.time?.start} até ${schedule?.time?.end} foi cancelado.`,
      description: 'Aproveite para descansar e em caso de dúvida consulte seu treinador.',
      unsubscribeURL: process.env.FRONTEND_URL.concat('/unsubscribe/').concat(token).concat(`?email=${email}`), 
    }
  }
  return templates[type]
}