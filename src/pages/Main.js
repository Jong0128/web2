import { Card, Divider, Row, Col, Input, Carousel } from "antd";
import { SearchOutlined } from '@ant-design/icons';

function Main() {

  // 웹사이트 주요 컬러.
  const primaryColor = '#5D59FF'

  const rowStyle = {
    marginTop: '3rem',
    marginLeft: '9rem',
    marginRight: '9rem',
  }

  const cardStyle = {
    marginBottom: '1rem',
    marginLeft: '1rem',
  }

  const searchStyle = {
    marginLeft: '5rem',
    border: `1px solid ${primaryColor}`,
    borderRadius: '30px',
    width: '24rem',
  }

  const rankingStyle = {
    marginTop: '2rem',
    marginLeft: '5rem',
    width: '24rem',
  }

  const letterStyle = {
    paddingRight: '10px',
    color: primaryColor,
    fontWeight: 500,
  }

  const contentStyle = {
    height: '20rem',
    width: '24rem',
    color: '#fff',
    lineHeight: '20rem',
    textAlign: 'center',
    background: '#364d79',
  };

  const contentStyle2 = {
    height: '20rem',
    width: '24rem',
    color: '#fff',
    lineHeight: '42rem',
    textAlign: 'center',
    background: '#364d79',
    color: 'black',
    marginBottom: '3rem',
  };


  return (
    <div>
      <Row style={rowStyle}>

        {/* 첫번째 열 게시판 */}
        <Col span={8}>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 자유 게시판</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
            <Divider style={{ margin: "0.5rem 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 중고 장터</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
            <Divider style={{ margin: "0.5rem 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 게임</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
            <Divider style={{ margin: "0.5rem 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 전자</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
            <Divider style={{ margin: "0.5rem 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
          </Card>
        </Col>

        {/* 두번째 열 게시판 */}
        <Col span={8}>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 핫 게시판</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
            <Divider style={{ margin: "0.5rem 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 토이</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
            <Divider style={{ margin: "0.5rem 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 음악</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
            <Divider style={{ margin: "0.5rem 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
          </Card>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 기타</span>}
            extra={<a href="/">더보기</a>}
            bordered={true}
            style={cardStyle}
          >
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
            <Divider style={{ margin: "0.5rem 0" }} />
            오늘의 이야기
            <Divider style={{ margin: "0.5rem 0" }} />
            다들 출퇴근시간 얼마나돼?
            <Divider style={{ margin: "0.5rem 0" }} />
            스타벅스 5만원권
            <Divider style={{ margin: "0.5rem 0" }} />
            대학교
          </Card>
        </Col>
        <Col span={8}>
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
              <Col style={{ paddingRight: '7rem' }}>
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
          <Carousel autoplay style={{ marginLeft: "5rem" }}>
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
          <Carousel autoplay style={{ marginLeft: '5rem' }}>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '12rem' }}>1,000,000 ₩</span>
                <span>121명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '12rem' }}>2,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '12rem' }}>3,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '12rem' }}>4,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
          </Carousel>
          <Carousel autoplay style={{ marginLeft: '5rem' }}>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '12rem' }}>1,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '12rem' }}>2,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '12rem' }}>3,000,000 ₩</span>
                <span>1218명이 찜</span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle2}>
                <span style={{ marginRight: '12rem' }}>4,000,000 ₩</span>
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