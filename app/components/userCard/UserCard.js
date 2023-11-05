import styles from './userCard.module.scss';
import Image from 'next/image';
import { FaBirthdayCake, FaDoorOpen } from 'react-icons/fa'

export default function UserCard(props) {
    return (
        <section className={styles.card}>
            <div className={styles.card_content}>
                <div className={styles.card_content_left}>
                    <h1 className={styles.card_content_left_username}>
                        {props.user}
                    </h1>
                    <Image className={styles.card_content_left_image}
                        src="/profile-avatar.svg"
                        alt={"Foto de perfil de " + props.user}
                        width={440}
                        height={220}
                        priority
                    />
                </div>
                <div className={styles.card_content_right}>
                    <p className={styles.card_content_right_description}>
                        {props.description}
                    </p>
                    <div className={styles.card_content_right_dates}>
                        <p className={styles.card_content_right_dates_birthday}>
                            <FaBirthdayCake fill="black" /> {props.birthday}
                        </p>
                        <p className={styles.card_content_right_dates_joined}>
                            <FaDoorOpen fill="black" /> {props.joinDate}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}