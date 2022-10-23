function MenuNavegacao() {
  return (
    <header>
      <nav class="navbar">
        <label
          class="navbar-alternador"
          id="js-navbar-toggle"
          for="alternadorVisto"
        >
          <i class="fa fa-bars"></i>
        </label>
        <a href="https://razor.com.br" class="logo" target="_blank">
          <svg
            class="razor-logo"
            width="100"
            height="26"
            viewBox="0 0 100 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.97673 25.319H0.550967C0.478396 25.319 0.406536 25.3047 0.339522 25.2768C0.272507 25.249 0.211651 25.2082 0.160456 25.1567C0.109261 25.1053 0.0687328 25.0443 0.0411972 24.9771C0.0136616 24.91 -0.000334635 24.8381 6.07389e-06 24.7655V6.32523C6.07389e-06 4.85851 0.582658 3.45187 1.61978 2.41474C2.65691 1.37762 4.06355 0.794966 5.53027 0.794966H13.4015C13.5483 0.794966 13.6891 0.853287 13.7929 0.957097C13.8967 1.06091 13.955 1.2017 13.955 1.34851V5.77169C13.955 5.9185 13.8967 6.05929 13.7929 6.1631C13.6891 6.26691 13.5483 6.32523 13.4015 6.32523H6.91154C6.5452 6.32523 6.19387 6.47076 5.93483 6.7298C5.67579 6.98884 5.53027 7.34017 5.53027 7.7065V24.7784C5.52689 24.923 5.46708 25.0605 5.36363 25.1615C5.26019 25.2625 5.12132 25.3191 4.97673 25.319ZM35.357 21.0588V6.21142C35.357 4.7447 34.7743 3.33805 33.7372 2.30093C32.7001 1.2638 31.2934 0.681152 29.8267 0.681152H18.3704C18.2236 0.681152 18.0828 0.739474 17.979 0.843284C17.8752 0.947093 17.8169 1.08789 17.8169 1.2347V5.64753C17.8169 5.79434 17.8752 5.93514 17.979 6.03895C18.0828 6.14275 18.2236 6.20108 18.3704 6.20108H28.4584C28.8247 6.20108 29.176 6.3466 29.4351 6.60564C29.6941 6.86468 29.8396 7.21601 29.8396 7.58235V9.61545C29.8396 9.76226 29.7813 9.90306 29.6775 10.0069C29.5737 10.1107 29.4329 10.169 29.2861 10.169H20.939C19.9096 10.1692 18.8912 10.3808 17.9469 10.7906C17.0026 11.2004 16.1525 11.7997 15.4493 12.5515C14.746 13.3032 14.2046 14.1913 13.8586 15.1608C13.5126 16.1303 13.3693 17.1605 13.4377 18.1876C13.6963 22.1762 17.1987 25.1871 21.1976 25.1871H31.2028C31.7467 25.1891 32.2857 25.0839 32.789 24.8775C33.2922 24.6711 33.7498 24.3675 34.1357 23.9841C34.5215 23.6007 34.8279 23.145 35.0375 22.643C35.2471 22.1411 35.3556 21.6027 35.357 21.0588ZM29.2732 15.7096C29.3457 15.7093 29.4177 15.7233 29.4848 15.7508C29.5519 15.7783 29.613 15.8189 29.6644 15.8701C29.7159 15.9213 29.7567 15.9821 29.7845 16.0491C29.8124 16.1161 29.8267 16.188 29.8267 16.2606V19.124C29.8267 19.1966 29.8124 19.2684 29.7845 19.3354C29.7567 19.4024 29.7159 19.4633 29.6644 19.5145C29.613 19.5657 29.5519 19.6062 29.4848 19.6338C29.4177 19.6613 29.3457 19.6753 29.2732 19.675H21.0554C20.5505 19.6844 20.0597 19.509 19.6752 19.1817C19.2907 18.8544 19.0392 18.3978 18.9679 17.8979C18.9394 17.6218 18.969 17.3428 19.055 17.0789C19.141 16.815 19.2814 16.572 19.4672 16.3658C19.653 16.1595 19.88 15.9946 20.1335 15.8815C20.387 15.7685 20.6614 15.7099 20.939 15.7096H29.2732ZM82.7031 12.9445C82.7031 9.91033 82.7031 0.681152 72.0978 0.681152C64.9483 0.681152 61.3218 4.80687 61.3218 12.9445C61.3218 15.976 61.3218 25.2052 71.9271 25.2052C79.0766 25.2052 82.7031 21.0795 82.7031 12.9445ZM77.1728 12.9445C77.1728 19.6698 74.387 19.6698 71.9271 19.6698C69.4672 19.6698 66.8521 19.6698 66.8521 12.9445C66.8521 6.21918 69.6379 6.21918 72.0978 6.21918C74.5577 6.21918 77.1728 6.21142 77.1728 12.9445ZM90.9053 24.6517V7.57976C90.9053 7.21342 91.0509 6.86209 91.3099 6.60305C91.569 6.34402 91.9203 6.19849 92.2866 6.19849H98.7765C98.8491 6.19849 98.921 6.18415 98.988 6.1563C99.055 6.12845 99.1159 6.08763 99.167 6.0362C99.2182 5.98476 99.2588 5.92373 99.2863 5.85658C99.3138 5.78944 99.3279 5.71751 99.3275 5.64494V1.22177C99.3248 1.07745 99.2656 0.939953 99.1625 0.838856C99.0595 0.737758 98.9209 0.681127 98.7765 0.681152H90.9053C89.4386 0.681152 88.032 1.2638 86.9949 2.30093C85.9577 3.33805 85.3751 4.7447 85.3751 6.21142V24.6517C85.3751 24.7985 85.4334 24.9393 85.5372 25.0431C85.641 25.1469 85.7818 25.2052 85.9286 25.2052H90.3518C90.4986 25.2052 90.6394 25.1469 90.7432 25.0431C90.8471 24.9393 90.9053 24.7985 90.9053 24.6517ZM59.2189 24.6517V20.2285C59.2189 20.0817 59.1605 19.9409 59.0567 19.8371C58.9529 19.7333 58.8121 19.675 58.6653 19.675H45.194C45.1357 19.6751 45.0788 19.6569 45.0315 19.6228C44.9842 19.5888 44.9488 19.5406 44.9304 19.4853C44.9121 19.4299 44.9117 19.3702 44.9293 19.3146C44.9469 19.259 44.9816 19.2104 45.0285 19.1757L57.3461 10.1224C57.9256 9.69512 58.3969 9.13793 58.7221 8.49556C59.0473 7.85319 59.2175 7.14353 59.2189 6.42352V1.2347C59.2189 1.08789 59.1605 0.947093 59.0567 0.843284C58.9529 0.739474 58.8121 0.681152 58.6653 0.681152H39.2059C39.0591 0.681152 38.9183 0.739474 38.8145 0.843284C38.7107 0.947093 38.6524 1.08789 38.6524 1.2347V5.64753C38.6524 5.79434 38.7107 5.93514 38.8145 6.03895C38.9183 6.14275 39.0591 6.20108 39.2059 6.20108H52.4961C52.5545 6.20089 52.6113 6.21913 52.6587 6.25318C52.706 6.28724 52.7414 6.33538 52.7597 6.39073C52.7781 6.44607 52.7785 6.50581 52.7609 6.5614C52.7433 6.61699 52.7085 6.6656 52.6617 6.7003L40.5199 15.6165C39.9422 16.044 39.4725 16.6006 39.1482 17.242C38.824 17.8833 38.6542 18.5916 38.6524 19.3102V24.6413C38.6524 24.7881 38.7107 24.9289 38.8145 25.0327C38.9183 25.1365 39.0591 25.1949 39.2059 25.1949H58.6653C58.8103 25.1949 58.9496 25.138 59.0531 25.0364C59.1566 24.9348 59.2161 24.7967 59.2189 24.6517Z" />
          </svg>
        </a>
        <input type="checkbox" id="alternadorVisto"></input>
        <ul class="main-nav" id="js-menu">
          <a href="#" class="nav-links">
            <li>Home</li>
          </a>
          <a href="#detalhes" class="nav-links">
            <li>Prodigy</li>
          </a>
          <a href="#contato" class="nav-links">
            <li>Contato</li>
          </a>
          <a href="#squad" class="nav-links">
            <li>Squad</li>
          </a>
        </ul>
      </nav>
      <div class="barra-progresso" id="barraProg"></div>
    </header>
  );
}

export default MenuNavegacao;
