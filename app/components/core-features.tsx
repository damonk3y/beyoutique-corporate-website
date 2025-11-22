'use client';

import { motion } from 'framer-motion';
import { Package } from './animated-icons/package';
import { Money } from './animated-icons/money';
import { Delivery } from './animated-icons/delivery';
import { Invoicing } from './animated-icons/invoicing';
import { Metrics } from './animated-icons/metrics';
import { Process } from './animated-icons/process';

const features = [
  {
    title: 'Stock Centralizado',
    desc: 'Vende em todas as plataformas ao mesmo tempo. Esquece a dor de cabeça de dividir inventário e confusões com encomendas. Tudo, sempre, sincronizado e sem erros.',
    icon: <Package />,
  },
  {
    title: 'Pagamentos Automáticos',
    desc: 'Recebe e confirma pagamentos de forma simples, segura, rápida e automática – com todos os métodos mais populares prontos utilizares.',
    icon: <Money />,
  },
  {
    title: 'Entregas Simplificadas',
    desc: 'Deixa de te preocupar com os envios. Vamos buscar as tuas encomendas e entregá-las à porta das tuas clientes. Tanto elas como tu podem acompanhar tudo em tempo real e usufruir de apoio personalizado quando necessário.',
    icon: <Delivery />,
  },
  {
    title: 'Faturação Automática',
    desc: 'Faturação feita por ti? Nunca mais! Todas as tuas vendas tratadas automaticamente – a tua contabilidade agradece.',
    icon: <Invoicing />,
  },
  {
    title: 'Métricas em Tempo Real',
    desc: 'Acompanha o desempenho do teu negócio em tempo real. Tem acesso imediato às métricas essenciais para tomares decisões informadas e rápidas.',
    icon: <Metrics />,
  },
  {
    title: 'Maximiza a Produtividade',
    desc: 'Diz adeus aos processos manuais e ganha tempo! Deixa que a automação trate das tarefas repetitivas e foca-te no que realmente importa: fazer teu negócio crescer e inovar com tranquilidade.',
    icon: <Process />,
  },
];

function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="group flex flex-col w-full min-h-[140px] p-6 sm:p-7 bg-white
        rounded-3xl border border-neutral-100 transition duration-200
        hover:scale-[1.015] hover:ring-2 hover:-translate-y-1 relative
        before:content-[''] before:absolute before:inset-x-6 before:top-0
        before:h-1 before:rounded-full before:scale-0 before:opacity-0
        before:transition before:duration-300 before:from-primary-400
        before:to-blue-400 group-hover:before:scale-100
        group-hover:before:opacity-80 before:-z-10 shadow-sm"
    >
      <div className='flex flex-col items-center gap-3'>
        <motion.div
          className="flex items-center justify-center w-20 h-20 rounded-xl
            from-white to-neutral-100 border-4 border-transparent relative z-10
            before:content-[''] before:absolute before:inset-[-4px]
            before:rounded-[18px] before:from-primary-200 before:to-blue-100
            before:opacity-60 before:-z-10"
          tabIndex={0}
          aria-label={`Ícone para ${title}`}
          style={{ background: '#f4f4f5', color: '#9CA3AF' }}
        >
          {icon}
        </motion.div>
        <span
          className='text-xl font-extrabold text-neutral-800 text-center'
          style={{
            fontFamily:
              "'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif",
            letterSpacing: '-.007em',
          }}
        >
          {title}
        </span>
      </div>
      <span
        className='text-base text-neutral-500 font-medium mt-4 text-center'
        style={{
          fontFamily:
            "'Inter', 'Montserrat', 'Helvetica Neue', Arial, sans-serif",
          letterSpacing: '-.008em',
        }}
      >
        {desc}
      </span>
    </div>
  );
}

export const CoreFeatures = () => (
  <section
    className='px-4 w-full bg-neutral-50 max-w-full overflow-hidden flex
      flex-col items-center justify-center relative'
  >
    <div className='w-full px-4'>
      <div className='w-full h-px bg-neutral-200 my-4 max-w-4xl mx-auto' />
    </div>
    <div
      className='w-full max-w-6xl flex flex-col items-center justify-center px-0
        sm:px-2'
    >
      <div
        className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4
          md:gap-5 lg:gap-6 w-full py-3 md:py-4 lg:py-6'
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            desc={feature.desc}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  </section>
);
