import "./main.scss";
import {mainTools} from "../../features/main/tools/tools";
import Item from "../../features/main/atoms/item/item";
import React, {FC, useState} from "react";

const Main: FC = () => {
    const [chosen, itemToChoose] = useState<number>(-1);

    return (
        <div className="main">
            <div className="main__container">
                {mainTools.map((value, indx) => (
                    <Item
                        value={value}
                        index={indx}
                        key={indx}
                        itemToChoose={itemToChoose}
                        show={chosen !== indx && chosen !== -1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main;
