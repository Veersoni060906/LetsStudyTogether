// pages/_app.js
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { lightTheme, darkTheme } from '../styles/themes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    transition: background-color 0.3s, color 0.3s;
  }
`;

function MyAppWrapper({ Component, pageProps }) {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </StyledThemeProvider>
  );
}

export default function MyApp(props) {
  return (
    <ThemeProvider>
      <MyAppWrapper {...props} />
    </ThemeProvider>
  );
}