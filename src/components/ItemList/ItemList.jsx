import Item from "../Item/Item"

import "./ItemList.scss"

const ItemList = ({products}) =>{
    return(
        <div className="item-lists">
            {
                products.map((product)=>(
                    <Item product={product} key={product.id}/>
                ))
        }
    </div>
    )
}
export default ItemList