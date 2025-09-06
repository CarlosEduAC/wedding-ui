import styled from "styled-components";

export const Container = styled.div<{ $type: "success" | "error", $isMobile: boolean }>`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 16px 16px 16px 16px;
  color: ${(props) => props.theme["neutral-100"]};
  background-color: ${(props) =>
    props.$type === "success"
      ? props.theme["success-500"]
      : props.theme["error-500"]};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  text-align: center;
  width: ${(props) => (props.$isMobile ? "75%" : "auto")};

  p {
    font-size: 14px;
  }
`;
