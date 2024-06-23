import React from "react";
import styles from './Categories.module.css'

const Categories = ({ category, setCategory }) => {

    const updateCategory = (newCategory) => {
        setCategory(newCategory);
        console.log(category)
    };

    return (
        <div>
            <button className={styles.categoryItem} onClick={() => updateCategory('popular')}>Popular</button>
            <button className={styles.categoryItem} onClick={() => updateCategory('featured')}>Featured</button>
            <button className={styles.categoryItem} onClick={() => updateCategory('most-svisited')}>Most Visited</button>
            <button className={styles.categoryItem} onClick={() => updateCategory('europe')}>Europe</button>
            <button className={styles.categoryItem} onClick={() => updateCategory('asia')}>Asia</button>        
        </div>

    )
}

export default Categories;