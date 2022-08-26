import { useFetchGif } from "../hooks/useFetchGif";
import { GIfItem } from "./GIfItem";

export const Gifgred = ({categories}) => {

  const { imagen, isLoading } = useFetchGif(categories);
  console.log({imagen, isLoading})
  
    return (
        <>
        <h3> {categories} </h3>

        {
            isLoading && (<h2> Cargando..</h2>)
        }
        
        <div className="card-grid">
                {
                    imagen.map( ( image ) => (
                        <GIfItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>
        </>
    )
}
