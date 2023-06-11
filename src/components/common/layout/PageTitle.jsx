import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} - econoBeep</title>
    </Helmet>
  );
}
PageTitle.propTypes = {
  title: PropTypes.string,
};

PageTitle.defaultProps = {
  title: "로딩 중",
};

export default PageTitle;
