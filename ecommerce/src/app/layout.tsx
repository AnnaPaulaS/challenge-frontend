import { Header } from '@/components/Header/header'
import './globals.css'
import { Saira } from 'next/font/google'
import { DefaultProviders } from '@/components/default/default-providers'

const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProviders>
          <Header/>
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}
