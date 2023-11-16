import React from "react";
import {ClipLoader} from "react-spinners";
import {SpinnerProps} from "../../../interfaces/inputs/ISpinner";
import "./spinner.css";

const Spinner: React.FC<SpinnerProps> = ({loading = false}) => {
  return (
    <div className="centered-loader">
      <ClipLoader
        className="loader"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
