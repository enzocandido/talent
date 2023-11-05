'use client'

import Link from 'next/link'
import { BiLike, BiDislike } from 'react-icons/bi'
import styles from './video.module.scss'

export default function Video(props) {
    return (
        <div className={styles.videos}>
            <div className={styles.videos_content}>

                <p className={styles.videos_content_name}>
                    {props.videoName}
                </p>

                <iframe className={styles.videos_content_url}
                    width="560" height="315"
                    src={props.videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />

                <p className={styles.videos_content_description}>
                    {props.videoDescription}
                </p>

                <div className={styles.videos_content_links}>
                    <Link className={styles.videos_content_links_category}
                        href={`/category/${props.videoCategory}`}>
                        <p>
                            {props.videoCategory}
                        </p>
                    </Link>
                    <Link className={styles.videos_content_links_author}
                        href={`/profile/${props.videoAuthor}`}>
                        <p>
                            {props.videoAuthor}
                        </p>
                    </Link>
                </div>

                <p className={styles.videos_content_dateupload}>
                    {props.videoDateUpload}
                </p>

                <ul className={styles.videos_content_buttons}>
                    <li>
                        <button onClick={() => { console.log(`${props.videoId} liked`) }}>
                            <BiLike />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => { console.log(`${props.videoId} dislike`) }}>
                            <BiDislike />
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    )
}