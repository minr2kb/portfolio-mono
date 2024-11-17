type Props = {
  error: Error;
};

const ErrorPage = ({ error }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        color: '#333',
        fontFamily: 'Pretendard-Regular',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1>⚠️ Error</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
