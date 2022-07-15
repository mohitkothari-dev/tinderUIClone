import React from 'react'
import styles from '../styles/SwipeButtons.module.css'
import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

const SwipeButtons = () => {
  return (
    <div className={styles.swipeButtons}>
        <IconButton className={styles.swipeButtons__repeat}>
            <Replay fontSize='large'></Replay>
        </IconButton>
        <IconButton className={styles.swipeButtons__left}>
            <Close fontSize='large'></Close>
        </IconButton>
        <IconButton className={styles.swipeButtons__star}>
            <StarRate fontSize='large'></StarRate>
        </IconButton>
        <IconButton className={styles.swipeButtons__right}>
            <Favorite fontSize='large'></Favorite>
        </IconButton>
        <IconButton className={styles.swipeButtons__lightening}>
            <FlashOn fontSize='large'></FlashOn>
        </IconButton>
    </div>
  )
}

export default SwipeButtons