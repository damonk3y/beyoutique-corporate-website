import { ArrowRight } from 'lucide-react';

export const SharedCTA = ({ className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <a
        href='https://wa.me/351935173447?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20vossa%20iniciativa%20para%20boutiques.'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block px-6 py-2 rounded-lg bg-black text-white
          font-semibold transition-colors hover:bg-neutral-900 shadow
          focus:outline-none focus:ring-2 focus:ring-neutral-400 border
          border-black uppercase'
      >
        Fala connosco agora{' '}
        <ArrowRight
          className='inline w-4 h-4'
          aria-hidden='true'
        />
      </a>
    </div>
  );
};
