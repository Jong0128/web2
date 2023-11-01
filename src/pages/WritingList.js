import React from 'react';
import { useState } from 'react';
import { Card, List, Typography, Input, Select, Button, Pagination } from 'antd';
import { FaFileImage, FaThumbsUp, FaVideo, FaComment } from "react-icons/fa6";
import AppHeader from "../components/AppHeader";
import { SearchOutlined } from '@ant-design/icons';

function WritingList() {
  const data = [
    '제목의 최대길이는 45자입니다. 그 이상 넘어가게되면 ...으로 처리',
    '좋아요 + 댓글 + 조회수 + 시간전은 숫자가 커질것을 대비해서 넉...',
    '넉하게 잡았습니다. 또한 검색옵션, 정렬은 클릭하여 바꿀수있게...',
    '하였습니다. 검색 옵션은 제목, 작성자, 제목+글 메뉴로 만들었고...',
    '정렬은 최신순, 추천순, 조회순, 댓글순 등으로 정리 해주시면 됩adkfnakldsfnkaldnfkasndlfnaslkdfnaskl',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];

  const { Option } = Select;

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  const totalPage = 50; // 총 페이지 수

  const primaryColor = '#5D59FF';

  const cardStyle = {
    width: '1000px',
    margin: '0 auto',
    marginTop: '50px',
    marginBottom: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  }

  const searchStyle = {
    border: '1px solid #d9d9d9',
    borderRadius: '30px',
    width: '400px',
    marginTop: '30px',
    marginBottom: '30px',
    marginLeft: '110px',
    height: '40px',
  }

  return (
    <div>
      <AppHeader />
      <Card title={<div style={{ fontSize: '35px', fontWeight: '800', marginBottom: '40px' }}>자유게시판</div>}
        style={cardStyle}
        extra={
          <div style={{ height: '150px' }}>
            <div>
              <Input
                style={searchStyle}
                placeholder="검색어를 입력해보세요!"
                prefix={<SearchOutlined />}
              />
            </div>
            <div style={{ marginLeft: '150px' }}>
              <span style={{ marginRight: '10px' }}>검색 옵션</span>
              <Select defaultValue="제목" style={{ width: 120, marginRight: '10px' }}>
                <Option value="제목">제목</Option>
                <Option value="작성자">작성자</Option>
                <Option value="제목+글">제목+글</Option>
              </Select>
              <span style={{ marginRight: '10px' }}>정렬</span>
              <Select defaultValue="최신순" style={{ width: 120 }}>
                <Option value="최신순">최신순</Option>
                <Option value="추천순">추천순</Option>
                <Option value="조회순">조회순</Option>
                <Option value="댓글순">댓글순</Option>
              </Select>
            </div>
          </div>
        }>
        <List
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item style={{ position: 'relative', borderBottom: '1px solid #d9d9d9', paddingBottom: '10px' }}>
              <Typography.Text style={{ marginRight: '10px' }}>[자유게시판]</Typography.Text>
              {item.length > 40 ? item.substring(0, 40) + "..." : item}
              {item && (
                <>
                  <FaFileImage style={{ marginTop: '4px', position: 'absolute', right: '380px' }} />
                  <FaVideo style={{ marginTop: '4px', position: 'absolute', right: '360px' }} />
                  <FaThumbsUp style={{ marginTop: '4px', position: 'absolute', right: '300px' }} />
                  <span style={{ position: 'absolute', right: '270px' }} >100</span>
                  <FaComment style={{ marginTop: '4px', position: 'absolute', right: '240px' }} />
                  <span style={{ position: 'absolute', right: '210px' }} >100</span>
                  <span style={{ position: 'absolute', right: '100px' }} >조회수 123456</span>
                  <span style={{ position: 'absolute', right: '30px' }} >1시간전</span>
                </>
              )}
            </List.Item>
          )}
        />
      </Card>
      <Button style={{ position: 'absolute', right: '450px', backgroundColor: primaryColor, color: 'white' }}>글 쓰기</Button>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px', marginBottom: '20px'}}>
        <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} onClick={() => setCurrentPage(1)}>처음으로</Button>
        <Pagination
          style={{textAlign: 'center' }}
          current={currentPage} // 현재 페이지 설정
          onChange={setCurrentPage} // 페이지 변경 핸들러 설정
          total={totalPage} // 총 페이지 수
          showSizeChanger={false} // 페이지 크기 변경 옵션 숨기기
        />
        <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} onClick={() => setCurrentPage(totalPage)}>맨끝으로</Button>
      </div>
    </div>
  )
}


export default WritingList;