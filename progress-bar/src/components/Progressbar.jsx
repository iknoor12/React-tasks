import React, {useState, useEffect} from "react";

function Progressbar() {
    const [inputValue, setInputValue] = useState(20);
    const [progress, setProgress] = useState(20);

    useEffect(() => {
        setProgress(inputValue);
    }, [inputValue]);

    const handleChange = (e) => {
        let value = Number(e.target.value);

        if (value < 0) value = 0;
        if (value > 100) value =100;

        setInputValue(value);
    };

    const handleReset = () => {
        setInputValue(0);
        setProgress(0);
    };

    return (
        <>
        <div style={styles.wrapper}>
            <h2>Input-based Progress Bar</h2>
            <input type="number" value={inputValue} onChange={handleChange} style={styles.input}/>

            <div style={styles.progressContainer}>
                <div style={{...styles.progressFill, width: `${progress}%`}}>{progress}%</div>
            </div>

            <button onClick={handleReset} style={styles.resetBtn}>Reset</button>
        </div>
        </>
    );
}

const styles = {
  wrapper: {
    width: "400px",
    margin: "auto",
    marginTop: "50px",
    textAlign: "center",
  },
  input: {
    padding: "8px",
    width: "100px",
    fontSize: "16px",
    marginBottom: "20px",
  },
  progressContainer: {
    width: "100%",
    height: "30px",
    backgroundColor: "#ddd",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "green",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    transition: "width 0.3s ease-in-out",
  },
  resetBtn: {
    padding: "8px 15px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Progressbar;