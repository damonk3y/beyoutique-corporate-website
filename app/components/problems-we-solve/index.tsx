'use client';

import { useEffect, useRef, useState } from 'react';
import { ChatHeader } from './chat-header';
import { ChatContainer } from './chat-container';
import { CONVO } from './conversation-data';
import type { ConversationLine } from './conversation-data';
import { SharedCTA } from '../shared-cta';

const getTypingDelay = (
  text: string,
  role: 'owner' | 'therapist',
  index: number,
): number => {
  const isEarlyMessage = index < 3;
  const speedMultiplier = isEarlyMessage ? 0.4 : 1;
  const baseDelay = role === 'owner' ? 800 : 1200;
  const charDelay = text.length * 50;
  const randomVariation = Math.random() * 600 - 200;
  const totalDelay =
    (baseDelay + charDelay + randomVariation) * speedMultiplier;
  return Math.max(300, totalDelay);
};

export const ProblemsWeSolve = () => {
  const [revealed, setRevealed] = useState<ConversationLine[]>([]);
  const [typingRole, setTypingRole] = useState<'owner' | 'therapist' | null>(
    null,
  );
  const convoIndex = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    convoIndex.current = 0;
    setRevealed([]);
    setTypingRole(null);

    const showNextMessage = () => {
      if (
        convoIndex.current >= CONVO.length ||
        !CONVO[convoIndex.current] ||
        typeof CONVO[convoIndex.current].role !== 'string' ||
        typeof CONVO[convoIndex.current].text !== 'string'
      ) {
        setTypingRole(null);
        return;
      }

      const currentMessage = CONVO[convoIndex.current];
      const role = currentMessage.role as 'owner' | 'therapist';
      setTypingRole(role);

      const delay = getTypingDelay(
        currentMessage.text,
        role,
        convoIndex.current,
      );

      timeoutRef.current = setTimeout(() => {
        if (
          convoIndex.current >= CONVO.length ||
          !CONVO[convoIndex.current] ||
          typeof CONVO[convoIndex.current].role !== 'string' ||
          typeof CONVO[convoIndex.current].text !== 'string'
        ) {
          setTypingRole(null);
          return;
        }

        const safeIndex = Math.min(convoIndex.current, CONVO.length - 1);
        const safeMessage = CONVO[safeIndex];

        setRevealed((prev) => [
          ...prev,
          {
            id: safeIndex,
            role: safeMessage.role as 'owner' | 'therapist',
            text: safeMessage.text,
          },
        ]);
        setTypingRole(null);
        convoIndex.current += 1;

        if (convoIndex.current < CONVO.length) {
          const pauseDelay = 200 + Math.random() * 300;
          timeoutRef.current = setTimeout(showNextMessage, pauseDelay);
        } else {
          setTypingRole(null);
        }
      }, delay);
    };

    showNextMessage();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isTyping = typingRole !== null;
  return (
    <section
      className='min-w-[50%] bg-neutral-50 py-4 md:py-8 lg:py-12 flex flex-col
        items-center min-h-[500px] justify-center grow'
    >
      <div
        className='w-full px-4 md:px-6 lg:px-8 flex-1 flex flex-col max-w-4xl
          md:max-w-5xl mx-auto justify-center items-center'
      >
        <div
          className='bg-white rounded-md border border-neutral-200 shadow-sm
            overflow-hidden w-full flex flex-col h-[500px]'
        >
          <ChatHeader />
          <ChatContainer
            messages={revealed}
            isTyping={isTyping}
            typingRole={typingRole}
          />
        </div>
        <div className='block md:hidden w-full'>
          <p
            className='mt-6 md:mt-4 mb-2 text-center text-base text-neutral-700
              max-w-2xl mx-auto font-sans'
          >
            Isto é para ti. Tu não tens de carregar este peso sozinha.{' '}
            <span className='font-semibold text-primary-700'>
              Nós ajudamos-te a libertar o que te bloqueia, para te focares no
              que realmente importa.
            </span>{' '}
            Vamos conversar?
          </p>

          <SharedCTA />
        </div>
      </div>
    </section>
  );
};
