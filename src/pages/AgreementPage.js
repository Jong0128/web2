import AppHeader from "../components/AppHeader";
import { useState } from "react";
import './AgreementPage.css';
import { Card } from "antd";
import { useNavigate } from 'react-router-dom';

const Agreement = ({ onNext }) => {
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

  const navigate = useNavigate();

  const handleNextClick = () => {
    if (agreement1 && agreement2 && agreement3) {
      onNext();
      navigate('/SignUp'); 
    } else {
      alert('약관에 동의해주세요.');
    }
  };

  return (
    <div className="agreement-page">
      <h1>회원가입</h1>
      <h4>SELECTORS의 더 많은 기능을 사용하기 위해 가입하세요!</h4>

      <p className="agreeAll">
        <input
          type="checkbox"
          id="agreeAll"
          onChange={handleAgreeAll}
          checked={agreement1 && agreement2 && agreement3}
        />
        <label htmlFor="agreeAll">&nbsp;전체 동의하기</label>

      </p>

      <div className="agreement-item">
        <h4>이용약관</h4>
        <Card className="agreement-card">
          <p style={{ margin: 0 }}>
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
          </p>
        </Card>
        <p className="agreeCheck">
          <input
            type="checkbox"
            id="agreement1"
            checked={agreement1}
            onChange={handleAgreement1Change}
          />
          <label htmlFor="agreement1">&nbsp;동의함</label>
        </p>

      </div>
      <div className="agreement-item">
      <h4>개인정보 수집 및 이용동의</h4>
        <Card className="agreement-card">
          <p style={{ margin: 0 }}>
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
          </p>
        </Card>
        <p className="agreeCheck">
          <input
            type="checkbox"
            id="agreement2"
            checked={agreement2}
            onChange={handleAgreement2Change}
          />
          <label htmlFor="agreement2">&nbsp;동의함</label>
        </p>
      </div>
      <div className="agreement-item">
        <h4>기타</h4>
        <Card className="agreement-card">
          <p style={{ margin: 0 }}>
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
            제1조(목적) 이 약관은 SELECTORS(이하 "회사")가 제공하는
            서비스(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다.
          </p>
        </Card>
        <p className="agreeCheck">
          <input
            type="checkbox"
            id="agreement3"
            checked={agreement3}
            onChange={handleAgreement3Change}
          />
          <label htmlFor="agreement3">&nbsp;동의함</label>
        </p>
      </div>
      <button className="nextButton" onClick={handleNextClick}>
        다음
        </button>
    </div>
  );
};

function AgreementPage() {
  const handleNext = () => {
    alert('다음 페이지로 이동합니다.');
  }
  return (
    <div>
      <AppHeader />
      <Agreement onNext={handleNext} />
    </div>
  )
}

export default AgreementPage