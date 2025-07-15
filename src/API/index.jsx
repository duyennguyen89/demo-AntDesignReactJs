// API/index.jsx
export const getAllProducts = () => {
    return fetch('https://dummyjson.com/products')
        .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch products");
            return res.json();
        });
};

export const getProductByCategory = (category) => {
    return fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch products by category");
            return res.json();
        });
};

export const getCart = () => {
    return fetch('https://dummyjson.com/carts/1')
        .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch product by ID");
            return res.json();
        });
};

export const addToCart = (productId) => {
    return fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: 1,
            products: [
                {
                    id: productId,
                    quantity: 1,
                },
            ],
        }),
    }).then((res) => {
        if (!res.ok) throw new Error("Failed to add product to cart");
        return res.json();
    });
};
