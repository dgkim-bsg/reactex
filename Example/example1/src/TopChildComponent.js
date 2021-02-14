import React, {useState} from 'react';
const TopChildComponent = (props) => {
    const [count, setCount] = useState(0);
    function countChange(e) {
        setCount(e.target.value);
    }
    const onClickAction = () => {
        props.onClickAction(count);
    };
    return (
        <div>
            <p>TopChildComponent</p>
            <input type="text" value={count} onChange={countChange}/>
            <button onClick={onClickAction}>더하기</button>
        </div>
    );
};

export default TopChildComponent;