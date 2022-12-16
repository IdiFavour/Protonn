import Head from 'next/head'
import Header from '../components/Header';
import Quote from '../components/Quote';
import Bullet from '../components/Bullet';
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
      
      <Header/>
      <Quote/>
      <Bullet/>
      
    </>
  )
}

