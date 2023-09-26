import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatedCard = ({donation}) => {
    const {id, ractangleImage, title, titleColor, category, categoryBgColor, categoryButtonBgColor, amount} = donation;

    return (
        <div className="flex rounded-lg shadow-xl">
            <div className="xl:w-1/3 lg:w-3/6 md:w-1/3 w-3/6">
                <img src={ractangleImage} alt="donation-image" className="inline-block w-full h-full" />
            </div>
            <div style={{backgroundColor: categoryBgColor}} className="p-5 rounded-r-lg xl:w-2/3 lg:w-3/6 md:w-2/3 w-3/6 flex-1">
                <p style={{ backgroundColor: categoryButtonBgColor }} className="px-2 mb-2 inline-block rounded-md">{category}</p>
                <h3 className="font-semibold text-[22px] mb-1">{title}</h3>
                <p style={{ color: titleColor }} className="font-semibold mb-3 text-lg">${amount}</p>
                <Link to={`/donation-details/${id}`}><button style={{backgroundColor: titleColor}} className="btn text-white normal-case border-none">View Details</button></Link>
            </div>
        </div>
    );
};

DonatedCard.propTypes = {
    donation: PropTypes.object.isRequired
}

export default DonatedCard;