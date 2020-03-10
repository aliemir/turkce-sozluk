import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function SvgLogo(props) {
  return (
    <Svg width={86} height={40} fill="none" className="" {...props}>
      <G clipPath="url(#logo_svg__clip0)" fill="#fff">
        <Path d="M8.212 7.815H0V0h25.695v7.815h-8.212v20H8.212v-20zM27.815 0H38.41c11.126 0 16.556 5.43 16.556 13.642v.133c0 8.212-5.695 14.04-16.954 14.04H27.815V0zm9.271 8.08v11.655h1.59c4.238 0 7.02-1.722 7.02-5.828v-.132c0-3.974-2.782-5.828-7.02-5.828h-1.59v.132zM57.616 0h9.272v10.464L74.835 0h10.86l-9.668 12.053 9.8 15.762H74.703l-5.43-8.875-2.385 2.914v5.96h-9.271V0zM2.384 35.497H.662v-.928h4.239v.928H3.31v4.37h-.927v-4.37zM6.623 37.748v-3.046h.927v3.046c0 .928.53 1.457 1.324 1.457.795 0 1.325-.53 1.325-1.457v-3.046h.927v3.046c0 1.59-.927 2.384-2.252 2.384-1.324-.132-2.251-.927-2.251-2.384zm1.06-4.37h.926v.794h-.927v-.794zm1.589 0h.927v.794h-.927v-.794zM13.377 34.702h2.384c.663 0 1.193.132 1.59.53.265.265.397.662.397 1.192 0 .927-.53 1.457-1.192 1.59L18.013 40h-1.06l-1.324-1.854h-1.192V40h-.927v-5.298h-.133zm2.252 2.649c.662 0 1.06-.397 1.06-.927s-.398-.927-1.06-.927h-1.324v1.721h1.324v.133zM19.603 34.702h.927v2.649l2.517-2.649h1.191l-2.251 2.252L24.239 40h-1.192l-1.855-2.384-.662.795V40h-.927v-5.298zM29.14 34.702h1.986c1.722 0 2.781 1.192 2.781 2.649S32.715 40 31.126 40h-1.987v-5.298zm.926.795v3.576h1.06c1.06 0 1.854-.795 1.854-1.722 0-1.06-.662-1.854-1.854-1.854h-1.06zM35.894 33.377h.927v.795h-.927v-.794zm0 1.325h.927V40h-.927v-5.298zM39.073 34.702H40v4.503h2.782V40h-3.709v-5.298zM47.682 34.702h.927v2.649l2.517-2.649h1.192l-2.252 2.252L52.318 40h-1.192l-1.854-2.384-.663.795V40h-.927v-5.298zM53.775 37.748v-3.046h.927v3.046c0 .928.53 1.457 1.325 1.457.794 0 1.324-.53 1.324-1.457v-3.046h.927v3.046c0 1.59-.927 2.384-2.251 2.384-1.325-.132-2.252-.927-2.252-2.384zM60.53 34.702h2.384c.662 0 1.192.132 1.59.53.264.265.397.662.397 1.192 0 .927-.53 1.457-1.192 1.59L65.165 40h-1.06l-1.324-1.854H61.59V40h-.927v-5.298h-.132zm2.251 2.649c.663 0 1.06-.397 1.06-.927s-.397-.927-1.06-.927h-1.324v1.721h1.324v.133zM66.755 37.748v-3.046h.927v3.046c0 .928.53 1.457 1.325 1.457.794 0 1.324-.53 1.324-1.457v-3.046h.927v3.046c0 1.59-.927 2.384-2.251 2.384-1.457-.132-2.252-.927-2.252-2.384zM73.378 34.702h.927l1.59 2.517 1.589-2.517h.927V40h-.927v-3.841l-1.722 2.517-1.59-2.517V40h-.927v-5.298h.133zM80.662 37.748v-3.046h.927v3.046c0 .928.53 1.457 1.325 1.457.795 0 1.325-.53 1.325-1.457v-3.046h.927v3.046c0 1.59-.927 2.384-2.252 2.384-1.325-.132-2.252-.927-2.252-2.384z" />
      </G>
      <Defs>
        <ClipPath id="logo_svg__clip0">
          <Path d="M0 0h85.828v40H0V0z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgLogo
