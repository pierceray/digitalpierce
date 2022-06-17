const Index = () => {
  return (
    <>
      <header className="sticker shadow">
        <div className="stickertitle">
          <span id="hello">Hello,</span>
          <span id="mynameis">my name is:</span>
        </div>
        <div className="stickerbody">
          <h1>
            <span id="firstName">Ray</span> <span id="lastName">Pierce</span>
          </h1>
        </div>
      </header>

      <div id="main" role="main">
        <ul className="horiznav">
          <li>
            <a
              href="https://twitter.com/pierceray"
              target="_blank"
              rel="noopener"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/pierceray"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/raypierce/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pierceray/"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.flickr.com/photos/pierceray/"
              target="_blank"
              rel="noopener"
            >
              flickr
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Index;
