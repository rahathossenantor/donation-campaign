import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async() => {
            const res = await fetch("https://raw.githubusercontent.com/rahathossenantor/fun-with-api/main/donations.json");
            const data = await res.json();
            setCards(data);
        })();
    }, [])

    const sortByCategory = (category) => {
        if (category !== "") {
            const sortedCards = cards.filter(c => c.category.toLowerCase() === category.toLowerCase());
            setCards(sortedCards);
        }
    }

    return (
        <>
        <Banner sortByCategory={sortByCategory}></Banner>
        <Cards cards={cards}></Cards>
        </>
    );
};

export default Home;