import { Fragment } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import HeroImage from "./Components/HeroImage";
import Informacoes from "./Components/Informacoes";
import MenuNavegacao from "./Components/MenuNavegacao";
import "./css/style.css";
import Script from "./js/main.js";

function App() {
  return (
    <Fragment>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>PRO Prodigy - Razor</title>

      <link rel="shortcut icon" href="https://razor.com.br/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="css/reset.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" type="text/css" href="css/style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <MenuNavegacao />
      <HeroImage />
      <Informacoes />
      <Footer />
      <script type="text/javascript" src={Script} />
    </Fragment>
  );
}

export default App;
