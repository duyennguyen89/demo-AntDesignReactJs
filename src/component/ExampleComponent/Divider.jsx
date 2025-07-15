import React from 'react';
import { Divider } from 'antd';

DividerTypograp.propTypes = {};

function DividerTypograp(props) {
    return (
        <div>
            <p>
                Ớt chuông mang lại nhiều lợi ích cho sức khỏe. Màu sắc của loại rau củ rực rỡ thuộc họ cà này thay đổi tùy thuộc vào độ chín của chúng.
            </p>
            <Divider style={{ borderColor: "blue" }} />
            <p>
                Ớt chuông mang lại nhiều lợi ích cho sức khỏe. Màu sắc của loại rau củ rực rỡ thuộc họ cà này thay đổi tùy thuộc vào độ chín của chúng.
            </p>
            <Divider style={{ borderColor: "red" }}>Text</Divider>
            <p>
                Ớt chuông mang lại nhiều lợi ích cho sức khỏe. Màu sắc của loại rau củ rực rỡ thuộc họ cà này thay đổi tùy thuộc vào độ chín của chúng.
            </p>
            <Divider style={{ borderColor: "green" }} orientation='left'>Text Left</Divider>
            <p>
                Ớt chuông mang lại nhiều lợi ích cho sức khỏe. Màu sắc của loại rau củ rực rỡ thuộc họ cà này thay đổi tùy thuộc vào độ chín của chúng.
            </p>
            <Divider style={{ borderColor: "orange" }} orientation='right' orientationMargin={100}>Text Right</Divider>
            <p>
                Ớt chuông mang lại nhiều lợi ích cho sức khỏe. Màu sắc của loại rau củ rực rỡ thuộc họ cà này thay đổi tùy thuộc vào độ chín của chúng.
            </p>
            <Divider style={{ borderColor: "blue" }} />
            <div>
                <span>Link</span>
                <Divider style={{ borderColor: "red" }} type='vertical'>Text</Divider>
                <span>Link</span>
                <Divider style={{ borderColor: "red" }} type='vertical'>Text</Divider>
                <span>Link</span>
                <Divider style={{ borderColor: "red" }} type='vertical'>Text</Divider>
                <span>Link</span>
                <Divider style={{ borderColor: "red" }} type='vertical'>Text</Divider>
                <span>Link</span>
            </div>
        </div>
    );
}

export default DividerTypograp;