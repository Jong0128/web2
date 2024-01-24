import './AfterLogin.css';
import { Link, useNavigate } from 'react-router-dom';

function AfterLogin() {

    const navigate = useNavigate();

    const handleLogout = () => {
        // 로그아웃 처리를 여기서 수행합니다.
        // 예: 토큰을 제거하거나 백엔드 서버에 로그아웃 요청을 보냅니다.

        // 로그인 페이지로 리다이렉트합니다.
        navigate('/');
    };


    return (
        <div className="afterlogin-container">
            <div className='level-icon'>
                <span className='user-level'>LV. 100</span>
            </div>
            <span className='user-name'>김예지</span>
            <br />
            <Link to="/UserInfo">
                <button className='afterlogin-btn'>개인정보 수정</button>
            </Link>
            <br />
            <Link to="/ActivityLog">
                <button className='afterlogin-btn'>활동로그</button>
            </Link>
            <br />
            <button className='afterlogin-btn' onClick={handleLogout}>로그아웃</button>
        </div>
    )
}

export default AfterLogin;