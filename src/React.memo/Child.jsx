import PropTypes from "prop-types";
import React from "react";

const Child = React.memo(({ count }) => {
  console.log("Children Component Re-rendered!");
  return <div>{count}</div>;
});

Child.propTypes = {
  count: PropTypes.number,
};

export default Child;
