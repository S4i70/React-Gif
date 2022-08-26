import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifts';


export const useFetchGif = (category) => {

    const [imagen, setImagen] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImge= async() => {
      const newImagen= await getGifs(category);
      setImagen(newImagen)
      setIsLoading(false)
    }

    useEffect( () => {
      getImge();
    }, []);

    return {
        imagen,
        isLoading,
    }
}
