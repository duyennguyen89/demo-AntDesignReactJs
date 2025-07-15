import React from 'react';
import { HomeFilled } from '@ant-design/icons';
import { Menu, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import AppCart from '../Cart';


AppHeader.propTypes = {};

function AppHeader({ cartCount = 0 }) {
    const navigate = useNavigate();
    const onMenuClick = (item) => {
        navigate(`/${item.key}`);
    }
    return (
        <div className='app__header'>
            <Menu
                onClick={onMenuClick}
                mode='horizontal'
                items={[
                    {
                        label: <HomeFilled />,
                        key: '',
                    },
                    {
                        label: 'Men',
                        key: 'men',
                        children: [
                            {
                                label: 'Men\'s Shirts',
                                key: 'mens-shirts',
                            },
                            {
                                label: 'Men\'s Shoes',
                                key: 'mens-shoes',
                            },
                            {
                                label: 'Men\'s Watches',
                                key: 'mens-watches',
                            },
                        ],
                    },
                    {
                        label: 'Women',
                        key: 'women',
                        children: [
                            {
                                label: 'Women\'s Dresses',
                                key: 'womens-dresses',
                            },
                            {
                                label: 'Women\'s Shoes',
                                key: 'womens-shoes',
                            },
                            {
                                label: 'Women\'s Watches',
                                key: 'womens-watches',
                            },
                        ],
                    },
                    {
                        label: 'Fragrances',
                        key: 'fragrances',
                    },
                ]}
            />

            <Typography.Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                    E-Commerce Store
                </span>
            </Typography.Title>
            <AppCart />
        </div>
    );
}

export default AppHeader;