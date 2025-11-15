import React, {useState, useEffect} from  'react';

function Productdata() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => {
            if(!response.ok){
                throw new Error("Network error");
            }
            return response.json();
        })
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <h2>Loading products...</h2>;
    }

    if (error) {
        return <h2 style={{ color: "red" }}>Error: {error}</h2>;
    }

    return (
        <>
        <div style={styles.container}>
            {products.map((product) => (
                <div style={styles.card} key={product.id}>
                    <img src={product.image} alt={product.title} style={styles.image} />
                    <h3 style={styles.title}>{product.title}</h3>
                    <p style={styles.desc}>{product.description}</p>
                    <p style={styles.price}>Price: ${product.price}</p>
                </div>
            ))}
        </div>
        </>
    );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
    background: "#f0ececff",
  },
  image: {
    width: "100px",
    height: "120px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  price: {
    fontSize: "18px",
    fontWeight: "600",
    color: "green",
  },
  desc: {
    fontSize: "14px",
    color: "#444",
    marginTop: "10px",
  },
};

export default Productdata;