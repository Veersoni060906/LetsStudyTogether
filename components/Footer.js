// components/Footer.js
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2025 Let’s Study Together. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
