import { useDispatch } from 'react-redux';
import { useGetMe } from './hooks/useUser';
import Auth from './components/compound/Auth';
import LoadingPage from './components/common/LoadingPage';
import View from './View';
import { loginUser } from './store/authReducer';

function App() {
  const { status, user: userData } = useGetMe();
  const dispatch = useDispatch();

  if (!userData) {
    if (status === 'loading' || status === 'idle') {
      return <LoadingPage />;
    }
    return <Auth />;
  }

  dispatch(loginUser(userData));
  return <View />;
}

export default App;
