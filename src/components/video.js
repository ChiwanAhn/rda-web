import React from 'react';
import styles from './video.module.scss';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className={styles.video}>
    <video
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media;"
      width={'100%'}
      frameBorder="0"
      allowfullscreen=""
      controls=""
      autoplay=""
      frameborder="0"
      scrolling="no"
    />
  </div>
);
export default Video;
