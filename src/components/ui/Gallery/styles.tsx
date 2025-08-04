import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  /* max-width: 800px; */
  margin: 0 auto;
`;

export const MainPhoto = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
`;

export const Thumbnail = styled.img<{ selected: boolean }>`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${({ selected }) => (selected ? "#007bff" : "transparent")};
  cursor: pointer;
  transition: border 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: none;
  color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    color: #0056b3;
  }

  &:disabled {
    color: #ccc;
    cursor: default;
  }
`;
