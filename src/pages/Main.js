import { Card, Row, Col } from "antd";
import { Link } from 'react-router-dom';
import { useState } from "react";
import AppHeader from "../components/AppHeader";
import "./Main.css";

function Main() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // 여기서 검색 로직을 수행합니다.
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div>
      <AppHeader />
      <div className="first-container">
        <div className="card">
          <div className="card-header">
            <span className="card-title">▮ 자유게시판</span>
            <Link to="/WritingList">더보기</Link>
          </div>
          <div className="first-divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
          <div className="divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">▮ 자유게시판</span>
            <Link to="/WritingList">더보기</Link>
          </div>
          <div className="first-divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
          <div className="divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
        </div>

        <div className="extra-card">
          <input
            className="search-input"
            type="text" placeholder="전체 게시판에서 검색하기!"
            value={searchTerm}
            onChange={handleChange}
          />
          <Card>
            <span>
              <span>▮</span>
              <span>최신 검색 상위 랭킹</span>
            </span>
            <Row>
              <Col style={{ paddingRight: '100px' }}>
                <p><span >1.</span> 롤렉스</p>
                <p><span >2.</span> 베어브릭</p>
                <p><span >3.</span> 마샬</p>
                <p><span >4.</span> 한정판</p>
                <p><span >5.</span> 빈티지</p>
              </Col>
              <Col>
                <p><span >6.</span> 머그컵</p>
                <p><span >7.</span> 레고</p>
                <p><span >8.</span> 건담</p>
                <p><span >9.</span> 토미카</p>
                <p><span >10.</span> 원피스</p>
              </Col>
            </Row>
          </Card>
        </div>
      </div>

      <div className="second-container">
        <div className="card">
          <div className="card-header">
            <span className="card-title">▮ 자유게시판</span>
            <Link to="/WritingList">더보기</Link>
          </div>
          <div className="first-divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
          <div className="divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">▮ 자유게시판</span>
            <Link to="/WritingList">더보기</Link>
          </div>
          <div className="first-divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
          <div className="divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
        </div>

        <div className="extra-card">
          <div className="advertisement">
            광고가 들어갈 예정입니다.
          </div>
        </div>

      </div>

      <div className="second-container">
        <div className="card">
          <div className="card-header">
            <span className="card-title">▮ 자유게시판</span>
            <Link to="/WritingList">더보기</Link>
          </div>
          <div className="first-divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
          <div className="divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">▮ 자유게시판</span>
            <Link to="/WritingList">더보기</Link>
          </div>
          <div className="first-divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
          <div className="divider" />
          <p>오늘의 이야기</p>
          <div className="divider" />
          <p>다들 출퇴근시간 얼마나돼?</p>
          <div className="divider" />
          <p>스타벅스 5만원권</p>
          <div className="divider" />
          <p>대학교</p>
        </div>

        <div className="extra-card">
          <div className="advertisement">
            광고가 들어갈 예정입니다.
          </div>
        </div>
      </div>

    </div >
  )
}

export default Main