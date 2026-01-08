import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore"; // doc porque es un solo documento/producto
import { useParams } from "react-router-dom";
import db from "../../db/db";
import ItemDetail from "../ItemDetail/ItemDetail"


//producto
const ItemDetailContainer = () =>{


    const [product, setProduct] = useState({})

    const{ id } = useParams()

    const [cargando, setCargando] =  useState(true)



    useEffect(()=>{
        const obtenerProducto = async () => {
            setCargando(true)
        
            try{
                const productoReferido =  doc( db, "products", id) //referencia al documento products en base de datos por ID 
                const respuesta = await getDoc(productoReferido)//armar objeto para que se vea en la pag
                const productoDb = { id: respuesta.id, ...respuesta.data()}//metodo que obtiene informacion
            setProduct(productoDb)//aca se muestra
            } catch (error){
            console.log ("Error al obtener el producto: ",error)
        }finally{
            setCargando(false)
        }
    }
    obtenerProducto()
    }, [id]);

    return (
        <div> 
            <ItemDetail product={product}/>
        </div>
    )//muestra el producto seleccionado "ver detalles"
};
export default ItemDetailContainer