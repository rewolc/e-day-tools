import "./item.scss";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";

type Props = {
  value: Record<string, string>;
  index: number;
  itemToChoose: React.Dispatch<number>;
  show: boolean;
};
const Item: FC<Props> = ({ value, index, itemToChoose, show }) => {
  const image = require(`../../../../assets/${Object.keys(value)}.png`);

  const itemImg: Record<string, string> = {
    backgroundImage: `url(${image})`,
    backgroundPosition: " right 50% bottom 30%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "30%",
    cursor: show ? "default" : "pointer",
  };
  const props = useSpring({
    config: {
      duration: 1000,
    },
    delay: show ? (6 - index) * 300 : index * 300,
    from: { opacity: 0 },
    reverse: show,
    to: { opacity: 1 },
  });

  return (
    <animated.div onClick={() => !show && itemToChoose(index)} style={props}>
      <Link to={`${Object.keys(value)}`} type="text/css">
        <div className="item" style={itemImg}>
          <div className="item__name">{Object.values(value)}</div>
        </div>
      </Link>
    </animated.div>
  );
};

export default Item;
