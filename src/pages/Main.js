import { Card, Divider, Row, Col, Input, Carousel } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AppHeader from "../components/AppHeader";

function Main() {

  // 웹사이트 주요 컬러.
  const primaryColor = '#5D59FF'

  // 전체 게시글 모음 스타일
  const rowStyle = {
    marginTop: '60px',
    marginLeft: '180px',
    marginRight: '180px',
  }

  // 게시글 카드 스타일
  const cardStyle = {
    marginBottom: '10px',
    marginLeft: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  }

  // 검색 창 스타일
  const searchStyle = {
    marginLeft: '80px',
    border: `1px solid ${primaryColor}`,
    borderRadius: '30px',
    width: '400px',
  }

  // 랭킹 스타일
  const rankingStyle = {
    marginTop: '30px',
    marginLeft: '80px',
    width: '400px',
  }

  // 랭킹 내 폰트 스타일
  const letterStyle = {
    paddingRight: '10px',
    color: primaryColor,
    fontWeight: 500,
  }

  // 광고 스타일
  const contentStyle = {
    height: '300px',
    width: '300px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
  };

  // 판매 글 스타일
  const contentStyle2 = {
    height: '300px',
    width: '300px',
    lineHeight: '620px',
    textAlign: 'center',
    background: '#364d79',
    color: 'black',
    marginBottom: '40px',
  };


  return (
    <div>
      <AppHeader />
      <Row style={rowStyle}>

        {/* 첫번째 열 게시판 */}
        <Col style={{ width: '500px' }}>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 자유 게시판</span>}
            extra={<Link to="/WritingList"><li>더보기</li></Link>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
            <Divider style={{ margin: "8px 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 중고 장터</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
            <Divider style={{ margin: "8px 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 게임</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
            <Divider style={{ margin: "8px 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 전자</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
            <Divider style={{ margin: "8px 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
          </Card>
        </Col>
        {/* 두번째 열 게시판 */}
        <Col style={{ width: '500px' }}>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 핫 게시판</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
            <Divider style={{ margin: "8px 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 토이</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
            <Divider style={{ margin: "8px 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 음악</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
            <Divider style={{ margin: "8px 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 기타</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
            <Divider style={{ margin: "8px 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "8px 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "8px 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "8px 0" }} />
            대학교
          </Card>
        </Col>
        <Col style={{ width: '500px' }}>
          <Input
            style={searchStyle}
            placeholder="전체 게시판에서 검색하기!"
            prefix={<SearchOutlined />}
          />
          <Card
            style={rankingStyle}
          >
            <span>
              <span style={letterStyle}>▮</span>
              <span>최신 검색 상위 랭킹</span>
            </span>
            <Row>
              <Col style={{ paddingRight: '100px' }}>
                <p><span style={letterStyle} >1.</span>롤렉스</p>
                <p><span style={letterStyle} >2.</span>베어브릭</p>
                <p><span style={letterStyle} >3.</span>마샬</p>
                <p><span style={letterStyle} >4.</span>한정판</p>
                <p><span style={letterStyle} >5.</span>빈티지</p>
              </Col>
              <Col>
                <p><span style={letterStyle} >6.</span>머그컵</p>
                <p><span style={letterStyle} >7.</span>레고</p>
                <p><span style={letterStyle} >8.</span>건담</p>
                <p><span style={letterStyle} >9.</span>토미카</p>
                <p><span style={letterStyle} >10.</span>원피스</p>
              </Col>
            </Row>
          </Card>
          <Carousel autoplay style={{ marginLeft: "80px" }}>
            <div>
              <h3 style={contentStyle}>광고 1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>광고 2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>광고 3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>광고 4</h3>
            </div>
          </Carousel>
          <Carousel autoplay style={{ marginLeft: '80px' }}>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '20px' }}>1,000,000 ₩</span>
                <span>121명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '20px' }}>2,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '20px' }}>3,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '20px' }}>4,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
          </Carousel>
          <Carousel autoplay style={{ marginLeft: '80px' }}>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '20px' }}>1,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '20px' }}>2,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '20px' }}>3,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '20px' }}>4,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div >
  )
}

export default Main