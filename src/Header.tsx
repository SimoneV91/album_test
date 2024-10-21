import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center w-screen justify-between h-14 px-3 object-top border-b-4 border-colorNidek">
      <Link to="http://localhost:3000">
        <img
          src={
            "https://www.nidek-intl.com/wp-content/themes/NIDEK/img/logo.png"
          }
          className="h-8"
        />
      </Link>
    </div>
  );
};
export default Header;
