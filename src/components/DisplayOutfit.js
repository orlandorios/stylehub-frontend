//TODO: Replace faulty image src with error image

import { DownhillSkiing } from "@mui/icons-material";

export const DisplayOutfit = ({ outfit, location }) => {
    // location determines how outfit displays depending on page it is used in. Options: 'myOutfits', 'editOutfit', 'viewOutfit'

    // changes image width based on location
    const size = location==='myOutfits' ? '50rem' : '100rem';

    // arrays to collect the items of different types
    const tops = [];
    const outers = [];
    const bottoms = [];
    const shoes = [];

    // subcategories for each type
    const topTypes = ['button-down', 'dress', 'shirt', 'sweater', 't-shirt'];
    const outerTypes = ['cardigan', 'coat', 'jacket', 'vest'];
    const bottomTypes = ['pants', 'shorts', 'skirt'];
    const shoeTypes = ['boots', 'flats', 'heels', 'sandals', 'slippers', 'sneakers'];

    for (const item of outfit.closet_item) {
        if (topTypes.includes(item.item_choice)) {
            tops.push(item)
        } else if (outerTypes.includes(item.item_choice)) {
            outers.push(item)
        } else if (bottomTypes.includes(item.item_choice)) {
            bottoms.push(item)
        } else if (shoeTypes.includes(item.item_choice)) {
            shoes.push(item)
        }        
    }

    return (
        <>
            <div className='tops'>
                {tops.map((top) => (
                    <div key={top.id}>{top.item_image ? <img src={top.item_image} alt='' width={size} /> : ''}</div>
                ))}
            </div>
            <div className='outers'>
                {outers.map((outer) => (
                    <div key={outer.id}>{outer.item_image ? <img src={outer.item_image} alt='' width={size} /> : ''}</div>
                ))}
            </div>
            <div className='bottoms'>
                {bottoms.map((bottom) => (
                    <div key={bottom.id}>{bottom.item_image ? <img src={bottom.item_image} alt='' width={size} /> : ''}</div>
                ))}
            </div>
            <div className='shoes'>
                {shoes.map((shoe) => (
                    <div key={shoe.id}>{shoe.item_image ? <img src={shoe.item_image} alt='' width={size} /> : ''}</div>
                ))}
            </div>
        </>
    )
}