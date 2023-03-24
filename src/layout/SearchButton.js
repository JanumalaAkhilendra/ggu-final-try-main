import { connect } from "react-redux";
import { searchToggle } from "../redux/actions/siteSettings";
const SearchButton = ({ searchToggle }) => {
  return (
     /*  eslint-disable @next/next/no-img-element */
    <a
      href="#"
      className="metaportal_fn_search hold"
      onClick={(e) => {
        e.preventDefault();
        searchToggle(true);
      }}
    >
      <span className="icon">
        <img src="/svg/loupe.svg" alt="" className="fn__svg" />
      </span>
    </a>
  );
};
export default connect(null, { searchToggle })(SearchButton);
