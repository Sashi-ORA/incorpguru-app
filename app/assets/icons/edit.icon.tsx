import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function EditIcon(props: SvgProps) {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        d="M7 1.75H2.917A1.167 1.167 0 001.75 2.917v8.166a1.167 1.167 0 001.167 1.167h8.166a1.167 1.167 0 001.167-1.167V7"
        stroke="#fff"
        strokeWidth={1.16667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.719 1.531a1.238 1.238 0 011.75 1.75L7 8.75l-2.333.583L5.25 7l5.469-5.469z"
        stroke="#fff"
        strokeWidth={1.16667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EditIcon;
