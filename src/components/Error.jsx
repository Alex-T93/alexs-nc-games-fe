const ErrorComponent = (props) => {
    const { message } = props;
    return (
      <section>
        <h2 id='main-content'>Error</h2>
        <p>{message}</p>
        <img
          src='https://cdn-icons-png.flaticon.com/512/738/738884.png'
          height={200}
          width={200}
          alt={'An error icon'}
        />
      </section>
    );
  };
  
  export default ErrorComponent;