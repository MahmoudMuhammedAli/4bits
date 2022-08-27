import "../styles/globals.css";
import "../styles/style.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
