import { Card, Divider, Space } from "antd";
import AppHeader from "../components/AppHeader";

function Main() {

  // 웹사이트 주요 컬러.
  const primaryColor = '#5D59FF'

  const firstCardStyle = {
    marginTop: '3rem',
    marginLeft: '10rem',
    width: '32rem',
  }

  const secondCardStyle = {
    marginTop: '3rem',
    marginLeft: '0.5rem',
    width: '32rem',
  }

  const firstColStyle = {
    marginTop: '0.5rem',
    marginLeft: '10rem',
    width: '32rem',
  }

  const secondColStyle = {
    marginTop: '0.5rem',
    marginLeft: '0.5rem',
    width: '32rem',
  }

  return (
    <div>
      <AppHeader />

      {/* 첫번째 열 게시판 */}
      <Space direction="vertical">
        <Card
          title={<span style={{ color: primaryColor }}>▮ 자유 게시판</span>}
          extra={<a href="/">더보기</a>}
          bordered={true}
          style={firstCardStyle}
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
          style={firstColStyle}
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
          style={firstColStyle}
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
          style={firstColStyle}
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
      </Space>

      {/* 두번째 열 게시판*/}
      <Space direction="vertical">
        <Card
          title={<span style={{ color: primaryColor }}>▮ 핫 게시판</span>}
          extra={<a href="/">더보기</a>}
          bordered={true}
          style={secondCardStyle}
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
          style={secondColStyle}
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
          style={secondColStyle}
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
          style={secondColStyle}
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
      </Space>

    </div >
  )
}

export default Main