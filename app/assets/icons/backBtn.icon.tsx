import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function BackIcon(props: SvgProps) {
  return (
    <Svg width={8} height={14} viewBox="0 0 8 14" fill="none" {...props}>
      <Path
        d="M7 13L1 7l6-6"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackIcon;
