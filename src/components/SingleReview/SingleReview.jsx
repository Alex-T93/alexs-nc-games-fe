import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingContext } from '../../Contexts/Loading';
import { customGetRequest } from '../../utils/api';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard';
import Loading from '../Loading'
import './SingleReview.style.css'

const SingleReview = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url = `/reviews/${review_id}`;

    customGetRequest(url).then((reviewData) => {
      setSingleReview(reviewData.review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <Loading />;

  return (
    <section className='single-review-list'>
      <h2 className='single-review-header'> Reviews </h2>
      <SingleReviewCard singleReview={singleReview} setSingleReview={setSingleReview} key={singleReview.review_id} />
    </section>
  );
};

export default SingleReview;


