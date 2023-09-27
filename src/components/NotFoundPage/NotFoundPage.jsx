import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-[100px]">
            <div className="text-center">
                <div>
                <img className="inline-block xl:w-2/6 lg:w-2/6 md:w-3/6 w-4/6" src="https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg" alt="page-not-found" />
                </div>
                <Link to="/"><button className="btn btn-primary normal-case mt-5">Back to home</button></Link>
            </div>
        </div>
    );
};

export default NotFoundPage;

// https://github.com/ProgrammingHero1/donation-campaign/blob/main/requirements.pdf