import Logo from "../assets/img/foodvilla.jpeg";

//named export. exporting by name; then import using {} . See Header.js
export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      // src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      src={Logo}
    />
  </a>
);

//We can just export default one thing.
// export default Title;
