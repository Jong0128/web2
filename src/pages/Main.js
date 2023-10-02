import { Card, Divider, Row, Col } from "antd";
import AppHeader from "../components/AppHeader";

function Main() {

  // 웹사이트 주요 컬러.
  const primaryColor = '#5D59FF'

  const rowStyle = {
    marginTop: '3rem',
    marginLeft: '10rem',
  }

  const cardStyle = {
    marginBottom: '1rem',
    marginLeft: '1rem',
  }

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
      </Row>
    </div >
  )
}

export default Main