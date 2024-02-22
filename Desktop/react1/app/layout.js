import  Mycontext  from '@/Helper/Context'
import './globals.css'


export const metadata = {
  title: 'Subham Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body suppressHydrationWarning >
      <Mycontext>
        {children}
      </Mycontext>
     </body>
    </html>
  )
}