import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="container">
      <header>
        <Logo />
      </header>
      <div id="main" role="main">
        <ul className="horiznav">
          <li>
            <a href="https://github.com/pierceray" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/raypierce/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pierceray/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.flickr.com/photos/pierceray/" target="_blank">
              flickr
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
