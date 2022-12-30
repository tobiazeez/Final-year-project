import { Inter } from '@next/font/google'
import { Button } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Button>Welcome</Button>
      <h1>LOGIN PAGE</h1>
      <p>Kindly enter your details below</p>
    </>
  )
}
