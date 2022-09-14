import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/helpers/getMovies';
import { ReviewsItem } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId).then(res => setReviews(res));
  }, [movieId]);

  console.log(reviews);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {reviews.length === 0 && <p>Отзывов не найдено!</p>}
      <ul>
        {reviews.map(review => {
          return (
            <ReviewsItem key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </ReviewsItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
