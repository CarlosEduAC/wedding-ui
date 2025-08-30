import React from "react";
import { GalleryProps } from "@/models/Gallery";
import {
  Container,
  MainPhoto,
  Button,
  ThumbnailWrapper,
  Thumbnail,
} from "./styles";

const MAX_VISIBLE_THUMBS = 3;

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [thumbStartIndex, setThumbStartIndex] = React.useState(0);
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoForward, setCanGoForward] = React.useState(true);
  const [visibleThumbnails, setVisibleThumbnails] = React.useState<string[]>(
    []
  );

  React.useEffect(() => {
    setCanGoBack(thumbStartIndex > 0);
    setCanGoForward(thumbStartIndex + MAX_VISIBLE_THUMBS < photos.length);
  }, [thumbStartIndex, photos.length]);

  React.useEffect(() => {
    setVisibleThumbnails(
      photos.slice(thumbStartIndex, thumbStartIndex + MAX_VISIBLE_THUMBS)
    );
  }, [thumbStartIndex, photos]);

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    setThumbStartIndex(index);
  };

  return (
    <Container>
      <MainPhoto
        src={photos[selectedIndex]}
        alt={`Foto ${selectedIndex + 1}`}
      />

      <ThumbnailWrapper>
        <Button
          onClick={() => {
            const newStartIndex = thumbStartIndex - 1;
            setThumbStartIndex(newStartIndex);
            setSelectedIndex(newStartIndex);
          }}
          disabled={!canGoBack}
        >
          ◀
        </Button>
        {visibleThumbnails.map((thumb, i) => {
          const actualIndex = thumbStartIndex + i;
          return (
            <Thumbnail
              key={i + 1}
              src={thumb}
              alt={`Miniatura ${actualIndex + 1}`}
              selected={actualIndex === selectedIndex}
              onClick={() => handleThumbnailClick(actualIndex)}
            />
          );
        })}
        <Button
          onClick={() => {
            const newStartIndex = thumbStartIndex + 1;
            setThumbStartIndex(newStartIndex);
            setSelectedIndex(newStartIndex);
          }}
          disabled={!canGoForward}
        >
          ▶
        </Button>
      </ThumbnailWrapper>
    </Container>
  );
};

export { Gallery };
