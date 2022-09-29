import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = (props) => {
  const { setIsError, setError, setIsLoading } = props;

  const handleError = () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);
  };

  return (
    <section className='nav'>
      <nav >
   
          <Link to='/api/'>Home</Link>
          <Link to='/api/create_account' onClick={handleError}>
            Create an account
          </Link>
          <Link to='/api/categories'>Categories</Link>
          <Link to='/api/reviews'>Reviews</Link>
          <Link to='/api/users'>Users</Link>
      </nav>
    </section>
  );
};

export default Nav;

