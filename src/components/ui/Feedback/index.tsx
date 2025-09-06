import React from "react";
import { Container } from "./styles";

interface FeedbackProps {
  type: "success" | "error";
  message: string;
  isMobile: boolean;
}

const Feedback: React.FC<FeedbackProps> = ({ type, message, isMobile }) => {
  return (
    <Container $type={type} $isMobile={isMobile}>
      <p>{message}</p>
    </Container>
  );
};

export default Feedback;
