import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        style={{
            backgroundColor: "transparent",
        }}
        viewBox="0 0 92 92"
        fill="#fff"
        {...props}
    >
        <Path d="M89.834 1.75H3c-1.654 0-3 1.346-3 3v13.334c0 1.654 1.346 3 3 3h86.833c1.653 0 3-1.346 3-3V4.75a3.002 3.002 0 0 0-2.999-3zM89.834 36.75H3c-1.654 0-3 1.346-3 3v13.334c0 1.654 1.346 3 3 3h86.833c1.653 0 3-1.346 3-3V39.75a3.002 3.002 0 0 0-2.999-3zM89.834 71.75H3c-1.654 0-3 1.346-3 3v13.334c0 1.654 1.346 3 3 3h86.833c1.653 0 3-1.346 3-3V74.75a3.002 3.002 0 0 0-2.999-3z" />
    </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
