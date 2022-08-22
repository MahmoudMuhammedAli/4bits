import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Team from "../components/Team/Team";
function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Team />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
