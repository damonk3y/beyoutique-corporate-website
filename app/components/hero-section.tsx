'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SharedCTA } from './shared-cta';

const glowTextGrad =
  'bg-gradient-to-r from-neutral-400 via-neutral-700 to-neutral-950';

const subtleGlowUnderline = {
  initial: { opacity: 0, scaleX: 0.92, filter: 'blur(2px)' },
  animate: {
    opacity: 0.75,
    scaleX: [0.95, 1.05, 1],
    filter: [
      'blur(2.6px) brightness(1.15)',
      'blur(6px) brightness(1.13)',
      'blur(4px) brightness(1.11)',
      'blur(2.6px) brightness(1.13)',
    ],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
      filter: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'linear',
      },
      scaleX: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      },
    },
  },
};

const textAnimation = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.84, ease: 'easeOut' as const },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <div
      className='w-full bg-neutral-50 flex flex-col items-center justify-center'
    >
      <div
        className='fixed left-0 top-0 z-20 w-full bg-neutral-50 px-6 py-4
          border-b border-neutral-200 flex items-center justify-center'
      >
        <span
          className='text-xl md:text-2xl text-neutral-900 tracking-tight
            uppercase font-sans text-center w-full'
          style={{ letterSpacing: '.04em' }}
        >
          beyoutique
        </span>
      </div>
      <section
        className='mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20 pt-28
          items-center justify-center max-w-4xl md:px-6 md:pb-12 md:pt-32
          lg:px-8 lg:pb-16 lg:pt-40'
      >
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='relative mb-3 flex flex-col items-center w-full'>
            <motion.h1
              className='w-full font-sans font-semibold text-4xl
                text-neutral-900 text-center uppercase leading-tight'
              variants={textAnimation}
              initial='initial'
              animate='animate'
            >
              <span
                className='block text-3xl md:text-4xl text-neutral-600
                  tracking-wider text-center'
              >
                Queres
              </span>
              <span
                className='block text-4xl font-extrabold text-primary-700 mb-1
                  text-center'
              >
                transformar
              </span>
              <span className='block text-3xl text-neutral-600 text-center'>
                o teu fluxo de <br />
                <span
                  className='text-6xl md:text-6xl font-extrabold
                    text-neutral-950'
                >
                  ONLINE
                </span>
                <br />
                <span className='opacity-0'>?</span>
                <span
                  className='text-6xl md:text-6xl font-extrabold
                    text-neutral-950'
                >
                  SHOPPING
                </span>
                ?
              </span>
            </motion.h1>
            <motion.div
              className='mt-2 w-full flex items-center justify-center'
              style={{ height: '6px', position: 'relative' }}
              // @ts-ignore
              variants={subtleGlowUnderline}
              initial='initial'
              animate='animate'
              aria-hidden='true'
            >
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-[65%] h-[6px]
                  rounded-full ${glowTextGrad} bg-clip-padding opacity-80`}
                style={{
                  filter: 'blur(6px) brightness(1.11)',
                  boxShadow: '0 1px 12px 2px #e5e5e5cc, 0 0 28px 0 #4443',
                }}
              ></div>
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-[47%] h-[2.5px]
                  rounded-full ${glowTextGrad} bg-clip-padding opacity-75`}
                style={{
                  filter: 'blur(1.2px) brightness(.97)',
                }}
              ></div>
            </motion.div>
          </div>
          <motion.div
            className='flex flex-col items-center justify-center mb-14
              leading-relaxed font-sans font-sm text-neutral-700 w-full'
            style={{
              fontFamily: 'sans-serif',
              fontSize: 'clamp(20px, 2vw, 35px)',
              lineHeight: 1.3,
              fontWeight: 500,
              letterSpacing: '-.01em',
              textShadow: '0 0 6px #bdbdbd44, 0 0 2px #e5e5e533',
            }}
            variants={textAnimation}
            initial='initial'
            animate='animate'
            transition={{ delay: 0.22, duration: 1.1 }}
          >
            <ul
              className='flex flex-col w-full items-center justify-center
                gap-y-1 drop-shadow-sm text-center list-none p-0 m-0 mt-3'
            >
              <li className='flex items-center justify-center'>Mais vendas</li>
              <li className='flex items-center justify-center'>
                Mais tempo útil
              </li>
              <li className='flex items-center justify-center'>
                Menos problemas
              </li>
            </ul>
            <div className='mt-6 w-full flex justify-center'>
              {/* Show the CTA always on mobile, only show on desktop (md+) here if desired */}
              <SharedCTA className='block md:hidden' />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
