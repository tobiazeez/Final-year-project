import { Inter } from '@next/font/google'
import { Button } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Button>Login</Button>
    </>
  )
}
