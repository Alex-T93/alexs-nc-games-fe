import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const username = 'Alex';
  const [isLoggedIn] = useState(true);

  const navigate = useNavigate();

  const handleReviewClick = (event) => {
    event.preventDefault();
    navigate(`/api/review`);
  };

  const handleProfileClick = (event) => {
    event.preventDefault();
    navigate(`/api/users/${username}`);
  };

  const handleCreateProfileClick = (event) => {
    event.preventDefault();
    navigate(`/api/create_account`);
  };

  return (
    <section className='homePage'>
    
      <h2>Homepage</h2>
      {isLoggedIn ? (
        <section>
          <h3>Welcome {username}</h3>

         
        
        <section>
            <h3>View Reviews</h3>
          <button className='top-button' onClick={handleReviewClick}>
            Reviews!{' '}
          </button>
        </section>

        <section>
            <h3>View Users!</h3>
          <button className='top-button' onClick={handleReviewClick}>
            Users!{' '}
          </button>
        </section>

        </section>
      ) : (
        <button className='top-button' onClick={handleCreateProfileClick}>
          Create a Profile{' '}
        </button>
      )}
  
    </section>
  );
};



export default Home;
