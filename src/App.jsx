import { useSelector } from 'react-redux';
import { useGetMe } from './hooks/useUser';
import Auth from './components/compound/Auth';
import LoadingPage from './components/common/LoadingPage';
import View from './View';

function App() {
  const { status } = useGetMe();
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    if (status === 'loading' || status === 'idle') {
      return <LoadingPage />;
    }
    return <Auth />;
  }

  return <View />;
}

export default App;
