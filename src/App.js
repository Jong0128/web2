import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WritingPage from './pages/WritingPage';
import Main from './pages/Main';
import AgreementPage from './pages/AgreementPage';
import SignUp from './pages/SignUp';
import WritingList from './pages/WritingList';
import UserInfo from './pages/UserInfo';
import ActivityLog from './pages/ActivityLog';

function App() {
  return (
    <>
      {/* <UserInfo /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/WritingList" element={<WritingList />} />
          <Route path="/WritingPage" element={<WritingPage />} />
          <Route path="/AgreementPage" element={<AgreementPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/UserInfo" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
