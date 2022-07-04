import "./main.scss";
import Item from "../../features/Main/atoms/item/item";
import React, { FC, useState } from "react";
import { mainTools } from "../../features/Main/tools/tools";

const Main: FC = () => {
  const [chosen, itemToChoose] = useState<number>(-1);

  return (
    <div className="main">
      <div className="main__container">
        {mainTools.map((value, indx) => (
          <Item
            key={indx}
            index={indx}
            itemToChoose={itemToChoose}
            show={chosen !== indx && chosen !== -1}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
