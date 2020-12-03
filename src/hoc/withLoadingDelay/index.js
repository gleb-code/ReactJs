import React, { useEffect, useRef } from "react";
import "./index.css";

const withLoadingDelay = (WrappedComponent, className) => {
  return (props) => {
    const t = useRef();

    useEffect(() => {
      const timer = setTimeout(() => {
        t.current.className = className;
      }, 5000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="Loader" ref={t}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withLoadingDelay;
