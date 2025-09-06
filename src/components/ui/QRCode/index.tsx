import React from "react";
import { Container, QRImage, Label } from "./styles";

interface QRCodeProps {
  src: string;
  alt?: string;
  size?: number;
}

const QRCode: React.FC<QRCodeProps> = ({
  src,
  alt = "QR Code PIX",
  size = 200,
}) => {
  return (
    <Container>
      <QRImage src={src} alt={alt} size={size} />
      <Label>Ou use a chave Pix [096.973.714-90]</Label>
    </Container>
  );
};

export default QRCode;
