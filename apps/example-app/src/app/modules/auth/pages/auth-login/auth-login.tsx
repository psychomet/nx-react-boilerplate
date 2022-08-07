import React from 'react';
import styles from './auth-login.module.less';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
/* eslint-disable-next-line */
export interface AuthLoginProps {}

export function AuthLogin(props: AuthLoginProps) {
  const onFinish = async (values: any) => {
    const response = await axios.post('/api/authaccount/login', values);
    console.log('response', response);
  };

  return (
    <div className={styles['container']}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input type={'email'} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
