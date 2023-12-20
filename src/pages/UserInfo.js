import React from 'react';
import { useState } from 'react';
import './UserInfo.css';
import AppHeader from '../components/AppHeader';

function UserInfo() {
  const [userId, setUserId] = useState('');
  const [userNickName, setUserNickName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userIdMessage, setUserIdMessage] = useState('');
  const [userNickNameMessage, setUserNickNameMessage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const handlePasswordBlur = () => {
    if (password === confirmPassword) {
      setPasswordMessage('비밀번호가 일치합니다.');
    } else {
      setPasswordMessage('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (password === confirmPassword) {
      setPasswordMessage('비밀번호가 일치합니다.');
    } else {
      setPasswordMessage('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleCheckUserId = () => {
    if (userId.length >= 4 && userId.length <= 10) {
      setUserIdMessage('사용할 수 있는 아이디입니다.');
    } else {
      setUserIdMessage('아이디는 영문, 숫자포함 4~10자로 구성해주세요!');
    }
  };

  const handleCheckUserNickName = () => {
    if (userNickName.length >= 2 && userNickName.length <= 10) {
      setUserNickNameMessage('사용할 수 있는 닉네임입니다.');
    } else {
      setUserNickNameMessage('이미 사용 중인 닉네임입니다.');
    }
  };

  return (
    <div>
      <AppHeader />
      <div className="UserInfo">
        <span style={{ fontSize: '36px', fontWeight: '700' }}>개인정보</span>
        <br />
        <span>개인정보를 수정할 수 있습니다.</span>
        <br />
        <br />
        <label for="userId">아이디</label>
        <span className={userIdMessage === '사용할 수 있는 아이디입니다.' ? 'validInput' : 'invalidInput'}>
          {userIdMessage}
        </span>
        <br />
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button className="button doubleCheck" onClick={handleCheckUserId}>
          중복확인
        </button>
        <br />
        <br />
        <label for="userPassword">비밀번호</label>
        <span style={{ fontSize: "14px" }}>비밀번호는 영문, 숫자, 특수문자 포함 6~20자로 구성해주세요!</span>
        <br />
        <input
          type="password"
          className="userPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
        />
        <br />
        <br />
        <label for="userPasswordCheck">비밀번호 확인</label>
        <span className={passwordMessage === '비밀번호가 일치합니다.' ? 'validInput' : 'invalidInput'}>
          {passwordMessage}
        </span>
        <br />
        <input
          type="password"
          className={'userPasswordCheck'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={handleConfirmPasswordBlur}
        />
        <br />
        <br />
        <label for="userBirthnGender">생년월일/성별</label>
        <br />
        <input type="text" className="userBirth" placeholder="YYYYMMDD 형식" />
        <select className="userGender">
          <option>선택안함</option>
          <option>남자</option>
          <option>여자</option>
        </select>
        <br />
        <br />
        <label for="userAddress">주소</label> <br />
        <input type="text" className="userAddress" placeholder="클릭하여 주소 찾기" />
        <button className="button searchAddress">검색</button>
        <br />
        <input type="text" className="userAddress" placeholder="상세주소칸 ex) xxx동 xxxx호" />
        <br />
        <br />
        <label for="userPhone">전화번호</label> <br />
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
        <br />
        <br />
        <label htmlFor="userEmail">이메일</label>

        <br />
        <input
          type="text"
          className="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <button className="deleteAccount">회원탈퇴</button>

      <div className="userProfile">
        <span style={{ fontSize: '36px', fontWeight: '700' }}>프로필 설정</span>
        <br />
        <span>닉네임, 프로필사진 변경 및 레벨을 확인할 수 있습니다.</span>
        <br />
        <br />
        <label for="userNickName">닉네임</label>
        <span
          className={
            userNickNameMessage === '사용할 수 있는 닉네임입니다.' ? 'validInput' : 'invalidInput'
          }
        >
          {userNickNameMessage}
        </span>
        <br />
        <input type="text" value={userNickName} onChange={(e) => setUserNickName(e.target.value)} />
        <button className="button doubleCheck" onClick={handleCheckUserNickName}>
          중복확인
        </button>
        <br />
        <br />
        <label for="profileImage">프로필 사진</label>
        <br />
        <br />
        <img src="https://via.placeholder.com/150" alt="profileImage" />
        <br />
        <button className='selectFile'> 파일 선택 </button>
        <br />
        <br />
        <label for="userLevel">LV</label>
        <span style={{ fontSize: '24px', fontWeight: '700' }}>1</span>
      </div>

      <div className="paymentInfo">
        <span style={{ fontSize: '36px', fontWeight: '700' }}>결제 수단</span>
        <br />
        <span>결제 수단을 추가하거나 변경할 수 있습니다.</span>
        <br />
        <br />
        <label for="userCard">카드</label>
      </div>

      <button className='changeInfo'>정보 수정</button>
    </div>
  );
};

export default UserInfo;
