import {Collapse} from 'antd';
import React, {FC} from 'react';

const Task: FC = () => {
    return (
        <>
            <Collapse.Panel key={1} header={'жопа'}>{'привет'}</Collapse.Panel>
        </>
    )

};

export default Task;