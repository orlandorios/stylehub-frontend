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
import { useNavigate } from "react-router-dom";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import {CardMedia} from "@mui/material";
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';



export const ViewOutfits = ({token, currOutfit, setCurrOutfit}) => {
    const navigate = useNavigate()
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
        let savedOutfits = allOutfits.filter(outfit => outfit.draft === false)
        setOutfits(savedOutfits)})
    }, [token])

    const handleEdit = (outfit) => {
        // Checks if there is already an outfit being edited
        if (Object.keys(currOutfit).length !== 0) {
            // Move current outfit out of drafts
            axios
            .patch(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}`,
            {
                draft: false,
            },{
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => {
                setCurrOutfit({})

            })
            .catch((err) => console.error(err))
        }

        // Move desired outfit to drafts
        axios
            .patch(`https://stylehub.herokuapp.com/outfit/${outfit.id}`,
            {
                draft: true,
            },{
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => {
                setCurrOutfit({outfit})
            })
            .catch((err) => console.error(err))
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
    
        const [expanded, setExpanded] = useState(false)
        const [selectedId, setSelectedId] = useState(-1);
        const handleExpandClick = (outfitId) => {
            if(selectedId === outfitId){
            setSelectedId(-1);
            } else {
            setSelectedId(outfitId);
            }
        }

    
    if(outfits) {
        
        return(
            <div>
            <Grid2
            justifyContent="center"
            container 
            rowGap={1} 
            columnGap={1}
            >
            {outfits.map((outfit) => (
            <Grid2 
            xs={5} 
            key={outfit.id}
            >
                    <Card
                    sx={{ maxWidth: 150 }}
                    elevation={1}>
                    <CardContent>             
            <CardMedia
            height='194'
            alt={"Image for " + outfit.closet_item}
            >
            <ImageList
                    sx={{ width: 105, height: 140, margin: 'auto' }} cols={2} rowHeight={67.2}>
                    {/* We will only display up to 4 closet items in the outfit preview */}
                    {outfit.closet_item.slice(0, 4).map((item) => (
                        <ImageListItem
                        key={item.item_image}>
                            <img
                            src={`${item.item_image}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.item_image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.id}
                            loading="lazy"
                                />
                        </ImageListItem>
                    ))}
                    </ImageList>                
            </CardMedia>
                        </CardContent>

            <Typography variant="body2" color="text.secondary">
            {outfit.title}
        </Typography>

            <CardActions disableSpacing>
            
            <IconButton
                component={Link} 
                to={`/outfit/${outfit.id}`}
            >
                <VisibilityIcon />
            </IconButton> 
            
            <IconButton>
                <DeleteIcon />
            </IconButton>


            <ExpandMore
                expand={expanded}
                onClick={()=>handleExpandClick(outfit.id)}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore>
            </CardActions>
            <Collapse
                    in={outfit.id === selectedId ? true : false}
                    timeout="auto" 
                    unmountOnExit>
            <CardContent>            
                <Typography>
                    {outfit.title} <br></br>
                    <br></br>
                    Outfit created <br></br>
                    {outfit.outfit_date} <br></br>
                </Typography>

            </CardContent>
            </Collapse>
        </Card>
        </Grid2>
        ))}
        </Grid2>

        </div>

        )
    }
    

    return (
        <div>

        </div>
    )
}