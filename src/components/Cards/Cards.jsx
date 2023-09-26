import PropTypes from "prop-types";
import Card from "../Card/Card";

const Cards = ({cards}) => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 py-[50px]">
                {cards.map((card) => <Card key={card.id} card={card}></Card>)}
            </div>
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array.isRequired
}

export default Cards;