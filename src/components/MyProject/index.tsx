import { CardProject } from '../CardProject'
import styles from './styles.module.css'

export function MyProject() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <strong className={styles.title}>My Project</strong>
                <a href="#" className={styles.button}>
                    Veja mais
                </a>
            </div>

            <div className={styles.content}>
                <CardProject/>
                <CardProject/>
            </div>
        </div>
    )
}