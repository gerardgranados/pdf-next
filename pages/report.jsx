import React from "react";
import dynamic from "next/dynamic";
import { useAppContext } from "../contexts/App.context";
import styles from "./report.module.css";
export default function report() {
  const Chart = dynamic(() => import("../components/chart/Chart"), {
    ssr: false,
  });
  const value = useAppContext();
  return (
    <div className={styles.report}>
      hola:
      {value?.name}
      <img src={value?.diagram} />
      <Chart value={value?.threats} />
    </div>
  );
}
