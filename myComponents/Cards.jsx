import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import styles from '../styles/Cards.module.css'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const Cards = () => {

    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db,'developers');
        const getDevs = onSnapshot(collectionRef, (snapshot) => {
            setDevelopers(snapshot.docs.map((doc) => doc.data()))
        })

    return getDevs;
    }, [])

  return (
    <div className={styles.card}>
        <div className={styles.card__devCard}>
            {developers?.map((dev) => (
                <TinderCard
                className={styles.swipe}
                key={dev.name}
                preventSwipe={['up','down']}
                >
                    <div className={styles.card__devCard__dev} 
                    style={{ backgroundImage: `url(${dev.url})` }}
                    >
                        <h3>{dev.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default Cards