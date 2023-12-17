import PropTypes from "prop-types";
import {
  Card as MaterialCard,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const StarRating = ({ rating }) => {
  const filledStars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <span key={index} className="text-yellow-500 text-2xl">
      &#9733;
    </span>
  ));
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center text-center">
      <div className="flex items-center justify-center">
        {filledStars}
        {hasHalfStar && (
          <span className="text-yellow-500 text-2xl">&#9734;</span>
        )}
      </div>
      <span className="ml-2 text-blue-gray-300">{rating}/5</span>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

const CustomCard = ({ imageSrc, category, title, rating }) => {
  return (
    <MaterialCard className="flex flex-col items-center justify-center shadow-lg border shadow-gray-500/10 rounded-lg p-4">
      <div className="mt-2">
        <img
          alt="Card Image"
          src={imageSrc}
          className="w-32 h-32 object-cover rounded-full"
        />
      </div>

      <CardBody className="text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-3 mt-2 font-bold"
        >
          {title}
        </Typography>
        <div className="flex items-center justify-center">
          <StarRating rating={rating} />
        </div>
      </CardBody>
    </MaterialCard>
  );
};

CustomCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default CustomCard;
