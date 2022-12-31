import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
	return (
		<article className="product">
			<img src={image ? image.url : defaultImage} alt={name} />
			<h4>{name}</h4>
			<p>${price || 0.0}</p>
		</article>
	);
};

Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
// 	image: defaultImage,
// 	name: "default image",
// 	price: 0.0,
// };

export default Product;
