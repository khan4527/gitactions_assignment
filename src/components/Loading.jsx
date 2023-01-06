import React from "react";
import Styles from "./Loading.module.css";
function Loading() {
  return (
    <div className={Styles.main}>
      <div className={Styles.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
