'use client';

const testimonials = [
  {
    name: 'Inês',
    text: `Enquanto fundadora da minha loja estava muito reticente em mudar todo o processo de trabalho e confesso que adiei bastante a mudança até porque inicialmente exige um pouco de trabalho extra para que possamos depois de usufruir de todas as funcionalidades que este sistema nos oferece. Preparei me para a adaptação mas foi tudo tão natural e intuitivo que não senti dificuldades e a verdadeira mudança vem depois, quando chegamos a meio do dia com as tarefas feitas que antes demorávamos o dobro do tempo. Reduziu erros de stock, enganos nas encomendas mas essencialmente deu-nos tempo para dedicar a outras tarefas! Aconselho muito!`,
    avatar: '/ines.jpg',
    whoami: 'Fundadora da Mega XL',
  },
  {
    name: 'Cristina',
    text: `Eu era a pessoa que menos acreditava nesta mudança por causa do medo e da insegurança que me causavam. Mas depois foi muito diferente. Ao olhar para trás vejo claramente que com as vantagens e o tempo que a Beyoutique nos trouxeram não quero voltar atrás. Não precisamos de tempo para nos adaptar, tudo funcionou e continua a melhorar.`,
    avatar: '/cristina.jpg',
    whoami: 'Fundadora da Mega XL',
  },
  {
    name: 'Raquel',
    text: `Sobre o Beyoutique, é só incrível, muito fácil de usar, intuitivo e prático, facilitou bastante o funcionamento do nosso trabalho diário. Atende exatamente ao que promete, design moderno e elegante e muito descontraído, combina com qualquer ambiente. Compacto, mas eficiente, bonito e funcional ao mesmo tempo. Apostem que não se vão arrepender 😊`,
    avatar: '/raquel.jpg',
    whoami: 'Mega XL',
  },
  {
    name: 'Catarina',
    text: `A partir do momento que a nossa equipa começou a utilizar a Beyoutique tudo se tornou mais simples e eficaz. Todo o processo desde o momento que a cliente encomenda a peça até ao momento de envio é feito de uma forma muito mais prática e rápida. Proporcionando nos um trabalho mais objetivo e bastante prático. A Beyoutique é super intuitiva e muito fácil de utilizar.`,
    avatar: '/cate.jpg',
    whoami: 'Mega XL',
  },
  {
    name: 'Sofia',
    text: `A criação desta aplicação teve um impacto extremamente positivo no meu dia a dia de trabalho. Com ela, conseguimos gerir o stock da loja de forma muito mais eficiente, evitando erros e perdas de tempo. Além disso, o processo de envio e tratamento das encomendas tornou-se muito mais ágil e organizado. Tudo está centralizado num só sistema, o que facilitou imenso a comunicação entre os diferentes setores e aumentou significativamente a produtividade da equipa.`,
    avatar: '/sofia.jpg',
    whoami: 'Mega XL',
  },
];

export const Testimonials = () => {
  return (
    <section className='w-full bg-neutral-50 flex flex-col items-center'>
      <div className='w-full px-4 md:px-6'>
        <div
          className='w-full h-px bg-neutral-200 my-4 md:my-6 lg:my-8 max-w-4xl
            mx-auto'
        />
      </div>

      <div className='w-full max-w-7xl px-4 md:px-6 lg:px-8'>
        <h2
          className='text-3xl md:text-3xl lg:text-4xl font-bold text-neutral-900
            mb-6 md:mb-10 lg:mb-16 text-center tracking-tight'
        >
          Como é trabalhar com a BEYOUTIQUE?
        </h2>

        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
            md:gap-5 lg:gap-6'
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className='group flex flex-col bg-white/60 backdrop-blur-sm
                rounded-xl border border-neutral-300 p-4 md:p-5
                hover:bg-white/80 hover:border-neutral-400 transition-all
                duration-200'
            >
              <svg
                className='w-5 h-5 text-primary-700/60 mb-3'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
              </svg>
              <p
                className='text-neutral-700 text-sm md:text-base leading-relaxed
                  mb-4 grow'
                style={{
                  fontFamily: "'Inter', 'Montserrat', Arial, sans-serif",
                  lineHeight: 1.65,
                  letterSpacing: '-0.008em',
                }}
              >
                {testimonial.text}
              </p>
              <div
                className='flex items-center gap-3 pt-3 border-t
                  border-neutral-300'
              >
                <img
                  src={testimonial.avatar}
                  alt={`Avatar de ${testimonial.name}`}
                  className='w-9 h-9 rounded-full object-cover shrink-0'
                  loading='lazy'
                />
                <div className='flex flex-col min-w-0'>
                  <span
                    className='font-semibold text-neutral-900 text-sm truncate'
                  >
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
