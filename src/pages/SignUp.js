import AppHeader from "../components/AppHeader";
import { useState, useEffect } from "react";
import './SignUp.css';

function SignUp() {
  const [selectedOption, setSelectedOption] = useState('');
  const [timer, setTimer] = useState(3 * 60);
  const [isActive, setIsActive] = useState(false);
  const [userId, setUserId] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userIdMessage, setUserIdMessage] = useState("");
  const [userNickNameMessage, setUserNickNameMessage] = useState("");
  const [userEmailMessage, setUserEmailMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isResendActive, setIsResendActive] = useState(true);

  const handlePhoneCheck = () => {
    setIsActive(true);
    setIsResendActive(false);
    alert("인증번호를 보냈습니다.");
  };

  const handlePhoneResend = () => {
    alert("인증번호를 재전송했습니다.");
  };

  const handlePasswordBlur = () => {
    if (password === confirmPassword) {
      setPasswordMessage("비밀번호가 일치합니다.")
    } else {
      setPasswordMessage("비밀번호가 일치하지 않습니다.")
    }
  }

  const handleConfirmPasswordBlur = () => {
    if (password === confirmPassword) {
      setPasswordMessage("비밀번호가 일치합니다.")
    } else {
      setPasswordMessage("비밀번호가 일치하지 않습니다.")
    }
  }

  const handleCheckUserId = () => {
    if (userId.length >= 4 && userId.length <= 10) {
      setUserIdMessage("사용할 수 있는 아이디입니다.")
    }
    else {
      setUserIdMessage("아이디는 영문, 숫자포함 4~10자로 구성해주세요!")
    }
  }

  const handleCheckUserNickName = () => {
    if (userNickName.length >= 2 && userNickName.length <= 10) {
      setUserNickNameMessage("사용할 수 있는 닉네임입니다.")
    }
    else {
      setUserNickNameMessage("이미 사용 중인 닉네임입니다.")
    }
  }

  const handleCheckUserEmail = () => {
    // 이메일 유효성 검사를 위한 정규표현식
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(userEmail)) {
      setUserEmailMessage("사용할 수 있는 이메일입니다.")
    }
    else {
      setUserEmailMessage("유효하지 않은 이메일입니다.")
    }
  }

  const handleResend = () => {
    setTimer(3 * 60);
    setIsActive(true);
    setIsResendActive(false);
  };

  useEffect(() => {
    if (timer === 0) {
      setIsResendActive(true);
    }
  }, [timer]);

  useEffect(() => {
    let countdown = null;
    if (isActive && timer > 0) {
      countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(countdown);
    } else {
      setIsActive(false);
    }

    return () => clearInterval(countdown);
  }, [isActive, timer]);

  return (
    <div>
      <AppHeader />
      <div className="SignInfo">
        <span style={{ fontSize: '40px', fontWeight: '700' }}>회원가입</span> <br />
        <span style={{ fontSize: '20px', fontWeight: '400' }}>SELECTORS의 더 많은 기능을 사용하기 위해 가입하세요!</span>
        <div className="UserInfo">
          <h4>*표시된 항목은 필수 입력사항입니다.</h4>
          <label for="userName">이름*</label><br />
          <input type="text" className="userName" /><br />

          <label for="userId">아이디*</label>
          <span>{userIdMessage}</span><br />
          <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
          <button className="button doubleCheck" onClick={handleCheckUserId}>중복확인</button><br />

          <label for="userPassword">비밀번호*</label> <br />
          <input type="password" className="userPassword" value={password} onChange={e => setPassword(e.target.value)} onBlur={handlePasswordBlur} /><br />
          <span>비밀번호는 영문, 숫자, 특수문자 포함 6~20자로 구성해주세요!</span><br /><br />

          <label for="userPasswordCheck">비밀번호 확인*</label>
          <span>{passwordMessage}</span><br />
          <input type="password" className="userPasswordCheck" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} onBlur={handleConfirmPasswordBlur} /><br />

          <label for="userNickName">닉네임*</label>
          <span>{userNickNameMessage}</span><br />
          <input type="text" value={userNickName} onChange={e => setUserNickName(e.target.value)} />
          <button className="button doubleCheck" onClick={handleCheckUserNickName}>중복확인</button><br />
          <span>한글, 영문, 숫자 포함 2~10자로 구성해주세요. 띄어쓰기는 불가능합니다!</span><br /><br />

          <label htmlFor="userEmail">이메일*</label>
          <span>{userEmailMessage}</span><br />
          <input type="text" className="userEmail" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
          <span style={{ fontSize: '20px', marginLeft: '5px', marginRight: '5px' }}>@</span>
          {selectedOption === '직접입력' ? <input type="text" className="userEmail" /> : (
            <select onChange={(e) => setSelectedOption(e.target.value)}>
              <option>선택</option>
              <option>naver.com</option>
              <option>daum.net</option>
              <option>gmail.com</option>
              <option>hanmail.net</option>
              <option>직접입력</option>
            </select>
          )}
          <button className="button doubleCheck" onClick={handleCheckUserEmail}>중복확인</button><br />

          <label for="userPhone">휴대폰/전화번호*</label> <br />
          <select className="userPhone">
            <option>선택</option>
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
            <option>019</option>
          </select>
          <input type="text" className="userPhone" />
          <input type="text" className="userPhone" />
          <button onClick={() => { setIsActive(true); handlePhoneCheck(); }} className="button phoneCheck">번호 인증</button><br />

          <input type="text" className="vertifyNum" placeholder={timer > 0 ? `${Math.floor(timer / 60)}분 ${timer % 60}초` : "인증 시간이 만료되었습니다."} />

          <button className="button phoneCheck">인증하기</button>
          <button className="button resend" onClick={() => { handleResend(); handlePhoneResend(); }} disabled={!isResendActive}>재전송</button><br />

          <label for="userBirth">생년월일</label> <br />
          <input type="text" className="userBirth" placeholder="YYYYMMDD 형식으로 입력" /><br />

          <label for="userGender">성별</label> <br />
          <select className="userGender">
            <option>선택</option>
            <option>남자</option>
            <option>여자</option>
            <option>선택안함</option>
          </select><br />

          <label for="userAddress">주소</label> <br />
          <input type="text" className="userAddress" placeholder="클릭하여 주소 찾기" />
          <button className="button searchAddress">검색</button><br />
          <input type="text" className="userAddress" placeholder="상세주소칸 ex) xxx동 xxxx호" /><br />
        </div>
        <div className="SignUpBtn">
          <button>가입하기</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp