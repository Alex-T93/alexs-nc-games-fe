
import { useContext } from "react";
import { LoadingContext } from '../../Contexts/Loading';
import Loading from "../Loading";
import './CommentCard.style.css'

const CommentsCard = (props) => {
    const { isLoading } = useContext(LoadingContext);
  
    const { comments } = props;
  
if (isLoading) return <Loading />;

  return (
    <section className='comments-list'>
      <ul className='comments-inner-list'>
        <li>
          <h3 id='comments-header'>Comment</h3>
          <p>{comments.body}</p>
          <h4>Votes: </h4>
          <p>{comments.votes}</p>
          <h4>Comment Author: </h4>
          <p>{comments.author}</p>
        </li>
      </ul>
    </section>
  );
};

export default CommentsCard;