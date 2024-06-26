import React, { useEffect, useState } from "react";
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ775/xC2tluFbj/sfu41p+IL40/7rwPp9OO"
  crossorigin="anonymous"
/>


export function Products() {
    const [content, setContent] = useState(<ProductList showForm={showForm} />);

    function showList() {
        setContent(<ProductList showForm={showForm} />);
    }

    function showForm() {
        setContent(<ProductForm showList={showList} />);
    }

    return (
        <div className="container my-5">
            {content}
        </div>
    );
}

function ProductList(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts() {
        fetch("http://localhost:3004/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }

    return (
        <>
            <h2 className="text-center mb-3">List of Products</h2>
            <button onClick={props.showForm} type="button" className="btn btn-primary me-2">Create</button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.createdAt}</td>
                            <td style={{ whiteSpace: "nowrap" }}>
                                <button type="button" className="btn btn-primary btn-sm me-2">Edit</button>
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

function ProductForm(props) {
    return (
        <>
            <h2 className="text-center mb-3">Create New Product</h2>
            <button onClick={props.showList} type="button" className="btn btn-primary me-2">Cancel</button>
        </>
    );
}
