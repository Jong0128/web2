import React, { useState } from 'react';
import { Card, List, Typography, Button, Pagination } from 'antd';
import AppHeader from "../components/AppHeader";

function 활동로그() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 50; // 총 50페이지의 활동 로그가 있다고 가정합니다.

  const primaryColor = '#5D59FF';

  const cardStyle = {
    width: '1000px',
    margin: '0 auto',
    marginTop: '50px',
    marginBottom: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontFamily: 'Noto Sans KR',
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '32px',
    letterSpacing: '0em',
    textAlign: 'left',
    marginTop : '20px',
  };

  const categoryButtonStyle = {
    marginRight: '20px',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 700,
  };

  const activityData = [
    { type: '유형', content: '내용', date: '날짜' },
    { type: '게시글', content: '게시글 A를 작성했습니다.', date: '2024-01-25' },
    { type: '댓글', content: '게시글 B에 댓글을 남겼습니다.', date: '2024-01-25' },
    { type: '좋아요', content: '게시글 C에 좋아요를 눌렀습니다.', date: '2024-01-25' },
    { type: '댓글', content: '사용자 A가 당신의 글에 댓글을 남겼습니다.', date: '2024-01-25' },
    { type: '저장됨', content: '게시글 D를 저장했습니다.', date: '2024-01-25' },
    { type: '임시저장', content: '게시글 E를 임시 저장했습니다.', date: '2024-01-25' },
    // 필요한 만큼 활동 로그 아이템을 추가하세요
  ];

  const [currentCategory, setCurrentCategory] = useState('전체보기');

  const filterDataByCategory = (category) => {
    if (category === '전체보기') {
      return activityData;
    } else {
      return activityData.filter(item => item.type === category);
    }
  };

  return (
    <div>
      <AppHeader />
      <Card
        title={<div style={titleStyle}>활동 로그
        <div style={{fontSize:"20px", fontWeight:400, marginTop:"5px", paddingBottom:"10px"}}>사용자의 활동로그를 볼 수 있습니다.</div></div>}
         
        style={cardStyle}
      >
        <Button
          style={categoryButtonStyle}
          onClick={() => setCurrentCategory('전체보기')}
        >
          전체보기
        </Button>
        <Button
          style={categoryButtonStyle}
          onClick={() => setCurrentCategory('게시글')}
        >
          게시글
        </Button>
        <Button
          style={categoryButtonStyle}
          onClick={() => setCurrentCategory('댓글')}
        >
          댓글
        </Button>
        <Button
          style={categoryButtonStyle}
          onClick={() => setCurrentCategory('좋아요')}
        >
          좋아요
        </Button>
        <Button
          style={categoryButtonStyle}
          onClick={() => setCurrentCategory('알람')}
        >
          알람
        </Button>
        <Button
          style={categoryButtonStyle}
          onClick={() => setCurrentCategory('저장됨')}
        >
          저장됨
        </Button>
        <Button
          style={categoryButtonStyle}
          onClick={() => setCurrentCategory('임시저장')}
        >
          임시저장
        </Button>
        <br />
        <br />
        <List
          bordered
          dataSource={filterDataByCategory(currentCategory)}
          renderItem={(item) => (
            <List.Item style={{ position: 'relative', borderBottom: '1px solid #d9d9d9', paddingBottom: '10px' }}>
              <Typography.Text style={{ fontFamily: 'Noto Sans KR', fontSize: '18px', fontWeight: 700 }}>{item.type}</Typography.Text>
              <Typography.Text>{item.content}</Typography.Text>
              <Typography.Text style={{ marginLeft: '20px' }}>{item.date}</Typography.Text>
            </List.Item>
          )}
        />
      </Card>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
        <Button style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }} onClick={() => setCurrentPage(1)}>첫 페이지로</Button>
        <Pagination
          style={{ textAlign: 'center' }}
          current={currentPage}
          onChange={setCurrentPage}
          total={totalPage}
          showSizeChanger={false}
        />
        <Button style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }} onClick={() => setCurrentPage(totalPage)}>마지막 페이지로</Button>
      </div>
    </div>
  )
}

export default 활동로그;
