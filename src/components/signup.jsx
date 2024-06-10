import React, { useState } from 'react';
import { Form, Input, Button, Select, Typography } from 'antd';
import axiosClient from '../service/axios';

const { Title } = Typography;
const { Option } = Select;

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (values) => {
        try {
            console.log('Form values:', values);
            const res = await axiosClient.post('/api/users/register', values);
            console.log('Response:', res.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
            <Form
                name="signup"
                onFinish={handleSubmit}
                style={{ width: 300, padding: 24, background: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
            >
                <Title level={2} style={{ textAlign: 'center' }}>Signup</Title>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name="role"
                    rules={[{ required: true, message: 'Please select your Role!' }]}
                >
                    <Select
                        placeholder="Select a role"
                        value={role}
                        onChange={(value) => setRole(value)}
                    >
                        <Option value="user">User</Option>
                        <Option value="admin">Admin</Option>
                        <Option value="staff">Staff</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%', marginBottom: '10px' }}>
                        Signup
                    </Button>

                    <Button type="default" style={{ width: '100%' }} href="/">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Signup;
