import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectProduct } from "../slices/productSlice";
import SelectedProduct from "../components/SelectedProduct";

function Item() {
    const items = useSelector(selectProduct);

    return (
        <div>
            <Header />
                {items.map((item, i) => (
                  console.log(item.title),
                  <SelectedProduct 
                    key={i}
                    id = {item.id}
                    title = {item.title}
                    price = {item.price}
                    description = {item.description}
                    category = {item.category}
                    image = {item.image}
                    //  
                  />
                ))}
        </div>
    )
}

export default Item
