import React from "react";
import { Container } from "./styles";

interface VideoPlayerProps {
  autoPlay: boolean;
  muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  autoPlay,
  muted = false,
}) => {
  return (
    <Container>
      <video
        width="80%"
        controls
        autoPlay={autoPlay}
        muted={muted}
        style={{ borderRadius: "12px" }}
      >
        <source src="/videos/ensaio.mp4" type="video/mp4" />
        <track
          kind="captions"
          srcLang="pt"
          src="/videos/ensaio.vtt"
          label="Portuguese captions"
          default
        />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </Container>
  );
};

export default VideoPlayer;
