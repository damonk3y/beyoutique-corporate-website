import {
  Sparkles,
  Users,
  ShoppingCart,
  Handshake,
  BadgeCheck,
  Store,
} from 'lucide-react';
import { SharedCTA } from './shared-cta';

export const WhatWeDo = () => {
  const whatWeLookFor = [
    {
      label: 'Queres fazer crescer a tua loja?',
      icon: (
        <Store
          className='w-6 h-6 lg:w-7 lg:h-7 text-primary-700'
          aria-hidden='true'
        />
      ),
    },
    {
      label: 'Tens vontade de inovar?',
      icon: (
        <Sparkles
          className='w-6 h-6 lg:w-7 lg:h-7 text-primary-700'
          aria-hidden='true'
        />
      ),
    },
    {
      label: 'És ativa nas redes sociais?',
      icon: (
        <Users
          className='w-6 h-6 lg:w-7 lg:h-7 text-primary-700'
          aria-hidden='true'
        />
      ),
    },
    {
      label: 'Queres vender mais online?',
      icon: (
        <ShoppingCart
          className='w-6 h-6 lg:w-7 lg:h-7 text-primary-700'
          aria-hidden='true'
        />
      ),
    },
    {
      label: 'Estás aberta a colaborar?',
      icon: (
        <Handshake
          className='w-6 h-6 lg:w-7 lg:h-7 text-primary-700'
          aria-hidden='true'
        />
      ),
    },
    {
      label: 'Tens produtos com qualidade?',
      icon: (
        <BadgeCheck
          className='w-6 h-6 lg:w-7 lg:h-7 text-primary-700'
          aria-hidden='true'
        />
      ),
    },
  ];

  return (
    <section
      className='w-full bg-neutral-50 px-4 md:px-10 lg:px-12 flex flex-col
        items-center justify-center min-h-[50vh] py-10 md:py-16 lg:py-16'
    >
      <div className='w-full max-w-6xl mx-auto'>
        <div className='w-full h-px bg-neutral-200 my-6 md:my-10 lg:my-10' />
        <h2
          className='text-3xl lg:text-3xl font-bold text-neutral-900 mb-6
            md:mb-8 lg:mb-6 text-left lg:text-center'
        >
          Trabalhamos sempre do teu lado.
        </h2>
        <p
          className='text-neutral-800 text-base md:text-lg lg:text-base
            text-left lg:text-center leading-relaxed max-w-3xl mx-auto mb-8'
        >
          Procuramos{' '}
          <span className='font-semibold text-primary-700'>
            boutiques modernas
          </span>{' '}
          e inovadoras. Que querem crescer no digital e valorizar a sua marca.
          Junta-te a nós para teres acesso a tecnologia de topo e impulsionar o
          teu negócio!
        </p>
        <div
          className='w-full max-w-full rounded-sm my-8 flex flex-col
            items-center'
        >
          <ul
            className='text-neutral-800 text-base lg:text-base w-full max-w-5xl
              m-0 p-0 list-none grid gap-y-2 md:grid-cols-2 md:gap-x-8
              md:gap-y-3 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-4 font-medium'
          >
            {whatWeLookFor.map((item) => (
              <li
                key={item.label}
                className='flex items-center gap-4 py-2 lg:py-3 px-2 lg:px-3
                  rounded-lg hover:bg-neutral-100 transition-colors'
              >
                <span>{item.icon}</span>
                <span className=''>{item.label}</span>
              </li>
            ))}
          </ul>
          <div className='mt-10 lg:mt-8 w-full flex items-center justify-center'>
            <span
              className='text-sm md:text-base lg:text-base text-neutral-700
                font-sans px-4 lg:px-5 py-3 lg:py-3 bg-white bg-opacity-90
                rounded-xl shadow-md border border-neutral-200 text-center
                max-w-2xl'
            >
              És uma{' '}
              <span className='font-semibold text-primary-700'>
                empreendedora
              </span>{' '}
              apaixonada pelo que faz? Então queremos-te na nossa comunidade
              exclusiva!
            </span>
          </div>
          <div className='mt-8 lg:mt-10 flex justify-center'>
            <SharedCTA />
          </div>
        </div>
      </div>
    </section>
  );
};
