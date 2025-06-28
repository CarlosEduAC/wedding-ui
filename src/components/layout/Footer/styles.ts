import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1.5rem 0;
`;

export const SocialMediaContainer = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme["neutral-900"]};
  }

  a:hover,
  a:focus {
    color: ${({ theme }) => theme["primary-500"]};
  }

  a + a {
    margin-left: 0.5rem;
  }
`;

export const Copyright = styled.p`
  font-size: 12px;
`;
