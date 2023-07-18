import Image from 'next/image'
import Email from '../../resources/email.svg'
import Phone from '../../resources/phone.svg'
import LinkedIn from '../../resources/linkedin.svg'
import GitHub from '../../resources/github.svg'
import CirclePainter  from '../../resources/circle-painter.jpeg'
import Blackjack  from '../../resources/blackjack.jpeg'
import AgeCalc  from '../../resources/age-calc.png'
import Counter  from '../../resources/counter.png'
import Retrofolio from '../../resources/retrofolio.png'
import Smite from '../../resources/smite-meta.png'
import Travel from '../../resources/travel.jpeg'

function Works() {

  const projects = [
    {
      name: 'Retrofolio',
      href: 'https://jpaulsisson.netlify.app/',
      img: Retrofolio,
      repo: 'https://github.com/Jpaulsisson/portfolio-site'
    },
    {
      name: 'Circle Painter',
      href: 'https://circle-paint.netlify.app/',
      img: CirclePainter,
      repo: 'https://github.com/Jpaulsisson/circle-generator-app',
    },
    {
      name: 'Blackjack',
      href: 'https://jpaulsisson-blackjack.netlify.app/',
      img: Blackjack,
      repo: 'https://github.com/Jpaulsisson/blackjack',
    },
    {
      name: 'Age Calculator',
      href: 'https://calculate-age-fem.netlify.app',
      img: AgeCalc,
      repo: 'https://github.com/Jpaulsisson/age-calculator-app',
    },
    {
      name: 'Customizable Counter',
      href: 'https://customizable-counter.netlify.app',
      img: Counter,
      repo: 'https://github.com/Jpaulsisson/wds-react-hooks-course/tree/main',
    },
  ]

  return (
    <main className='w-full max-w-cutoff flex flex-col items-center justify-center'>

      {/* nav bar */}

      <nav className='py-10 w-1/2 flex items-center justify-evenly gap-4 text-2xl '>
        <a href="/">home</a>
        <a className='text-accentOrange' href="/works">works</a>
        <a href="/contact">contact</a>
      </nav>

      {/* skills */}

      <section className='my-10'>
        <h2 className='text-3xl my-4'>proficiencies</h2>
        <ul className='grid grid-cols-2'>
          <li className='text-accentOrange'>HTML</li>
          <li className='text-accentBlue'>CSS</li>
          <li className='text-blue-400'>React</li>
          <li className='text-pink-500'>Sass</li>
          <li className='text-yellow-300'>Javascript</li>
          <li className='text-accentGreen'>Tailwind</li>
          <li className='text-accentOrange'>Git</li>
          <li className='text-accentBlue'>Typescript</li>
        </ul>
      </section>

      {/* recent projects */}

      <h2 className='text-3xl mb-2'>recent</h2>
      <section className='p-2 mt-4 mb-10 rounded-lg max-h-[30vh] w-3/5 overflow-x-hidden overflow-y-scroll flex flex-col justify-between items-center shadow-sm shadow-zinc-950  md:h-[40vh]'>
        {projects.map((project) => {
          return (
            <div key={project.name} className='flex flex-col items-center'>
              <h3 className='text-accentGreen text-xl text-center '>{project.name}</h3>
              <Image src={project.img} alt={project.name} />
              <div className='flex w-3/4 text-primaryFont justify-around mb-4 border-accentOrange border-solid border-b-2'>
                <a href={project.href}>see it</a>
                <a href={project.repo}>see code</a>
              </div>
            </div>
          )
        })}
      </section>

      {/* current projects */}

      <section className='mb-10 flex flex-col items-center justify-between'>
        <h2 className='text-3xl mb-10'>current</h2>
        <div className='w-full mb-3 relative flex items-center justify-center'>
        <Image className='w-3/5' src={Travel} alt='adventure begins / a van on a long road' />
        <h3 className='absolute w-3/5 text-accentGreen text-2xl font-light text-center backdrop-blur-sm'>Travel Planner</h3>
        </div>
        <div className='w-full mb-3 relative flex items-center justify-center'>
        <Image className='w-3/5' src={Smite} alt='pic of Smite by Hi-Rez' />
        <h3 className='absolute w-3/5 text-accentGreen text-2xl font-light text-center backdrop-blur-sm'>Smite Meta</h3>
        </div>
        <aside className='p-2 w-3/5 border-solid border-2 border-accentOrange rounded-lg text-sm'>Feel free to contact me about my current work if you&apos;d like to know more or collaborate.</aside>
      </section>


      {/* mini contact section */}

      <footer className='mb-10 w-1/2 flex justify-between'>
      <a className='' href='mailto: paulsissonsemail@gmail.com'>
        <Image src={Email} alt='envelope' width={30} />
      </a>
        <a className='' href='tel: 2055208659'>
        <Image src={Phone} alt='phone' width={30} />
        </a>
        <a className='' href='https://www.linkedin.com/in/jpaulsisson/' rel='noopener noreferrer' target='_blank'>
        <Image src={LinkedIn} alt='LinkedIn logo' width={30} />
        </a>
        <a href="https://github.com/Jpaulsisson">
        <Image src={GitHub} alt='GitHub logo' width={30} />
        </a>
      </footer>
    </main>
  )
}

export default Works
