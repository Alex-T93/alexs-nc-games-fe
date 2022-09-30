
import { useContext, useEffect } from 'react';
import { customGetRequest } from '../../utils/api';
import Loading from '../Loading';
import { LoadingContext } from '../../Contexts/Loading';
import CategoriesCards from '../CategoriesCards/CategoriesCard';
import'./Categories.style.css';


const Categories = (props) => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { categories, setCategories } = props;
  let uniqueKey = 0;

  useEffect(() => {
    setIsLoading(true);
    const url = '/categories';
    customGetRequest(url).then((topicData) => {
      setCategories(topicData.categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section className='categories-list'>
      <h2 className='categories-header'> categories </h2>
      <ul className='categories-list'>
        {categories.map((category) => {
          uniqueKey++;
          return <CategoriesCards category={category} key={uniqueKey} />;
        })}
      </ul>
    </section>
  );
};

export default Categories;