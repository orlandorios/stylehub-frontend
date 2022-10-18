// TODO: Replace faulty image src with error image
// TODO: Conditional display of delete button for edit outfits
// TODO: Delete button functionality

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
        if (item.category==='top') {
            tops.push(item)
        } else if (item.category==='outer') {
            outers.push(item)
        } else if (item.category==='bottom') {
            bottoms.push(item)
        } else if (item.category==='shoes') {
            shoes.push(item)
        }        
    }

    return (
        <>
            <div className='upperBody'>
                <div className='tops'>
                    {tops.map((top) => (
                        <div key={top.id} className='outfitItem'>
                            {top.item_image ? <img src={top.item_image} alt='' width={size} /> : ''}
                            {location==='editOutfit' && <IconButton className='outfitItemBtn' color="secondary" aria-label="remove item">
                                <DeleteIcon style={{color:'#F06292'}} />
                            </IconButton>}
                        </div>
                    ))}
                </div>
                <div className='outers'>
                    {outers.map((outer) => (
                        <div key={outer.id} className='outfitItem'>
                            {outer.item_image ? <img src={outer.item_image} alt='' width={size} /> : ''}
                            {location==='editOutfit' && <IconButton className='outfitItemBtn' color="secondary" aria-label="remove item">
                                <DeleteIcon style={{color:'#F06292'}} />
                            </IconButton>}
                        </div>
                    ))}
                </div>
            </div>
            <div className='bottoms'>
                {bottoms.map((bottom) => (
                    <div key={bottom.id} className='outfitItem'>
                        {bottom.item_image ? <img src={bottom.item_image} alt='' width={size} /> : ''}
                        {location==='editOutfit' && <IconButton className='outfitItemBtn' color="secondary" aria-label="remove item">
                                <DeleteIcon style={{color:'#F06292'}} />
                            </IconButton>}
                    </div>
                ))}
            </div>
            <div className='shoes'>
                {shoes.map((shoe) => (
                    <div key={shoe.id} className='outfitItem'>
                        {shoe.item_image ? <img src={shoe.item_image} alt='' width={size} /> : ''}
                        {location==='editOutfit' && <IconButton className='outfitItemBtn' color="secondary" aria-label="remove item">
                                <DeleteIcon style={{color:'#F06292'}} />
                            </IconButton>}
                    </div>
                ))}
            </div>
        </>
    )
}