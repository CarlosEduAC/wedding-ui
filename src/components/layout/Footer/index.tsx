import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";
import { Container, SocialMediaContainer, Copyright } from "./styles";

function Footer() {
  return (
    <Container>
      <SocialMediaContainer>
        <Link to="/" target="_blank">
          <FaWhatsapp size={20} />
        </Link>

        <Link to="/" target="_blank">
          <FaInstagram size={20} />
        </Link>

        <Link to="/" target="_blank">
          <FaTwitter size={20} />
        </Link>

        <Link to="/" target="_blank">
          <FaFacebookMessenger size={20} />
        </Link>
      </SocialMediaContainer>
      <Copyright>© Copyright 2025. All rights reserved</Copyright>
    </Container>
  );
}

export { Footer };
