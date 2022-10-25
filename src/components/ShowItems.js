import { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Link } from 'react-router-dom'
import Fab from '@mui/material/Fab'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import { Add, Edit } from '@mui/icons-material'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


export const ShowItems = ({items, currOutfit, setCurrOutfit, setLoading, token}) => {
    return (
        <div>
            <div className='item-list'>
                {items.map((item, index) => (
                    <div key={index} className='item-list'>
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
                        image={item.item_image}
                        currOutfit={currOutfit}
                        setCurrOutfit={setCurrOutfit}
                        setLoading={setLoading}
                        token={token}
                        />
                    </div>
                ))}
            </div>
        </div>
    )}

const Item = ({item, title, category, subcategory, color, size, material, source, brand, tag, image, currOutfit, setCurrOutfit, setLoading, token}) => {
const [expanded, setExpanded] = useState(false)
const [selectedItem, setSelectedItem] = useState(null)

// const handleClick = (item) => {
//     setExpanded(!expanded)
//     setSelectedItem(item)
//     console.log(selectedItem)
// }  
const handleAddItem = (newItem) => {
    // console.log(newItem.id)
    if (Object.keys(currOutfit).length === 0) {
        axios
        .post(`https://stylehub.herokuapp.com/myoutfits/`,
        {
            closet_item: [newItem.id],
        },{
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then((res) => {
            let newOutfit = res.data
            newOutfit.closet_item = [newItem]
            setCurrOutfit(newOutfit)
            console.log(res.data)
        })
        .catch((err) => console.error(err))
    } else {
        console.log(`currOutfit`)
        console.log(currOutfit)
        const outfitItems = currOutfit.closet_item
        console.log(`outfitItems`)
        console.log(outfitItems)
        const outfitItemsArray = Array.isArray(outfitItems) ? outfitItems : [outfitItems]
        const updatedOutfitItems = [ ...outfitItemsArray, newItem]
        console.log(`updatedOutfitItems`)
        console.log(updatedOutfitItems)
        const updatedOutfitItemIDs = updatedOutfitItems.map(object => object.id)
        console.log(`updatedOutfitItemIDs`)
        console.log(updatedOutfitItemIDs)
        setLoading(true)
        axios
        .patch(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}`,
        {
            closet_item: updatedOutfitItemIDs,
        },{
            headers : {
                Authorization: `Token ${token}`,
            },
        })
        .then((res) => {
            console.log(res.data)
            let outfitUpdate = res.data
            outfitUpdate.closet_item = updatedOutfitItems
            console.log(outfitUpdate)
            setCurrOutfit(outfitUpdate)
            setLoading(false)
        })
        .catch((err) => console.error(err))
    }
}

const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    }));
    
        const handleExpandClick = () => {
        setExpanded(!expanded);
        };

    return (
        <div>
            <Grid2
            justifyContent="center"
            container 
            rowGap={1} 
            columnGap={1}
            >
            <Grid2 xs={11.5}>
            <Card
            sx={{ maxWidth: 150 }}>
            <CardMedia
            component="img"
            height="194"
            image={image}
            alt={"Image for " + title}
            />

            <Typography variant="body2" color="text.secondary">
                {brand} {subcategory}
            </Typography>
            
            <CardActions disableSpacing>
                {currOutfit.closet_item?.includes(item) ? 
            <IconButton
            onClick={() => {handleAddItem(item)}}
            aria-label="add-item"
            >
                <LibraryAddCheckIcon />
            </IconButton> :
                
            <IconButton 
            onClick={() => {handleAddItem(item)}}
            aria-label="add-item"
            >
                <LibraryAddIcon />
            </IconButton>
            }

            <IconButton aria-label="edit-item">
                <Edit />
            </IconButton>
            
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography>
                category <br></br>
                {category} <br></br> <br></br>
                subcategory <br></br>
                {subcategory} <br></br><br></br>
                color <br></br>
                {color} <br></br><br></br>
                size <br></br>
                {size} <br></br><br></br>
                material <br></br>
                {material} <br></br><br></br>
                brand <br></br>
                {brand} <br></br><br></br>
                source <br></br>
                {source} <br></br><br></br>
                </Typography>

            </CardContent>
            </Collapse>
        </Card>
        </Grid2>
        </Grid2>
        
        </div>
    );
}