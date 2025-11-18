import React, {useState, useCallback} from "react";

function Heavycalculation() {
    const [number, setNumber] = useState(1);
    const [count, setCount] = useState(0);

    const calculate = useCallback(() => {
        console.log("Calculating...");
        return number*1000;
    }, [number]);

    const result = calculate();

    return (
        <>
        <h2>Heavycalculation with useCallback</h2>
        <p>Result: {result}</p>
        <button onClick={() => {setNumber(number + 1)}}>Number {number}</button>
        <button onClick={() => {setCount(count + 1)}} style={{ marginLeft: "10px" }}>Count: {count}</button>
        </>
    );
}
export default Heavycalculation;