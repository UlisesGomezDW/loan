import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props: SvgProps) => (
    <Svg viewBox="0 0 129 129" fill="#fff" width={24} height={24} {...props}>
        <Path d="M64.5 92.6c15.5 0 28-12.6 28-28s-12.6-28-28-28-28 12.6-28 28 12.5 28 28 28zm0-47.9c11 0 19.9 8.9 19.9 19.9 0 11-8.9 19.9-19.9 19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9zM68.6 23.6V10.7c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1zM60.4 105.6v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1zM96.4 38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2zM23.5 105.6c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8zM122.5 64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h12.9c2.2 0 4.1-1.8 4.1-4.1zM10.6 68.7h12.9c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1H10.6c-2.3 0-4.1 1.8-4.1 4.1s1.9 4.1 4.1 4.1zM102.6 106.8c1 0 2.1-.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.9 1.2 2.9 1.2zM38.4 38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2z" />
    </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
