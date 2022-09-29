import { useState } from 'react';
import { customPatchRequest } from '../../utils/api';
import './SingleReviewCard.style.css';

const SingleReviewCard = (props) => {
  const { singleReview } = props;
 
  const [vote, setVote] = useState(singleReview.votes);

  const handleClick = (num) => {
    setVote((vote) => (vote += num)) ;
    customPatchRequest(singleReview.review_id, num)
    .catch(() => {
      setVote((vote) => (vote -= num)
    );
  })
};
  return (
    <section className='review-list'>
      <ul className='review-card-list'>
        <li>
          <h3 id='review-title'>{singleReview.title}</h3>
          <br />
          <h4>Designer: </h4>
          <p>{singleReview.designer}</p>
          <br />
          <h4>Categorey: </h4>
          <p>{singleReview.category}</p>
          <br />
          <h4>Comment Count: </h4>
          <p>{singleReview.comment_count}</p>
          <br />
          <h4>Votes: </h4>
          <p>{vote}</p>
          <button onClick={() => handleClick(1)}>Up Vote!</button>
          <button onClick={() => handleClick(-1)}>Down Vote! </button>
          <br />
          <img
          src={singleReview.review_img_url
          }
          width={100}
          alt={`An icon for ${singleReview.title}`}
          className={'review-image'}
        />
        </li>
      </ul>
    </section>
  );
};

export default SingleReviewCard;