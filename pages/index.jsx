import Head from 'next/head'
import Image from 'next/image'
import Cards from '../myComponents/Cards'
import SwipeButtons from '../myComponents/SwipeButtons'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev.gang | Tinder clone for developers</title>
        <meta name="description" content="This is a collaborative app for developers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cards></Cards>
      <SwipeButtons></SwipeButtons>
    </div>
  )
}
