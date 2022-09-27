import { Link } from 'react-router-dom';
import './reviewCard.styles.css';

const ReviewsCard = (props) => {
  const { review } = props;
console.log(review)
  return (
    <section className='review-list'>
      <ul className='review-list'>
        <li>
          <h3 id='review-title'>{review.title}</h3>
          <h4>Designer: </h4>
          <p>{review.designer}</p>
          <h4>Categorey: </h4>
          <p>{review.category}</p>
          <h4>Comment Count: </h4>
          <p>{review.comment_count}</p>
          <h4>Votes: </h4>
          <p>{review.votes}</p>
          <Link to={`/api/reviews/${review.review_id}`}>
            Find out more about this Review
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default ReviewsCard;