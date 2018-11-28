import React from 'react';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
import { Link } from 'react-router'
import './App.css';

const { Option } = Select;

class App extends React.PureComponent {
  render() {
    return (
      <Form>
        <Form.Item
          label="数字输入框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber min={1} max={10} defaultValue={3} />
          <span className="ant-form-text"> 台机器</span>
          <a href="https://ant.design">链接文字</a>
        </Form.Item>
        <Form.Item
          label="开关"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item
          label="滑动输入条"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </Form.Item>
        <Form.Item
          label="选择器"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select defaultValue="lucy" style={{ width: 192 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>disabled</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="日期选择框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="logo"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <img src='../assets/img/smart_notice.gif' alt='logo图片' />
        </Form.Item>
        <Form.Item
          style={{ marginTop: 48 }}
          wrapperCol={{ span: 8, offset: 8 }}
        >
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          <Button style={{ marginLeft: 8 }}>
            取消
          </Button>
        </Form.Item>
        <Form.Item
          label="转跳"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <div className='App-link'>
            <Link to={'/about'}>转跳其他页面</Link>
          </div>
        </Form.Item>
      </Form>
    )
  }
}

export default App;
