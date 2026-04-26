import styles from "./page.module.css"
export default function LearnPage(){
    return(
        <div className={styles.main_container_1}>
            <div className={styles.container_1}>
                <img src="/palette.svg" alt="Design" />
                <p>Design</p>
            </div>
            <div className={styles.container_2}>
                <p>Figma</p>
                <p>8 Hours</p>
            </div>
        </div>
    )
}