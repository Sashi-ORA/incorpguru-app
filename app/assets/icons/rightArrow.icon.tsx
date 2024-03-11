import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function RightArrowIcon(props: SvgProps) {
  return (
    <Svg width={14} height={8} viewBox="0 0 14 8" fill="none" {...props}>
      <Path
        d="M13.354 4.354a.5.5 0 000-.708L10.172.464a.5.5 0 00-.708.708L12.293 4 9.464 6.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h13v-1H0v1z"
        fill="#978494"
      />
    </Svg>
  );
}

export default RightArrowIcon;
