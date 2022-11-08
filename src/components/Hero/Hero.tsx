import React from "react";
import styles from "./Hero.module.css"


export default function Hero(){
    const calllines = ["Fat Tony's Pizza Kitchen", "Hand Made, Always Fresh. Our Guaruntee."]
    const [counter, setCounter] = React.useState(0)

    React.useEffect(()=>{
       setInterval(()=>{
            setCounter(prev => {
                if(prev === calllines.length - 1){
                    return 0
                } else {
                    return prev + 1
                }
            })
        }, 5000)
    },[calllines.length])



    return (
    <section className={styles.hero}>
        <div className={styles['hero-overlay']}>
            <div className={styles['hero-overlay__center']}>
                <h1 className={styles['hero-title']} >
                    {calllines[counter]}
                </h1>
                <p>Call Ahead for Take Out</p>
                <a href="tel:4178609136">417.860.9136</a>
            </div>
        </div>    
    </section>)
}