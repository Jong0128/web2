import PageContent from './components/PageContent';
import AppFooter from './components/AppFooter';
import Navbar from './components/AppHeader';
import './App.css'


function App() {
  return (
    <div className='App'>
      <Navbar />
      <PageContent />
      <AppFooter />
    </div>
    );
}

export default App;
