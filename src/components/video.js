import React from 'react';
import styled from 'styled-components';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoContainer>
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
      loop
    />
  </VideoContainer>
);
export default Video;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 1780px;
  height: 100%;
  margin: auto;
`;
