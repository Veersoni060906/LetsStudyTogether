// components/Footer.js
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 15px;
  background-color: ${(props) => props.theme.primary};
  color: white;
`;

export default function Footer() {
  return <FooterWrapper>© 2025 Let’s Study Together</FooterWrapper>;
}