import React from "react";
import PropTypes from "prop-types";

import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};
Loading.propTypes = {
  fullScreen: PropTypes.bool,
};
