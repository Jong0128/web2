import AppHeader from "../components/AppHeader";
import { useState } from "react";
import './SignUp.css';
import { Card } from "antd";

const AgreementPage = ({ onNext }) => {
  const [agreement1, setAgreement1] = useState(false);
  const [agreement2, setAgreement2] = useState(false);
  const [agreement3, setAgreement3] = useState(false);

  const handleAgreement1Change = () => {
    setAgreement1(!agreement1);
  };

  const handleAgreement2Change = () => {
    setAgreement2(!agreement2);
  };

  const handleAgreement3Change = () => {
    setAgreement3(!agreement3);
  };

  const handleAgreeAll = () => {
    const allChecked = agreement1 && agreement2 && agreement3;
    setAgreement1(!allChecked);
    setAgreement2(!allChecked);
    setAgreement3(!allChecked);
  };

  const handleNextClick = () => {
    if (agreement1 && agreement2 && agreement3) {
      onNext();
    } else {
      alert('약관에 동의해주세요.');
    }
  };

  return (
    <div className="agreement-page">
      <h1>회원가입</h1>
      <h4>SELECTORS의 더 많은 기능을 사용하기 위해 가입하세요!</h4>

      <input
        type="checkbox"
        id="agreeAll"
        style={{ marginBottom: '20px'}}
        onChange={handleAgreeAll}
        checked={agreement1 && agreement2 && agreement3}
      />
      <label htmlFor="agreeAll">&nbsp;전체 동의하기</label>

      <div className="agreement-item">
        <label htmlFor="agreement1">이용약관</label>
        <Card className="agreement-card">
        </Card>
        <input
          type="checkbox"
          id="agreement1"
          checked={agreement1}
          onChange={handleAgreement1Change}
        />
        <label htmlFor="agreement1">&nbsp;동의함</label>
      </div>
      <div className="agreement-item">
        <label htmlFor="agreement2">개인정보 수집 및 이용 동의</label>
        <Card className="agreement-card">
        </Card>
        <input
          type="checkbox"
          id="agreement2"
          checked={agreement2}
          onChange={handleAgreement2Change}
        />
        <label htmlFor="agreement2">&nbsp;동의함</label>
      </div>
      <div className="agreement-item">
        <label htmlFor="agreement3">기타</label>
        <Card className="agreement-card">
        </Card>
        <input
          type="checkbox"
          id="agreement3"
          checked={agreement3}
          onChange={handleAgreement3Change}
        />
        <label htmlFor="agreement3">&nbsp;동의함</label>
      </div>
      <button onClick={handleNextClick}>다음</button>
    </div>
  );
};

function SignUp1() {
  const handleNext = () => {
    alert('다음 페이지로 이동합니다.');
  }
  return (
    <div>
      <AppHeader />
      <AgreementPage onNext={handleNext} />
    </div>
  )
}

export default SignUp1