import React from "react";
import { Container } from "./styles";

interface FeedbackProps {
  type: "success" | "error";
  message: string;
}

const Feedback: React.FC<FeedbackProps> = ({ type, message }) => {
  return (
    <Container $type={type}>
      <p>{message}</p>
    </Container>
  );
};

export default Feedback;
