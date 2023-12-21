import React from 'react';
import './LoginModal.css';
import { Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function LoginModal() {
  // 로그인 폼 디자인
  const loginFormStyle = {
    fontFamily: 'Noto Sans KR, sans-serif',
    width: 320,
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  };

  // 입력 필드 높이 조절
  const inputStyle = {
    height: 50, // 필요에 따라 높이를 조절하세요
    width : 300,
  };

  // 체크박스 폰트 굵게 설정
  const checkboxStyle = {
    fontWeight: 'bold',
  };

  return (
    <>
      <h1>로그인하기</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 23.3 }}
        style={loginFormStyle}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '아이디를 입력해주세요!',
            },
          ]}
        >
          <Input style={inputStyle} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요!',
            },
          ]}
        >
          <Input.Password style={inputStyle} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 1, span: 16 }}
        >
          <Checkbox style={checkboxStyle}>아이디 저장</Checkbox>
          <Checkbox style={checkboxStyle}>로그인 상태 유지</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <div className="btnCon">
            
            <button className="loginBtn">로그인</button>
            <br />
            <span className='findId'>아이디 찾기</span>
            <span>비밀번호 찾기</span>
            <Link to="/AgreementPage">
              <span className="signUpBtn">회원가입</span>
            </Link>
          </div>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginModal;
