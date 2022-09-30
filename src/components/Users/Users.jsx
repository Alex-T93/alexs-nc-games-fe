import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../../Contexts/Loading';
import { customGetRequest } from '../../utils/api';
import UsersCard from '../UsersCard/UsersCard';
import Loading from '../Loading';
import './Users.style.css';

const Users = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [users, setUsers] = useState([]);
  let uniqueKey = 0

  useEffect(() => {
    setIsLoading(true);
    const url = '/users';
    customGetRequest(url).then((usersData) => {
      setUsers(usersData.users);
      setIsLoading(false);
    });
  },[]);

  if (isLoading) return <Loading />;

  return (
    <section className='users-list'>
      <h2 className='users-header'> Users </h2>
      <ul className='users-list'>
        {users.map((users) => {
          uniqueKey++;
          return <UsersCard user={users} key={uniqueKey}  />;
        })}
      </ul>
    </section>
  );
};

export default Users;