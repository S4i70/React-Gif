import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Gifgred } from "./components/Gifgred";

export const GifApp = () => {

    const [categories, setCategories] = useState([]);

    const AddCategoryc = (newCat) => {

        if (categories.includes(newCat)) return;
        setCategories( [ newCat,...categories] )
    }

    return (
        <>
   
        <h1>Gifs buscar tu</h1>

        <AddCategory 
            onNewCategory= {event => AddCategoryc(event)}
        />
        
        {
            categories.map( (categories) =>(
                <Gifgred 
                    key= { categories } 
                    categories={ categories }
                />
            ))
        }
        </>
    )
}
