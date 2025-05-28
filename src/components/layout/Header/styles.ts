import { Link as RRLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1.5rem 2rem;

  /* a + a,
  a + img,
  img + a {
    margin: 0 0 0 0.8rem;
  } */
`;

export const LogoImage = styled.img`
  width: 80px;
`;

export const Link = styled(RRLink)`
  text-decoration: none;
  color: ${({ theme }) => theme["neutral-900"]};
`;
