import { useEffect, useState } from "react";


import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { DotLoader, MoonLoader } from "react-spinners";
import { collection, getDocs, query, where } from  "firebase/firestore"; // database-firebase  { colleccion,traer documentos,referencia a consulta, filtra la data }

import db from "../../db/db";
//import "./ItemListContainer.scss"


const ItemListContainer = () => {


    const [products, setProductos] = useState([]);
    
    const [cargando, setCargando] =  useState(true)

    const { categoria } = useParams();


//productos
    useEffect( () => {
        const obtenerProductos = async () => {
        setCargando(true)
        
        try{
            //categorias
            let consulta
            const productosReferidos = collection(db,"products") //base de datos/database

            if (categoria){
                consulta = query(productosReferidos, where("categoria","==",categoria)
            ) //si hay categoria, filtrar por categoria, tambien sirve para hacer categorias de consultas. mayor a 15.000, menor a
            } else {
                consulta = productosReferidos
        }//filtrado de data

        const respuesta = await getDocs(consulta)
        const productsDb = respuesta.docs.map(product => ({
            id: product.id, 
            ...product.data() 
            }))

        setProductos(productsDb)

        } catch(error){
            console.log(error)}
        finally{
            setCargando(false)
        }
        }
    obtenerProductos()
}, [categoria]);
return (
    <>
    {
        cargando ? (
            <div className="cargando">
                <DotLoader
                color="rgba(128, 0, 0, 0.88)"
                size={60}
                />
            </div>
        )//si está cargando = mostrar pantalla de carga(ternarios)
        :(<div>
            <ItemList products={products}/>
        </div>)//si no está cargando= mostrar directamente productos
    }
    </>
);

}//trae todos los documentos/productos


export default ItemListContainer