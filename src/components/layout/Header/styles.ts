import styled from "styled-components";
import { shade } from "polished";
import logo from "@/assets/img1.jpeg";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme["primary-700"]};
  padding: 1rem 2rem;
  background-image: url(${logo});
  background-position: 50% 60%;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    padding: 0.5rem 0.5rem;
    height: 12rem;
    border-radius: 0 0 1rem 1rem;
  }
`;

export const Image = styled.img`
  width: 5rem;

  @media screen and (max-width: 1359px) {
    width: 7rem;
  }

  @media screen and (max-width: 1024px) {
    /* width: 100%; */
    /* flex: 1; */
    /* border-radius: 0 0 1rem 1rem; */
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  color: ${(props) => props.theme["neutral-100"]};
  transition: color 0.2s;

  :hover {
    color: ${(props) => shade(0.25, props.theme["neutral-100"])};
  }

  :active {
    color: ${(props) => shade(0.1, props.theme["neutral-100"])};
    background-color: ${(props) => shade(0.1, props.theme["primary-700"])};
  }

  button {
    background: none;
    border: 0;
    color: ${(props) => props.theme["neutral-100"]};

    :hover {
      color: ${(props) => shade(0.25, props.theme["neutral-100"])};
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0.2rem 0.5rem;
  }
`;

export const Button = styled.button`
  margin-left: 8px;
  padding: 0.4rem 2rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme["neutral-100"]};
  color: ${(props) => props.theme["primary-700"]};
  transition: background-color 0.2s;
  transition: color 0.2s;

  :hover {
    color: ${(props) => shade(0.25, props.theme["primary-700"])};
    background-color: ${(props) => shade(0.25, props.theme["neutral-100"])};
  }

  :active {
    color: ${(props) => shade(0.1, props.theme["primary-700"])};
    background-color: ${(props) => shade(0.1, props.theme["neutral-100"])};
  }

  @media screen and (max-width: 1024px) {
    margin-left: 4px;
    padding: 0.2rem 0.5rem;
  }
`;
