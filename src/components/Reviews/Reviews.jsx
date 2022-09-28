import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../../Contexts/Loading';
import { customGetRequest } from '../../utils/api';
import ReviewsCard from '../ReviewCard/ReviewsCard';
import Loading from '../Loading';
import './Reviews.styles.css';

const Reviews = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url = '/reviews';
    customGetRequest(url).then((reviewsData) => {
      setReview(reviewsData.reviews);
      setIsLoading(false);
    });
  },[]);

  if (isLoading) return <Loading />;

  return (
    <section className='review-list'>
      <h2 className='review-header'> Reviews </h2>
      <ul className='list-grid'>
        {reviews.map((reviews) => {
          return <ReviewsCard review={reviews} key={reviews.review_id} />;
        })}
      </ul>
    </section>
  );
};

export default Reviews;