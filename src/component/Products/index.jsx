import React, { useEffect, useState } from 'react';
import { getAllProducts, addToCart, getProductByCategory } from '../../API';
import { useParams } from 'react-router-dom';
import {
    List,
    Card,
    Image,
    Typography,
    Badge,
    Rate,
    Button,
    message as antdMessage,
    Spin,
} from 'antd';

const { Paragraph, Text } = Typography;

function Products({ onAddToCart }) {
    const [loading, setLoading] = useState(false);
    const param = useParams();
    const [items, setItems] = useState([]);
    const [messageApi] = antdMessage.useMessage();

    // useEffect là hook trong React, Gọi API để lấy dữ liệu (như getAllProducts() )
    useEffect(() => {
        setLoading(true);
        (param?.categoryId
            ? getProductByCategory(param.categoryId)
            : getAllProducts()
        ).then((res) => {
            setItems(res.products || []);
            setLoading(false);
        })
            .catch(() => {
                messageApi.error('Failed to fetch products.');
            });
    }, [param.categoryId, messageApi]);

    if (loading) {
        return <Spin spinning size="large" style={{ display: 'block', margin: '20px auto' }} />;
    }

    return (
        <div style={{ padding: 24 }}>
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={items}
                renderItem={(product) => (
                    <List.Item key={product.id}>
                        <Badge.Ribbon
                            className="itemCardBadge"
                            text={`-${product.discountPercentage}%`}
                        >
                            <Card
                                className="itemCard"
                                title={product.title}
                                cover={
                                    <Image
                                        src={product.thumbnail}
                                        alt={product.title}
                                        height={200}
                                        style={{ objectFit: 'cover' }}
                                        preview={false}
                                    />
                                }
                                actions={[
                                    <Rate
                                        key="rating"
                                        allowHalf
                                        disabled
                                        value={product.rating}
                                    />,
                                    <AddToCartButton key="add" item={product} onAddToCart={onAddToCart} />,
                                ]}
                            >
                                <Card.Meta
                                    title={
                                        <>
                                            <Paragraph style={{ marginBottom: 4 }}>
                                                <Text strong>Price: </Text>${product.price}{' '}
                                                <Text delete type="danger">
                                                    ${Math.round(
                                                        product.price /
                                                        (1 - product.discountPercentage / 100)
                                                    )}
                                                </Text>
                                            </Paragraph>
                                            <Paragraph
                                                ellipsis={{ rows: 2, expandable: true, symbol: 'More' }}
                                            >
                                                {product.description}
                                            </Paragraph>
                                        </>
                                    }
                                />
                            </Card>
                        </Badge.Ribbon>
                    </List.Item>
                )}
            />
        </div>
    );
}


function AddToCartButton({ item, onAddToCart }) {
    const [messageApi, contextHolder] = antdMessage.useMessage();
    const handleAddToCart = () => {
        addToCart(item.id)
            .then(() => {
                messageApi.success(`${item.title} added to cart!`);
                if (onAddToCart) onAddToCart();
            })
            .catch(() => {
                messageApi.error(`Failed to add ${item.title} to cart.`);
            });
    };

    return (
        <div>
            {contextHolder}
            <Button type="link" onClick={handleAddToCart}>
                Add to Cart
            </Button>
        </div>
    );
}

export default Products;
