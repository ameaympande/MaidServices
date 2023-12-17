import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ image, title, description }) {
  return (
    <Card className="rounded-lg shadow-lg shadow-gray-500/10 bg-amber-200 transform hover:scale-105 transition-transform">
      <CardBody className="px-8 text-center">
        <div>
          <img src={image} alt={title} className="w-25 h-18 rounded-full" />
        </div>
        <Typography variant="h5" className="mt-4 mb-2" color="blue-gray">
          {title}
        </Typography>
        <Typography className="mt-2 font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
