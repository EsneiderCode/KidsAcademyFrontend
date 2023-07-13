import React, { useState, useEffect } from 'react';
import { MoonLoader } from 'react-spinners';
import styles from "./Loading.module.css";

const Loading = ({setLoading}) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.loading}>
      {showLoading ? (
        <>
        <h2 className={styles.title}>Идет загрузка...</h2>
        <MoonLoader color="#36d7b7" />
        </>
      ) : (setLoading(false))}
    </div>
  );
};

export default Loading;
