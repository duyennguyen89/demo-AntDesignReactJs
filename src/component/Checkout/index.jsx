import React from 'react';
import { Form, Button, Input, Typography } from 'antd';

AppCheckout.propTypes = {};

const { Title } = Typography;

function AppCheckout(props) {
    const onConfirmOrder = (values) => {
        console.log({ values });
    }
    return (
        <div className='app__checkout'>
            <Title level={2} style={{ margin: 50, maxWidth: 600, textAlign: 'center' }}>Confirm Order</Title>
            <Form
                onFinish={onConfirmOrder}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Full Name"
                    name="fullname"
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                    <Input placeholder="Enter your full name" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email!' }
                    ]}
                >
                    <Input placeholder="Enter your full email" />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                    <Input placeholder="Enter your full address" />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Confirm Order
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
}

export default AppCheckout;