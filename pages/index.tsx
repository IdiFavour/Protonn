import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Protonn</title>
        <meta name="description" content="Landing page for Protonn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
      </div>
      
    </>
  )
}

