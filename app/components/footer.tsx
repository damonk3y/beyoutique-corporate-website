import { Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer
      className='w-full bg-neutral-50 px-4 py-8 border-t border-neutral-200'
    >
      <div className='flex flex-col items-center text-center gap-2'>
        <p
          className='text-xs text-neutral-800 font-sans leading-relaxed
            max-w-xl'
        >
          A <span className='font-semibold text-primary-700'>BEYOUTIQUE</span>{' '}
          nasce pelas mãos de uma equipa portuguesa apaixonada por inovação.
          Queremos revolucionar o mundo da moda e dar força às boutiques
          modernas, criando uma experiência online única – para quem vende e
          para quem compra.
        </p>
        <span
          className='text-sm text-neutral-600 font-medium flex flex-col
            sm:flex-row items-center gap-0.5'
        >
          <a
            href='mailto:inbox@beyoutique.space'
            className='inline-flex items-center gap-1 underline text-primary-700
              hover:text-primary-900 transition-colors'
          >
            <Mail
              className='w-4 h-4 mr-1'
              aria-hidden='true'
            />
            inbox@beyoutique.space
          </a>
          <span className='hidden sm:inline mx-2 text-neutral-400'>|</span>
          <a
            href='https://wa.me/351935173447'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 underline text-primary-700
              hover:text-primary-900 transition-colors'
          >
            <Phone
              className='w-4 h-4 mr-1'
              aria-hidden='true'
            />
            935173447
          </a>
        </span>
        <span className='text-xs text-neutral-500 mt-2'>
          &copy; {new Date().getFullYear()} Macaco Trapaceiro LDA
        </span>
      </div>
    </footer>
  );
};
