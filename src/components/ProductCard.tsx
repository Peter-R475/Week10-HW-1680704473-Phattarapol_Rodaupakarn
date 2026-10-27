export interface ProductData {
    id: string,
    name: string,
    description: string,
    price: number,
    image: string
}


function ProductCard({ name, description, price, image }: ProductData) {
    return (
        <div className="w-auto h-full rounded-md bg-white p-4 text-left text-gray-700 shadow-md flex flex-col hover:shadow-lg hover:shadow-blue-300">
            <img src={image} alt={name} className="mx-auto mb-2 h-28 w-28 sm:h-32 sm:w-32">
            </img>
            <p className="font-bold text-xl text-center">{name}</p>
            <p>Description: <br />{description}</p>
            <p className="mt-auto flex items-center justify-between pt-4 "> <span className="text-blue-600">Price: {price}฿</span> <button className="rounded-lg bg-blue-400 hover:bg-blue-500 p-1">Add to Cart</button></p>
        </div>
    );
}

export default ProductCard