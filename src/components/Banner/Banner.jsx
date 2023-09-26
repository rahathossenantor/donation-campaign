
const Banner = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 text-center py-20 border">
            <h1 className="text-3xl md:text-[45px] font-semibold">I Grow By Helping People In Need</h1>
            <div className="mt-5">
                <input type="text" placeholder="Search here...." className="input input-bordered" />
                <button className="btn bg-[#FF444A] hover:bg-[#FF444A] normal-case text-white">Search</button>
            </div>
        </div>
    );
};

export default Banner;