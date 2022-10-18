// TODO: Delete button functionality (also individual items)
// TODO: Save button functionality
// TODO: Name input field
// TODO: Tags input field

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { SaveButton } from "./SaveButton";
import { DisplayOutfit } from './DisplayOutfit';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export const CurrentOutfit = ({ currOutfit, loading, setLoading }) => {

    // Clicking save will move outfit out of draft (changing current outfit to empty) and navigate user to View Outfit page
    const handleSubmit = (event) => {
        
    }
    
    // Clicking delete will delete outfit and change current outfit to empty
    const handleDeleteOutfit = (event) => {
        // event.preventDefault()
        // axios
        //     .delete(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}`,
        //     {
        //         headers: {
        //             Authorization: `Token af6053eea103fe7a3e9c9d9e4d054cf5f7a527d1`,
        //         },
        //     })
        //     .then((res) => {
        //         setType('')
        //         setSize('')
        //         setColor('')
        //         setMaterial('')
        //         setSource('')
        //         setBrand('')
        //         setSubmitted(true)
        //     })
        //     .catch((err) => setError(err.response.data.error))
    }
    if (loading) {
        return(
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    } else {
        return(
            <>
                {console.log(currOutfit)}
                <h1>Current Outfit</h1>
                <p>{currOutfit.length === 0 ? "You haven't starting building an outfit yet." : `You have ${currOutfit.closet_item.length} closet items in your outfit so far.`} <a href='/'>Go to your closet to add items to your outfit.</a></p>
                <div>
                    <DisplayOutfit outfit={currOutfit} location='editOutfit' />
                </div>
                <IconButton color="primary" aria-label="delete outfit" onClick={() => {
                    alert('delete clicked')
                }}>
                    <DeleteIcon style={{color:'#F06292'}} />
                </IconButton>
                <div onClick={() => {
                    alert('save clicked')
                }}>
                    <SaveButton />
                </div>
            </>
        )
    }
}