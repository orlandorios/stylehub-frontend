
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from '@mui/material';


export const DisplayOutfit = ({ outfit, location, setCurrOutfit, token }) => {
    // location determines how outfit displays depending on page it is used in. Options: 'myOutfits', 'editOutfit', 'viewOutfit'

    // changes image width based on location
    const size = location==='myOutfits' ? '50rem' : '100rem';

    // arrays to collect the items of different types
    const tops = [];
    const outers = [];
    const bottoms = [];
    const shoes = [];

    for (const item of outfit.closet_item) { 
        if (item.category==='top') {
            tops.push(item)
        } else if (item.category==='outerwear') {
            outers.push(item)
        } else if (item.category==='bottom') {
            bottoms.push(item)
        } else if (item.category==='shoes') {
            shoes.push(item)
        }        
    }


    // Clicking remove will remove closet item from outfit and display updated outfit
    const handleRemove = (selectedItem) => {
        // Deletes outfit if there is only on item, otherwise updates the outfit to remove the item
        if (outfit.closet_item.length === 1) {
            axios
                .delete(`https://stylehub.herokuapp.com/outfit/${outfit.id}`,
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                })
                .then((res) => {
                    setCurrOutfit({})
                })
                .catch((err) => console.error(err))
        } else {
        // get outfit items, remove requested item, transform to array of the id values
            const outfitItems = outfit.closet_item
            const updatedOutfitItems = outfitItems.filter(item => item.id !== selectedItem.id)
            const updatedOutfitItemIDs = updatedOutfitItems.map(object => object.id)
            
            axios
                .patch(`https://stylehub.herokuapp.com/outfit-detail/${outfit.id}`,
                {
                    closet_item: updatedOutfitItemIDs,
                },{
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                })
                .then((res) => {
                    // Reformating response data to make closet_item a array of objects instead of just the id's.
                    let outfitUpdate = res.data
                    outfitUpdate.closet_item = updatedOutfitItems
                    setCurrOutfit(outfitUpdate)
                })
                .catch((err) => console.error(err))
        }
    }

    return (
        <>
        <Box>
            <Grid2>
            <div className='upperBody'>
                <div className='tops'>
                    <Card>
                    {tops.map((top) => (
                        <div key={top.id} className='outfitItem'>
                            {top.item_image ? <img src={top.item_image} alt='' width={size} /> : ''}
                            {location==='editOutfit' && 
                            <CardContent
                            align="center"
                            sx={{ backgroundColor: '#b19cd9', marginBottom: -2, marginTop: -2}}
                            >
                            <IconButton className='outfitItemBtn' color="secondary" aria-label="remove item" onClick={() => handleRemove(top)}>
                                <DeleteIcon                                
                                style={{color:'white', marginLeft:10}} />
                                <Typography
                                paddingLeft={1}
                                color='white'
                                fontSize='small'>
                                Delete
                                </Typography>
                            </IconButton>
                            </CardContent>}
                        </div>
                    ))}
                    </Card>                    
                </div>

                <div className='outers'>
                    <Card>               
                    {outers.map((outer) => (
                        <div key={outer.id} className='outfitItem'>
                            {outer.item_image ? <img src={outer.item_image} alt='' width={size} /> : ''}
                            {location==='editOutfit' && 
                            <CardContent
                            align="center"
                            sx={{ backgroundColor: '#b19cd9', marginBottom: -2, marginTop: -2}}>                        
                            <IconButton className='outfitItemBtn' color="secondary" aria-label="remove item" onClick={() => handleRemove(outer)}>
                                <DeleteIcon style={{color:'white', marginLeft:10}} />
                                <Typography
                                paddingLeft={1}
                                color='white'
                                fontSize='small'>
                                Delete
                                </Typography>
                            </IconButton>
                            </CardContent>}
                        </div>
                    ))}
                    </Card>

                    </div>
            </div>
            <div className='bottoms'>
                    <Card>

                    {bottoms.map((bottom) => (
                        <div key={bottom.id} className='outfitItem'>
                            {bottom.item_image ? <img src={bottom.item_image} alt='' width={size} /> : ''}
                            {location==='editOutfit' && 
                            <CardContent
                            align="center"                            
                            sx={{ backgroundColor: '#b19cd9', marginBottom: -2, marginTop: -2}}>                                 
                            <IconButton className='outfitItemBtn' color="secondary" aria-label="remove item" onClick={() => handleRemove(bottom)}>
                                <DeleteIcon style={{color:'white', marginLeft:10}} /> 
                                <Typography
                                paddingLeft={1}
                                color='white'
                                fontSize='small'>
                                Delete
                                </Typography>
                            </IconButton>
                            </CardContent>}

                    </div>
                ))}

                    </Card>
            </div>
            <div className='shoes'>
                    <Card>

                    {shoes.map((shoe) => (
                        <div key={shoe.id} className='outfitItem'>
                            {shoe.item_image ? <img src={shoe.item_image} alt='' width={size} /> : ''}
                            {location==='editOutfit' && 
                            <CardContent
                            align="center"
                            sx={{ backgroundColor: '#b19cd9', marginBottom: -2, marginTop: -2}}>                                
                            <IconButton className='outfitItemBtn' color="secondary" aria-label="remove item" onClick={() => handleRemove(shoe)}>
                                <DeleteIcon 
                                style={{color:'white', marginLeft:10}} /> 
                                <Typography
                                paddingLeft={1}
                                color='white'
                                fontSize='small'>
                                Delete
                                </Typography>
                            </IconButton> 
                            </CardContent>}

                    </div>
                ))}
                </Card>
            </div>
            </Grid2>
        </Box>
        </>
    )
}