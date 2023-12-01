import { Button, Checkbox, Form } from 'antd'
import React from 'react'

function Step4Form({ onSubmit }) {
    const onFinish = (values) => {
        console.log(values);
        // Thêm logic xử lý khi nút Gửi được nhấp
        onSubmit(values);
      };
  return (
    <>
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Hoàn thành
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default Step4Form