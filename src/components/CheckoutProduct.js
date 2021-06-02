import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {addToBasket, removeFromBasket } from "../slices/basketSlice"

function CheckoutProduct({ id, title, price, description, category, image, hasPrime, rating }) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product= { id, title, price, description, category, image, hasPrime, rating }

        // Push item into redux
        dispatch(addToBasket(product));
    }

    const removeItemToBasket = () => {
        dispatch(removeFromBasket({ id }))
    }


    return (
        <div className="grid grid-cols-5">
            {/* Col 1 (1 col) */}
            <Image 
                src={image} height={200} width={200} objectFit="contain"
            />

            {/* Col 2 (3 cols) */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="USD"/>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img 
                            loading="lazy" 
                            className="w-12" 
                            src="https://links.papareact.com/fdw" 
                            alt=""
                        />
                        <p className="text-xs text-gray-500">
                            Free Next-day Delivery
                        </p>
                    </div>
                )}
            </div>

            {/* Col 3 (1 col) */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end ">
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemToBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
