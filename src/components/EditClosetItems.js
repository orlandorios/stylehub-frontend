import { useEffect, useState } from "react"
import { FormClosetItem } from "./FormClosetItems"
import axios from "axios"
import { useParams } from "react-router"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export const EditClosetItem = ({token}) => {
    const [item, setItem] = useState({})
    const [error, setError] = useState(false)
    const [editItemsLoading, setEditItemsLoading] = useState(true);

    const {id} = useParams()

    useEffect(() => {
        axios
            .get(`https://stylehub.herokuapp.com/closet-item/${id}`,
            {
                headers: {
                    Authorization: `Token ${token}`,
            },
            })
            .then((res) => {
                console.log(res.data)
                setItem(res.data)
                setEditItemsLoading(false)
            })
            .catch((err) => setError(err.response.data.error))
    }, [])

    if (editItemsLoading) {
        return(
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    } else {
        return(
            <FormClosetItem token={token} itemCategory={item.category} itemSubcategory={item.subcategory} itemSize={item.size} itemColor={item.color} itemSource={item.source} itemImage={item.item_image} itemTag={item.tag} itemMaterial={item.material} itemBrand={item.brand}
            />
        )
    }
}