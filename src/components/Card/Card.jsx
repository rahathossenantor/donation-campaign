import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const {id, category, categoryBgColor, categoryButtonBgColor, image, title, titleColor } = card;

    return (
        <Link to={`/donation-details/${id}`}>
            <div className="rounded-lg shadow-xl cursor-pointer">
                <figure className="w-full">
                    <div className="rounded-md flex items-center justify-center">
                        <img className='inline-block w-full' src={image} alt="cover-image" />
                    </div>
                </figure>
                <div style={{ backgroundColor: categoryBgColor }} className="p-5 rounded-lg rounded-t-none">
                    <p style={{ backgroundColor: categoryButtonBgColor }} className="px-2 inline-block rounded-md">{category}</p>
                    <h4 style={{ color: titleColor }} className="font-semibold text-xl mt-2">{title}</h4>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;