import PropTypes from "prop-types";

const LinkInterface = PropTypes.shape({
  id: PropTypes.number.required,
  longLink: PropTypes.string.required,
  shortLink: PropTypes.string.required
});

export default LinkInterface;
