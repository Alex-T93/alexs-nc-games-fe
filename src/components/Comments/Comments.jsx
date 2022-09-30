import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../../Contexts/Loading';
import { customGetRequest } from '../../utils/api';
import CommentCard from '../CommentCard/CommentCard';
import Loading from '../Loading';
import { useParams } from 'react-router-dom';
import './Comments.style.css'

const Comments = () => {
    const { review_id } = useParams();
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [comments, setComment] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url = `/reviews/${review_id}/comments`;
    customGetRequest(url).then((commentsData) => {
        setComment(commentsData.comments);
      setIsLoading(false);
    });
  },[]);

  if (isLoading) return <Loading />;

  return (
    <section className='comments-list'>
      <h2 className='comments-header'> Comments </h2>
      <ul className='comments-list'>
        {comments.map((comments) => {
          return <CommentCard comments={comments} key={comments.comment_id} />;
        })}
      </ul>
    </section>
  );
};

export default Comments;