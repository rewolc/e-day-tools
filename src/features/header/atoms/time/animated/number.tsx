import { animated, config, useSpring } from "@react-spring/web";
import React, { FC } from "react";

type Props = {
  time: number | string;
};

const AnimatedNumber: FC<Props> = ({ time }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: +time,
    delay: 200,
    config: config.molasses,
  });

  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
};

export default AnimatedNumber;
