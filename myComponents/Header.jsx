import React from 'react'
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import { Forum, Person, ArrowBackIos } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {

  const router = useRouter();

  return (
    <div className={styles.header}> 
    <IconButton>
      {router.pathname == "/" ?
        <Person fontSize='large' className={styles.header__icon}></Person>
        :
        <Link href='/'>
        <ArrowBackIos fontSize='large' className={styles.header__icon}></ArrowBackIos>
        </Link>
      }
    </IconButton>
    <Link href='/'>
    <Image 
    className={styles.header__logo} src='/tinderlogo.png' alt='Logo' height={50} width={50}
    ></Image>
    </Link>
    <Link href='/chats'>
    <IconButton>
        <Forum fontSize='large' className={styles.header__icon}></Forum>
    </IconButton>
    </Link>
    </div>
  )
}

export default Header