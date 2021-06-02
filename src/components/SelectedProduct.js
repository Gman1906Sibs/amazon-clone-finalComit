import Image from "next/image";

function SelectedProduct({ id, title, price, description, category, image }) {
    return (
        <div>
            <h1>product</h1> 
            {console.log(title)}
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h1></h1>
            
        </div>
    )
}

export default SelectedProduct
