import PropTypes from "prop-types";
import Card from "../Card/Card";

const noDataFound = <>
<div className="text-center my-10">
    <img className="inline-block w-20" src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt="no-data-found" />
    <div className="text-4xl">No data found!</div>
</div>
</>

const Cards = ({cards}) => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 w-full">
            {cards.length ? <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 py-[50px]">{cards.map((card) => <Card key={card.id} card={card}></Card>)}</div> : ""}
            {!cards.length ? noDataFound : ""}
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array.isRequired
}

export default Cards;