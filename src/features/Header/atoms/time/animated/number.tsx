import React, { FC } from "react";
import { animated, config, useSpring } from "@react-spring/web";

type Props = {
  time: number | string;
};

const AnimatedNumber: FC<Props> = ({ time }) => {
  const { number } = useSpring({
    config: config.molasses,
    delay: 200,
    from: { number: 0 },
    number: +time,
  });

  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
};

export default AnimatedNumber;
