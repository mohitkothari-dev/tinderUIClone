import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Chats.module.css'

const Chats = () => {
  return (
    <div>
        <Head>
        <title>Dev.gang | Chats</title>
        <meta name="description" content="All your chats are listed here" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.chats}>
          Hello
        </div>
    </div>
  )
}

export default Chats