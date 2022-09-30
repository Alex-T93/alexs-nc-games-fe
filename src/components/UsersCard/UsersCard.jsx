import { Link } from 'react-router-dom';
import './UsersCard.style.css';

const UsersCard = (props) => {
  const { user } = props;
  return (
    <section className='user-list'>
      <ul className='user-inner-list'>
        <li>
          <h3 id='user-title'>{user.username}</h3>
          <img
            className='user-image'
            src={user.avatar_url}
            width={200}
            alt={`An avatar for ${user.username}`}
          />
          <br />
          <Link to={`/users/${user.username}`}>
            View {user.username}s Profile
          </Link>
          <h4>{user.name} </h4>
        </li>
      </ul>
    </section>
  );
};



export default UsersCard;