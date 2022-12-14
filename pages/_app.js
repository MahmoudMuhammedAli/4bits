import "../styles/globals.css";
import { appWithTranslation } from 'next-i18next';
import "../styles/style.css";
import "react-phone-number-input/style.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);