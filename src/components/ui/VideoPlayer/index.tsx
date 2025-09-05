import React from "react";
import ReactPlayer from "react-player";
import { useWindow } from "@/hooks/useWindowDimension";
import { Container } from "./styles";

const VideoPlayer: React.FC = () => {
  const { windowWidth } = useWindow();

  return (
    <Container>
      <ReactPlayer
        src="https://www.youtube.com/watch?v=fbqK3fRER6M"
        width={windowWidth <= 490 ? "100%" : "80%"}
        height={windowWidth <= 490 ? "240px" : "80vh"}
        controls
      />
    </Container>
  );
};

export default VideoPlayer;
