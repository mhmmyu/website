import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>anuu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          anuu! 
          <Button>yu </Button>
        </h1>

       
        
      </main>

    </div>
  )
}

export default Home
