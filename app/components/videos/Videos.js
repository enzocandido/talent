import styles from "./videos.module.scss";
import Video from "../video/Video";

export default async function Videos() {

  const videos = [];
  for (let i = 1; i <= 6; i++) {
    videos.push(
      <Video
        key={i}
        videoId={i}
        videoName="Lorem Ipsum"
        videoUrl="https://www.youtube.com/embed/UfNMlhu3L4I"
        videoDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sem at nibh aliquet ultrices."
        videoCategory="Categoria"
        videoAuthor="Autor"
        videoDateUpload="01/01/2021"
      />
    );
  }

  return (
    <section className={styles.videos}>
      <div className={styles.videos_content}>
        <p className={styles.videos_content_text}>
          <span className={styles.videos_content_text_primary}>TALENTOS</span> RECENTES
        </p>
        <div className={styles.videos_content_videos}>

          {/* 

          loop for seach videos in database

          {latestVideos.map(singleVideo => {
            return (
              <Video
                key={singleVideo._id}
                videoId={singleVideo._id.toString()}
                videoName={singleVideo.videoName}
                videoUrl={singleVideo.videoUrl}
                videoDescription={singleVideo.videoDescription}
                videoCategory={singleVideo.videoCategory}
                videoAuthor={singleVideo.videoAuthor}
                videoDateUpload={singleVideo.videoDateUpload}
              />
            )
          })} 
          */}

          {videos}
        </div>
      </div>
    </section>
  );
}