/**
 * Conversation data: agora mais pessoal, num tom de amigos a conversar.
 * Cada entrada tem "role" ('owner' ou 'therapist') e "text", emojis incluídos no texto.
 */
export const CONVO = [
  {
    role: 'owner',
    text: 'Olá... nem sei por onde começar. 🙄😩',
  },
  {
    role: 'therapist',
    text: 'Conta-nos tudo, o que é que se está a passar aí desse lado? 😅',
  },
  {
    role: 'owner',
    text: 'Olha, começo o dia a tentar perceber o stock, e do nada aparecem mensagens por todo o lado — Insta, WhatsApp, até o site! 🫠',
  },
  {
    role: 'owner',
    text: 'E claro, perco encomendas porque só vejo algumas notificações tarde demais… 😤',
  },
  {
    role: 'therapist',
    text: 'Acredita, nós entendemos! É mesmo de loucos gerir isso tudo. Já pensaste em ter tudo num só sítio e organizar melhor? 💬',
  },
  {
    role: 'owner',
    text: 'Já tentei! Mas as apps não se entendem, passo a vida a saltar de uma para outra e juro que tenho pesadelos a pensar se falhei alguém. 🤯',
  },
  {
    role: 'therapist',
    text: 'Ahah, já passamos por isso! E sobre as faturas? Também dão cabo de ti, não?',
  },
  {
    role: 'owner',
    text: 'Não imaginas! Faço tudo à mão, sempre a correr e claro… às vezes esqueço-me de coisas no meio da confusão. 😰',
  },
  {
    role: 'therapist',
    text: 'Nós já resolvemos isso! Faturas, stocks, encomendas, envios, pagamentos... tudo de uma vez só, sem stress. 😊',
  },
  {
    role: 'owner',
    text: 'Só a ideia de não fazer tudo manualmente já me sinto mais leve! 🙏',
  },
  {
    role: 'therapist',
    text: 'Queres ver a nossa abordagem? Jurooooo que é mais fácil do que parece. 😅',
  },
  {
    role: 'owner',
    text: 'Por favor! Preciso mesmo de respirar um bocadinho — isto anda demais para mim. 🥲',
  },
  {
    role: 'therapist',
    text: 'Top! Vamos marcar uma demo ou preferes que já te mande aqui uns truques rápidos por mensagem? 📅',
  },
  {
    role: 'therapist',
    text: '#cta',
  },
];

export type ConversationLine = {
  id?: number;
  role: 'owner' | 'therapist';
  text: string;
};
