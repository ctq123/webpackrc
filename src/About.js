import React from 'react'
import { Form, Switch, Slider, Button } from 'antd'
import { Link } from 'react-router'
import './About.css'

class About extends React.PureComponent {
  render () {
    return (
      <Form>
        <Form.Item
          label='开关'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item
          label='滑动输入条'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </Form.Item>
        <Form.Item
          label='logo'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <div className='img-logo' title='logo图片' />
        </Form.Item>
        <Form.Item
          style={{ marginTop: 48 }}
          wrapperCol={{ span: 8, offset: 8 }}
        >
          <Button type='primary' htmlType='submit'>
            确定
          </Button>
          <Button style={{ marginLeft: 8 }}>
            取消
          </Button>
        </Form.Item>
        <Form.Item
          label='转跳'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <div className='item-link-con'>
            <Link to={'/app'}>返回主页面</Link>
          </div>
        </Form.Item>
      </Form>
    )
  }
}

export default About
