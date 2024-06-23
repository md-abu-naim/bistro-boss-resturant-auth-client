
const FoodCards = ({item}) => {
    const {name, image, price, recipe} = item || {}
    return (
        <div className="card text-center bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 absolute top-3 rounded-sm right-6 p-2 text-white">&{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline border-orange-400 bg-slate-100 border-0 mt-4 border-b-4 uppercase">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCards;