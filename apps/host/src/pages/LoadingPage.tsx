const LoadingPage = () => {
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
      <h1>🔄 Loading...</h1>
      {/* <p>Please wait while we load the content.</p> */}
    </div>
  );
};

export default LoadingPage;
