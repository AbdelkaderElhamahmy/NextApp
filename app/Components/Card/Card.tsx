"use client";
import Image from 'next/image'
import styles from './Card.module.css';
import Link from 'next/link';
export default function Card () {
    return(
        <div className={styles.Card}>
            <div className={styles.CardImage}> 
                <Image src="/Shield.png" width={200} height={200} alt={''}/>
            </div>
            <div > 
                <div className={styles.CardTitle}><Link href={"/Plates"} >Decor Plate</Link></div>
                <h3 className={styles.CardCurrency}> $ 65.00 <span>USD</span></h3>
            </div>
        </div>
    );
};