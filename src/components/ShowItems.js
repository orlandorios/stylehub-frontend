import { useState } from 'react'
import chunkyBoots from '../resources/items/images/chunky_boots.jpeg'

export const ShowItems = ({items}) => {
    return (
        <div>
            <div className='item-list'>
                {items.map((item) => (
                    <div key={item.title} className='item-list'>
                        <Item
                        item={item}
                        title={item.title}
                        category={item.category}
                        subcategory={item.subcategory}
                        color={item.color}
                        size={item.size}
                        material={item.material}
                        source={item.source}
                        brand={item.brand}
                        tag={item.tag}
                        image={chunkyBoots}
                        />
                    </div>
                ))}
            </div>
        </div>
    )}

const Item = ({item, title, category, subcategory, color, size, material, source, brand, tag, image}) => {
const [expanded, setExpanded] = useState(false)
const handleClick = () => {
    setExpanded(!expanded)
}

return (
    <div className='item-container'>
        <div className='item' onClick={() => handleClick()}>
            <img className='item-photo' src ={image} alt={"Image for " + title}></img>
            <div className='expand-info'>
                <div className='item-fields'>
                { expanded ? ( category ? <p>category: {category}</p> : '') : ''}
                { expanded ? ( subcategory ? <p>subcategory: {subcategory}</p> : '') : ''}
                { expanded ? ( color ? <p>color: {color}</p> : '') : ''}
                { expanded ? ( size ? <p>size: {size}</p> : '') : ''}
                { expanded ? ( material ? <p>material: {material}</p> : '') : ''}
                { expanded ? ( brand ? <p>brand: {brand}</p> : '') : ''}
                { expanded ? ( source ? <p>source: {source}</p> : '') : ''}
                </div>
                <div className='item-tags'>
                { expanded ? ( tag ? <p>{tag}</p> : '') : ''}
                {/* tags might be an array or items, might need to map? */}
                </div>
                
            </div>
        </div>
    </div>

)

}
