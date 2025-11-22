'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChatMessage } from './chat-message';
import { TypingIndicator } from './typing-indicator';
import type { ConversationLine } from './conversation-data';

type ChatContainerProps = {
  messages: ConversationLine[];
  isTyping: boolean;
  typingRole: 'owner' | 'therapist' | null;
};

export const ChatContainer = ({
  messages,
  isTyping,
  typingRole,
}: ChatContainerProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const scrollToBottom = () => {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth',
        });
      }
    };

    // Use requestAnimationFrame to ensure DOM has updated
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToBottom();
      });
    });
  }, [messages.length, isTyping]);

  return (
    <div className='flex flex-col flex-1 min-h-0'>
      <div
        ref={scrollContainerRef}
        className='flex-1 overflow-y-auto px-4 py-6 bg-neutral-50'
      >
        <div className='flex flex-col gap-4'>
          <AnimatePresence>
            {messages.map((line, idx) => {
              const previousRole =
                idx > 0 ? messages[idx - 1]?.role : undefined;
              return (
                <ChatMessage
                  key={line.id}
                  line={line}
                  index={idx}
                  previousRole={previousRole}
                />
              );
            })}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>
      <TypingIndicator
        role={typingRole || 'therapist'}
        isActive={isTyping && typingRole !== null}
      />
    </div>
  );
};
