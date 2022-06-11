import { useState, useEffect } from "react";

export function Category() {
    let [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(process.env.WORDPRESS_API+"/categories?number=200")
        .then(response => response.json())
        .then(data => setCategories(data.categories))
    },[])

    // function categoriesChild(id) {
    //     let itemsChild = categories.map((item) => {
    //         if (item.parent === id) {
    //             return (
    //                 <>
    //                     <li key={item.ID}>{item.name}({item.post_count})</li>
    //                     {categoriesChild(item.ID)}
    //                 </>
    //             )
    //         }
    //     })

    //     return <ul>{itemsChild}</ul>
    // }

    return (
        <div className="categories">
            <ul>
                {categories.map(function(item){
                    if (item.parent === 0){
                        return (
                            <>
                                <li key={item.ID}>{item.name}({item.post_count})</li>
                            </>
                        )
                    }
                })}
            </ul>
        </div>
    )
}