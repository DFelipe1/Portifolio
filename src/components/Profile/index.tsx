import { EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo, MapPin, Suitcase } from 'phosphor-react';

import styles from './style.module.css';

export function Profile() {
    return(
        <div className={styles.container}>

            <div className={styles.card}>
                <div className={styles.image}>
                    <img src="https://github.com/DFelipe1.png" alt="" />
                </div>
                <div className={styles.profile}>
                    <strong className={styles.title}>David Felipe</strong>
                    <span className={styles.subtitle}>full stack developer</span>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.infoContent}>
                    <a href="#" className={styles.links}>
                        <MapPin size={24}/>
                        Brasil
                    </a>
                    <a href="#" className={styles.links}>
                        <Suitcase size={24}/>
                        Rocketseat
                    </a>
                    <a href="#" className={styles.links}>
                        <GithubLogo size={24}/>
                        DFelipe1
                    </a>
                    <a href="#" className={styles.links}>
                        <LinkedinLogo size={24}/>
                        Lipedev
                    </a>
                    <a href="#" className={styles.links}>
                        <InstagramLogo size={24}/>
                        birobriro
                    </a>
                    <a href="#" className={styles.links}>
                        <EnvelopeSimple size={24}/>
                        felipe30.10@outlook.com
                    </a>

                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.content}>
                    <strong className={styles.title}>Tecnologia</strong>
                    <div className={styles.techGroup}>
                        <span className={styles.tech}>HTML</span>
                        <span className={styles.tech}>CSS</span>
                        <span className={styles.tech}>Javascript</span>
                        <span className={styles.tech}>ReactJS</span>
                        <span className={styles.tech}>React Native</span>
                        <span className={styles.tech}>NodeJS</span>
                        <span className={styles.tech}>GIT</span>
                    </div>
                    
                </div>
            </div> 

            <div className={styles.card}>
                <div className={styles.content}>
                        <strong className={styles.title}>Educação</strong>
                        <ul className={styles.educations}>
                            <div className={styles.education}>
                                <li className={styles.subtitle}>Rocketseat</li>
                                <span className={styles.duraction}>2019 - 2019</span>
                                <span className={styles.course}>Go stack</span>
                            </div>
                            <div className={styles.education}>
                                <li className={styles.subtitle}>Rocketseat</li>
                                <span className={styles.duraction}>2019 - 2019</span>
                                <span className={styles.course}>Go stack</span>
                            </div>
                            <div className={styles.education}>
                                <li className={styles.subtitle}>Rocketseat</li>
                                <span className={styles.duraction}>2019 - 2019</span>
                                <span className={styles.course}>Go stack</span>
                            </div>
                        </ul>
                        
                    </div>
                </div>
        </div>
    )
}