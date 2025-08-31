import React from "react";
import ReactPlayer from "react-player";
import { useWindow } from "@/hooks/useWindowDimension";
import { Container } from "./styles";

const VideoPlayer: React.FC = () => {
  const { windowWidth } = useWindow();

  return (
    <Container>
      <ReactPlayer
        src="https://youtu.be/IvvFGubLOOw?cc_load_policy=1&cc_lang_pref=pt"
        width={windowWidth <= 490 ? "100%" : "80%"}
        height={windowWidth <= 490 ? "240px" : "80vh"}
        controls
      />
    </Container>
  );
};

export default VideoPlayer;
