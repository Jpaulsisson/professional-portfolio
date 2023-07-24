import Image from 'next/image'
import Hello from '../resources/hello-sign.png'
import Wifey from '../resources/wifey.jpg'
import Sistine from '../resources/sistine.jpg'
import Haircut from '../resources/haircut.jpg'
import Justin from '../resources/justin.jpg'
import Torii from '../resources/torii.jpg'
import Sis from '../resources/sis.jpg'
import Stonehenge from '../resources/stonehenge.jpg'
import KidOne from '../resources/kid-one.jpg'
import KidTwo from '../resources/kid-two.jpg'
import Bday from '../resources/muhbday.jpeg'
import Email from '../resources/email.svg'
import Phone from '../resources/phone.svg'
import LinkedIn from '../resources/linkedin.svg'
import GitHub from '../resources/github.svg'


export default function Home() {
  return (
    <main className='w-full max-w-cutoff flex flex-col items-center justify-center'>

      {/* nav bar */}

      <nav className='py-10 w-1/2 flex items-center justify-evenly gap-4 text-2xl md:text-4xl'>
        <a className='text-accentOrange' href="/">home</a>
        <a href="/works">works</a>
        <a href="/contact">contact</a>
      </nav>

      {/* intro text */}

      <section className='my-10 flex flex-col items-center justify-center gap-4 text-center'>
        <h1 className='flex items-center justify-center gap-2 tracking-wide text-3xl md:text-5xl'><Image src={Hello} alt='Hello sign' width={75}/> I&apos;m Paul,</h1>
        <p className='w-3/5 text-lg tracking-wide md:text-2xl'>I&apos;m a growing frontend developer, a father & a husband, and I&apos;m in love with life. Let me save a few thousand words <sub className='text-accentGreen text-2xl md:text-4xl'>&#10549;</sub></p>
      </section>

      {/* photo grid */}

      <section className='w-4/5 mb-10 grid items-center justify-center gap-3'>
        <div className="rounded-md col-start-1 col-span-3 row-start-1 row-span-2">
          <Image className='rounded-xl' src={Wifey} alt='my hot wife' />
        </div>
        <div className='rounded-md col-start-4 col-span-1 row-start-1 row-span-1'>
          <Image className='rounded-xl' src={Sistine} alt='me at the Sistine Chapel' />
        </div>
        <div className='rounded-md col-start-4 col-span-1 row-start-2 row-span-1'>
          <Image className='rounded-xl' src={Haircut} alt='me cutting my nephews hair' />
        </div>
        <div className='rounded-md col-start-1 col-span-1 row-start-3 row-span-1'>
          <Image className='rounded-xl' src={Justin} alt='my cousin and I as kids' />
        </div>
        <div className='rounded-md col-start-1 col-span-1 row-start-4 row-span-1'>
          <Image className='rounded-xl' src={Torii} alt='a torii gate' />
        </div>
        <div className='rounded-md col-start-2 col-span-3 row-start-3 row-span-2'>
          <Image className='rounded-xl' src={Sis} alt='my sis and I as kids' />
        </div>
        <div className='rounded-md col-start-1 col-span-1 row-start-5 row-span-1'>
          <Image className='rounded-xl' src={Stonehenge} alt='me being unimpressed by Stonehenge' />
        </div>
        <div className='rounded-md col-start-2 col-span-1 row-start-5 row-span-1'>
          <Image className='rounded-xl' src={KidOne} alt='a pic I drew of my son' />
        </div>
        <div className='rounded-md col-start-3 col-span-1 row-start-5 row-span-1'>
          <Image className='rounded-xl' src={KidTwo} alt='a pic I drew of my daughter' />
        </div>
        <div className='rounded-md col-start-4 col-span-1 row-start-5 row-span-1'>
          <Image className='rounded-xl' src={Bday} alt='me and my little man on my birthday' />
        </div>
      </section>

      {/* more about me */}

      <section className='w-3/4 my-10'>
        <p className='p-4 text-lg text-center border-b-[1px] border-solid border-accentOrange md:text-2xl'>
          The vast majority of my time goes to one of these people above or to code. I fell in love with coding the first time I made a <a className='text-accentGreen font-light underline' href='https://github.com/Jpaulsisson/sudoku/tree/main'>Sudoku algorithm</a> with javascript. The sense of accomplishment and pride when it worked, was almost overwhelming. Solving problems has always been a passion. Even my first grade teacher still calls me Paul <em>&quot;I have a better idea&quot;</em> Sisson. What can I say? I just <b className='text-accentOrange '>love</b> figuring out how things work and finding ways to make them better.
        </p>
        <p className='p-4 text-center md:text-xl'>
          When the algorithms are put away, I&apos;m all about people. My family and friends, obviously, but also strangers. Nothing has ever enriched my life more than taking in the experiences of other people. Learning how they got to where they are today. Letting their stories be meaningful to me helps me connect with others in a way that gives me a deep love for them and their life, but it also teaches me how to be better than I was before.
        </p>
      </section>

      {/* mini contact section */}

      <footer className='mb-10 w-1/2 flex justify-between'>
      <a href='mailto: paulsissonsemail@gmail.com'>
        <Image className='w-10 md:w-16' src={Email} alt='envelope'/>
      </a>
        <a href='tel: 2055208659'>
        <Image className='w-10 md:w-16' src={Phone} alt='phone'/>
        </a>
        <a href='https://www.linkedin.com/in/jpaulsisson/' rel='noopener noreferrer' target='_blank'>
        <Image className='w-10 md:w-16' src={LinkedIn} alt='LinkedIn logo'/>
        </a>
        <a href="https://github.com/Jpaulsisson" rel='noopener noreferrer' target='_blank'>
        <Image className='w-10 md:w-16' src={GitHub} alt='GitHub logo'/>
        </a>
      </footer>
    </main>
  );
}

// Icons by <a href='https://iconpacks.net/?utm_source=link-attribution&utm_content=142'>Iconpacks</a>