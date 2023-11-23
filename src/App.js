import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WritingPage from './pages/WritingPage';
import Main from './pages/Main';
import AgreementPage from './pages/AgreementPage';
import SignUp from './pages/SignUp';
import WritingList from './pages/WritingList';
import MainFix from './pages/MainFix';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/WritingList" element={<WritingList />} />
          <Route path="/WritingPage" element={<WritingPage />} />
          <Route path="/AgreementPage" element={<AgreementPage />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;