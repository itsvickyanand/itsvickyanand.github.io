import React from 'react'
import LottieAnimation from './Lottie'
import home from './laptop2.json'

const Coder = () => {
  console.log(LottieAnimation)
  return (
    <div>
      <LottieAnimation lotti={home} height={450} width={450} />
    </div>
  )
}

export default Coder
