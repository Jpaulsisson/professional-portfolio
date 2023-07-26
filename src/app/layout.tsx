import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({ 
  subsets: ['latin'],
  weight: ['100', '300']
})

export const metadata: Metadata = {
  title: 'Paul Sisson - Frontend Developer',
  description: 'A simple site to help you get to know me just a little bit better.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-primaryBg font-thin text-primaryFont flex flex-col items-center justify-center ${josefin.className}`}>
        {children}
        </body>
    </html>
  )
}
