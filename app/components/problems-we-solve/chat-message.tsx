import { motion } from 'framer-motion';
import { ChatAvatar } from './chat-avatar';
import type { ConversationLine } from './conversation-data';

type ChatMessageProps = {
  line: ConversationLine;
  index: number;
  previousRole?: 'owner' | 'therapist';
};

const ChatCtaBubble = () => (
  <a
    href='https://wa.me/351935173447'
    target='_blank'
    rel='noopener noreferrer'
    className='group relative flex flex-col items-start justify-center
      md:items-center px-6 py-4 gap-3 md:gap-4 hover:bg-white transition-colors
      duration-200 rounded-2xl border border-neutral-200 cursor-pointer
      shadow-md'
    style={{
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      boxShadow: '0 6px 36px 0 rgba(60,60,90,0.09)',
    }}
  >
    <span className='flex flex-col min-w-0 text-left flex-1 md:pr-0'>
      <span
        className='uppercase text-xs font-bold mb-1 text-neutral-900/90 flex
          items-center gap-1'
      >
        Queres começar a voar com a tua loja?{' '}
        <span className='text-lg'>🚀</span>
      </span>
      <span className='mt-0.5 text-xs text-neutral-700 font-normal leading-snug'>
        Deixa-nos mostrar-te como resolvemos estes problemas por ti e contar-te
        o que temos aqui guardado para ti.
      </span>
    </span>
    <span
      className='flex items-start justify-start gap-2 mt-3 md:mt-0 self-stretch
        md:self-auto w-full'
    >
      <span
        className='relative transition-all duration-200 bg-black font-bold
          rounded-lg px-5 py-2 md:py-2.5 text-white hover:bg-neutral-800
          uppercase text-xs tracking-widest border border-neutral-900
          group-hover:scale-105 shadow group-active:scale-100 outline-none
          focus-visible:ring-2 focus-visible:ring-primary-400 active:scale-98'
        tabIndex={0}
      >
        FALA CONNOSCO
      </span>
    </span>
    <span
      className='absolute -top-4 -right-4 md:-top-6 md:-right-6 opacity-40
        pointer-events-none select-none'
      aria-hidden='true'
      style={{
        filter: 'blur(0.5px)',
        fontSize: '2.5rem',
        lineHeight: 1,
        userSelect: 'none',
      }}
    >
      💬
    </span>
  </a>
);

export const ChatMessage = ({
  line,
  index,
  previousRole,
}: ChatMessageProps) => {
  const isOwner = line.role === 'owner';
  const name = isOwner ? 'Proprietária' : 'BEYOUTIQUE';
  const showAvatar = index === 0 || previousRole !== line.role;
  const isCta = line.text === '#cta';

  if (isCta) {
    return (
      <motion.div
        key={line.id}
        className={`flex items-end gap-2
          ${isOwner ? 'flex-row-reverse' : 'flex-row'}`}
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.28,
            ease: 'easeOut',
          },
        }}
      >
        <div
          className={`${isOwner ? 'ml-2' : 'mr-2'} ${
            showAvatar ? 'opacity-100' : 'opacity-0'
          } transition-opacity`}
        >
          <ChatAvatar
            role={line.role}
            name={name}
          />
        </div>
        <div
          className={`flex flex-col ${isOwner ? 'items-end' : 'items-start'}
            max-w-[75%] sm:max-w-[68%]`}
        >
          {showAvatar && (
            <span
              className={`text-xs text-neutral-500 mb-1 px-1 ${
                isOwner ? 'text-right' : 'text-left'
              }`}
              style={{ fontWeight: 500, letterSpacing: '0.02em' }}
            >
              {name}
            </span>
          )}
          <ChatCtaBubble />
          <span
            className={`text-xs text-neutral-400 mt-1 px-1 ${
              isOwner ? 'text-right' : 'text-left'
            }`}
            style={{
              fontFamily: 'sans-serif',
              letterSpacing: '0.01em',
            }}
          >
            agora
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={line.id}
      className={`flex items-end gap-2
        ${isOwner ? 'flex-row-reverse' : 'flex-row'}`}
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.28,
          ease: 'easeOut',
        },
      }}
    >
      <div
        className={`${isOwner ? 'ml-2' : 'mr-2'} ${
          showAvatar ? 'opacity-100' : 'opacity-0'
        } transition-opacity`}
      >
        <ChatAvatar
          role={line.role}
          name={name}
        />
      </div>
      <div
        className={`flex flex-col ${isOwner ? 'items-end' : 'items-start'}
          max-w-[75%] sm:max-w-[68%]`}
      >
        {showAvatar && (
          <span
            className={`text-xs text-neutral-500 mb-1 px-1 ${
              isOwner ? 'text-right' : 'text-left'
            }`}
            style={{ fontWeight: 500, letterSpacing: '0.02em' }}
          >
            {name}
          </span>
        )}
        <div
          className={`px-4 py-2 rounded-md ${
            isOwner
              ? 'bg-neutral-950 text-white border border-neutral-900'
              : 'bg-white text-neutral-900 border border-neutral-200'
            }`}
          style={{
            boxShadow: 'none',
          }}
        >
          <div className='flex items-start gap-2'>
            <span
              className={`text-sm sm:text-base leading-relaxed ${
                isOwner ? 'text-white' : 'text-neutral-900'
              }`}
              style={{
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}
            >
              {line.text}
            </span>
          </div>
        </div>
        <span
          className={`text-xs text-neutral-400 mt-1 px-1 ${
            isOwner ? 'text-right' : 'text-left'
          }`}
          style={{
            fontFamily: 'sans-serif',
            letterSpacing: '0.01em',
          }}
        >
          agora
        </span>
      </div>
    </motion.div>
  );
};
