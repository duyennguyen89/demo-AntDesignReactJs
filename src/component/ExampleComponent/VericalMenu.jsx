import React from 'react';
import { Input, Menu, Typography } from 'antd';

VericalMenu.propTypes = {};
const { Text } = Typography

function VericalMenu(props) {
    return (
        <div style={{ width: 500, marginTop: 50 }}>
            <Text strong>Vertical menu</Text>
            <Menu mode="inline" items={[
                {
                    label: (
                        <Input.Search placeholder='Search here..'></Input.Search>
                    ),
                    key: "search",
                },
                { label: "Home", key: "home" },
                {
                    label: "Dashboard", key: "dashboard",
                    children: [
                        { label: "Revenue", key: "rev" },
                        { label: "Expenses", key: "exp" },
                    ],
                },
                { label: "User Management", key: "user" },
                { label: "Signout", key: "signout" },
            ]}></Menu>
        </div >
    );
}

export default VericalMenu;