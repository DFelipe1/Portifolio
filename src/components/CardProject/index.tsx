import { FolderSimple, GitFork, Star } from 'phosphor-react'
import styles from './styles.module.css'

export function CardProject() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <FolderSimple size={20}/>
                <span>Name projetc</span>
            </div>

            <p className={styles.description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi ea quas, sequi harum qui aut placeat possimus saepe temporibus?</p>

            <div className={styles.footer}>
                <div>
                    <span>
                        <Star size={20} />
                        100
                    </span>

                    <span>
                        <GitFork size={20} />
                        100
                    </span>
                </div>
                
                <span>
                    <div className={styles.circle}></div>

                    Javascript
                </span>
            </div>
        </div>
    )
}