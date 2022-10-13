import { useState } from 'react'
import { items } from '../resources/items/item_info'

export const ShowItems = () => {
    return (
        <div>
            <h2> All Items</h2>
            <div className='item-list'>
                {items.map((item) => (
                    <div className='item'>
                        <Item
                        item={item}
                        title={item.title}
                        type={item.type}
                        color={item.color}
                        size={item.size}
                        material={item.material}
                        source={item.source}
                        brand={item.brand}
                        tag={item.tag}
                        image={item.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    )}

const Item = ({item, title, type, color, size, material, source, brand, tag, image}) => {
const [expanded, setExpanded] = useState(false)
const handleClick = () => {
    setExpanded(!expanded)
}

return (
    <div className='item-container'>
        <div className='item'>
            <img className='item-photo' src = {image} alt={"Image for " + title}></img>
            <h3>{title}</h3>
            <div className='expand-info' onClick={() => handleClick()}>
                <div className='item-fields'>
                { expanded ? ( type ? <p>type: {type}</p> : '') : ''}
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
