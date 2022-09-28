import { Link } from 'react-router-dom';

const CategoriesCard = (props) => {
  const { category } = props;

  return (
    <section className='category-list'>
      <li>
        <h3 id='category-title'>{category.slug}</h3>
        <h4>Description: </h4>
        <p>{category.description}</p>
        <Link to={`/api/reviews${category.slug}`}>
          View all Reviews for {category.slug}
        </Link>
      </li>
    </section>
  );
};

export default CategoriesCard;