import AppHeader from "../components/AppHeader";
import { useState } from "react";
import './SignUp.css';

function SignUp() {
return (
    <div>
      <AppHeader />
      <div className="SignInfo">
      <h1>회원가입</h1>
      <h4>SELECTORS의 더 많은 기능을 사용하기 위해 가입하세요!</h4>
    </div>
    </div>
  )
} 

export default SignUp;