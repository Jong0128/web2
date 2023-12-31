import { Card, Divider, Row, Col, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import AppHeader from "../components/AppHeader";


function MainFix() {

  // 웹사이트 주요 컬러.
  const primaryColor = '#5D59FF'

  // 게시글 카드 스타일
  const cardStyle = {
    marginBottom: '10px',
    marginLeft: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    width: '500px'
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
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  }

  // 랭킹 내 폰트 스타일
  const letterStyle = {
    paddingRight: '10px',
    color: primaryColor,
    fontWeight: 500,
  }


  return (
    <div>
      <AppHeader />

      <div style={{ display: 'flex', marginLeft: '3rem', marginTop: '2rem' }}>
        {/* 첫번째 열 게시판 */}
        <div>
          <Card
            title={<span style={{ color: primaryColor }}>▮ 자유 게시판</span>}
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
        </div>
        {/* 두번째 열 게시판 */}
        <div>
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
        </div>
        {/*검색바 랭킹 광고창 */}
        <div>
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
          
        </div>
      </div>
    </div >
  )
}

export default MainFix