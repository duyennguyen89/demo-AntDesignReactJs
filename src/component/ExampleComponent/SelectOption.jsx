import React from 'react';
import { Button, Input, Select, Typography } from "antd";
import { UserOutlined } from '@ant-design/icons';

SelectOption.propTypes = {};
const { Text } = Typography;

function SelectOption(props) {
    const fruits = ['Banana', 'Mango', 'Orange', 'Cherry'];

    return (
        <div style={{ padding: 24 }}>
            <h1>Hello Ant Design</h1>
            <Button type="link">Click me</Button>

            <Input.Search
                placeholder="Name"
                maxLength={10}
                prefix={<UserOutlined />}
            />

            <div className='select__div'>
                <Text strong>Select Option</Text><br />
                <Select
                    style={{ width: 300 }}
                    placeholder="Select fruits"
                >
                    {fruits.map((fruit, index) => (
                        <Select.Option key={index} value={fruit}>
                            {fruit}
                        </Select.Option>
                    ))}
                </Select>
            </div>
        </div>
    );
}

export default SelectOption;