import { Box } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react";
import { DisplayOutfit } from './DisplayOutfit'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from "@mui/material/IconButton";
import Collapse from '@mui/material/Collapse';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import CardActionArea from "@mui/material/CardActionArea";
import { useParams } from "react-router-dom";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";


export const ViewOutfits = ({token}) => {
    const url = 'https://stylehub.herokuapp.com/myoutfits/'
    const [outfits, setOutfits] = useState(null);

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: `Token ${token}`
            }
            
        })
        .then((res) => {
        let allOutfits = res.data
        let savedOutfits = allOutfits.filter(outfit => outfit.draft !== false)
        setOutfits(savedOutfits)})
    }, [token])

    if(outfits) {
        return(
            <div>
            <Grid2 container rowGap={2} columnGap={2}>
                {outfits.map((outfit) => (
                    <Grid2 xs={3.5} key={outfit.id}>
                    <Card
                    elevation={3}>
                    <CardActionArea 
                    component={Link} 
                    to={`/outfit/${outfit.id}`}>
                    <CardContent>
                    <ImageList sx={{ width: 89.6, height: 140 }} cols={2} rowHeight={67.2}>
                    {/* We will only display up to 4 closet items in the outfit preview */}
                    {outfit.closet_item.slice(0, 4).map((item) => (
                        <ImageListItem key={item.item_image}>
                            <img
                            src={`${item.item_image}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.item_image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.id}
                            loading="lazy"
                                />
                        </ImageListItem>
                    ))}
                    </ImageList>
                    {outfit.title}
                    </CardContent>
                    </CardActionArea>
                    </Card>
                    </Grid2>
                    ))}
                </Grid2>


                {/* Remove code below once we've approved format above */}
                {/* <Grid2 container rowGap={2} columnGap={2}>
                    {outfits.map((outfit) => (
                        <Grid2 xs={3} key={outfit.id}>
                            <Card
                                elevation={3}>
                                <CardActionArea 
                                component={Link} 
                                to={`/outfit/${outfit.id}`}>
                                <CardContent>
                            <DisplayOutfit
                                token={token}
                                outfit={outfit}
                                location='myOutfits'
                                />
                                {outfit.title}
                                </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2> */}

            </div>

        )
    }

    return (
        <div>

        </div>
    )
}