import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";
import { useEffect, useState } from "react";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r, i) => {
      return (
        <StarIcon
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
          })}
        />
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i + 20}>{r}</span>
      ))}
    </div>
  );
};
