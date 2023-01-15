// import { Chart } from "../components/chart/Chart";
import dynamic from "next/dynamic";
export default function Index() {
  const Chart = dynamic(() => import("../components/chart/Chart"), {
    ssr: false,
  });

  return (
    <div>
      <Chart />
    </div>
  );
}
