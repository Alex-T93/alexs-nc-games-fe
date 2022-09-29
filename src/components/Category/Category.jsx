import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingContext } from '../../Contexts/Loading';
import { customGetRequest } from '../../utils/api';
import ReviewsCard from '../ReviewsCards/ReviewsCard';
import Loading from '../Loading';
import './Category.style.css'
const Category = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { category_slug } = useParams();
  const [reviewByCategory, setReviewByCategory] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url = '/reviews';
    const params = {
      category: category_slug,
    };
    customGetRequest(url, { params }).then((categoryData) => {
        setReviewByCategory(categoryData.reviews);
      setIsLoading(false);
    });
  }, [category_slug]);

  if (isLoading) return <Loading />;

  return (
    <section className='reviews-list'>
        
      <h2 className='reviews-header'> Reviews </h2>
      <ul className= 'reviews-list'>
        {reviewByCategory.map((review) => {
          return <ReviewsCard review={review} key={review.review_id} />;
        })}
      </ul>
    </section>
  );
};

export default Category;