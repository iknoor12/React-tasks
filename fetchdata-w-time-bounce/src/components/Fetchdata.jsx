import React, {useState, useEffect} from "react";

function Fetchdata() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setData(data);
            setFilteredData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError("Failed to fetch data!");
            console.error(error);
            setLoading(false);
        });
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            const filtered = data.filter((data) => {
                return data.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFilteredData(filtered);
        });
        
        return () => clearTimeout(timer);
    },[searchTerm, data]);

    if (loading) {
        return <div>Loading...</div>;
    } 

    return (
        <>
            <h2>Debounced 2 sec- search display</h2>
            <input type="text" value={searchTerm} placeholder="Search by name.."
                onChange={(e) => setSearchTerm(e.target.value)} 
                style={{ padding: "10px", width: "300px", marginBottom: "20px" }}/>

            {error && <div style={{ color: "red" }}>{error}</div>}

            <div style={{ display: "grid", gap: "15px", gridTemplateColumns: "repeat(3, 1fr)" }}>
                {filteredData.map((data) => (
                    <div key={data.id} style={{border: "1px solid #ccc",padding: "15px",
                        borderRadius: "10px",width: "300px",}}>
                        <h3>{data.name}</h3>
                        <p>{data.email}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Fetchdata;