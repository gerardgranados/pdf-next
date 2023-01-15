import React, { useRef, useEffect } from "react";
import { Bar } from "@antv/g2plot";

const Chart = ({ value }) => {
  const conref = useRef();
  useEffect(() => {
    const stackedBarPlot = new Bar(conref.current, {
      data: value.reverse(),
      isStack: true,
      xField: "value",
      yField: "year",
      seriesField: "type",
      label: {
        // 可手动配置 label 数据标签位置
        position: "middle", // 'left', 'middle', 'right'
        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: "interval-adjust-position" },
          // 数据标签防遮挡
          { type: "interval-hide-overlap" },
          // 数据标签文颜色自动调整
          { type: "adjust-color" },
        ],
      },
    });

    stackedBarPlot.render();
  }, []);
  return <div ref={conref}></div>;
};
export default Chart;
