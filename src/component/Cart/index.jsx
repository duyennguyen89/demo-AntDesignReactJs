import React from 'react';
import { useEffect } from 'react';
import { getCart } from '../../API';
import { Badge, Drawer, Table, InputNumber, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

AppCart.propTypes = {};

function AppCart() {
    const [cartDrawerOpen, setDrawerOpen] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getCart()
            .then((res) => {
                setCartItems(res.products || []);
            })
            .catch(() => {
                setCartItems([]);
            });
    }, []);

    // Tính tổng số sản phẩm trong cart
    const totalQuantity = cartItems.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);

    return (
        <div>
            <Badge onClick={() => {
                setDrawerOpen(true);
            }} count={totalQuantity}>
                <ShoppingCartOutlined style={{ fontSize: 24 }} />
            </Badge>
            <Drawer
                open={cartDrawerOpen}
                onClose={() => setDrawerOpen(false)}
                title="Cart Items"
                styles={{ wrapper: { width: '50%' } }}
            >
                <Table
                    rowKey="id"
                    pagination={false}
                    columns={[{
                        title: 'Title',
                        dataIndex: 'title',
                    }, {
                        title: 'Price',
                        dataIndex: 'price',
                        render: (value) => <span>${value}</span>
                    }, {
                        title: 'Quantity',
                        dataIndex: 'quantity',
                        render: (value, record) => (
                            <InputNumber
                                min={0}
                                step={1}
                                style={{ width: 80 }}
                                value={record.quantity}
                                onChange={(newQty) => {
                                    const qty = Math.max(0, Math.floor(Number(newQty)));
                                    setCartItems(prev =>
                                        prev.map(cart => {
                                            if (cart.id === record.id) {
                                                return {
                                                    ...cart,
                                                    quantity: qty
                                                };
                                            }
                                            return cart;
                                        })
                                    );
                                }}
                            />
                        )
                    }, {
                        title: 'Total',
                        dataIndex: 'total',
                        render: (value, record) => <span>${record.price * record.quantity}</span>
                    }]}
                    dataSource={cartItems.map(item => ({
                        // Không cần key, Table đã dùng rowKey="id"
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        quantity: item.quantity,
                        total: item.price * item.quantity,
                    }))}
                    summary={() => (
                        <Table.Summary.Row>
                            <Table.Summary.Cell index={0}>Total: ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)}</Table.Summary.Cell>
                        </Table.Summary.Row>
                    )}
                />
                <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                        setDrawerOpen(false);
                        navigate('/checkout');
                    }}
                >
                    Checkout Your Cart
                </Button>
            </Drawer>
        </div>
    );
}

export default AppCart;