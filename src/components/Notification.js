import React from 'react';
import { Form, Avatar, List } from 'antd';

const data = [
  {
    title: 'Avatar1'
  },
  {
    title: 'Avatar2',
  },
  {
    title: 'Avatar3',
  },
  {
    title: 'Avatar4',
  },
];


function Notification() {

  const notificationStyle = {
    fontFamily: 'Noto Sans KR, sans-serif',
    width: '350px',
  }

  const listItemStyle = {
    whiteSpace: 'break-spaces',
  }

  return (
    <Form
      name="basic"
      style={notificationStyle}
    >
      <List
        itemLayout='horizontal'
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item style={listItemStyle}>
            <List.Item.Meta
              avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
              title={<a href="/">{item.title}</a>}
              description="여기에는 알람 내용이 들어올 예정입니다."
            />
          </List.Item>
        )}
      />
    </Form>
  )
};

export default Notification