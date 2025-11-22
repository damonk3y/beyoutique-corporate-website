import { motion } from 'framer-motion';

type TypingIndicatorProps = {
  role: 'owner' | 'therapist';
  isActive?: boolean;
};

export const TypingIndicator = ({
  role,
  isActive = false,
}: TypingIndicatorProps) => {
  const isOwner = role === 'owner';
  const message = isOwner
    ? 'Proprietária está a escrever...'
    : 'BEYOUTQIUE está a escrever...';

  return (
    <div className='px-6 py-3 bg-white border-t border-neutral-200 min-h-[48px]'>
      {isActive && (
        <div
          className={`flex items-center gap-2 text-neutral-500 text-xs
          ${isOwner ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <div className='flex gap-1'>
            <motion.div
              className='w-1.5 h-1.5 bg-neutral-400 rounded-full'
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className='w-1.5 h-1.5 bg-neutral-400 rounded-full'
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className='w-1.5 h-1.5 bg-neutral-400 rounded-full'
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            />
          </div>
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};
