import Image from 'next/image'
import Email from '../../resources/email.svg'
import Phone from '../../resources/phone.svg'
import LinkedIn from '../../resources/linkedin.svg'
import GitHub from '../../resources/github.svg'

function Contact() {
  return (
    <main className='w-full max-w-cutoff flex flex-col items-center justify-center'>

      {/* nav bar */}

      <nav className='py-10 w-1/2 flex items-center justify-evenly gap-4 text-2xl'>
        <a href="/">home</a>
        <a  href="/works">works</a>
        <a className='text-accentOrange' href="/contact">contact</a>
      </nav>
      
      {/* contact info */}

      <section className='flex flex-col gap-8 mt-2 md:mt-6 md:gap-12'>
      <a className='' href='mailto: paulsissonsemail@gmail.com'>
        <Image src={Email} alt='envelope' width={100} />
      </a>
        <a className='' href='tel: 2055208659'>
        <Image src={Phone} alt='phone' width={100} />
        </a>
        <a className='' href='https://www.linkedin.com/in/jpaulsisson/' rel='noopener noreferrer' target='_blank'>
        <Image src={LinkedIn} alt='LinkedIn logo' width={100} />
        </a>
        <a href="https://github.com/Jpaulsisson">
        <Image src={GitHub} alt='GitHub logo' width={100} />
        </a>
      </section>
    </main>
  )
}

export default Contact
