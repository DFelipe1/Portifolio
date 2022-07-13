import styles from './styles.module.css'

export function About() {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Sobre mim</span>

            <div className={styles.description}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime odit repellendus explicabo ducimus placeat sunt, velit a tempora sapiente voluptatibus enim distinctio ab, deserunt eaque quod nobis consectetur voluptatum.</p>
            </div>
        </div>
    )
}