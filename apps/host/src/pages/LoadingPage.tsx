import { BarLoader } from 'react-spinners';

const LoadingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#E7EFF6',
      }}
    >
      <BarLoader color="#44698C" />
    </div>
  );
};

export default LoadingPage;
