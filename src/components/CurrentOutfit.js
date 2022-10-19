// TODO: Delete button functionality for individual items
// TODO: Save button should move user to view outfits page
// TODO: Tags input field

// Note: Debounce code for Outfit Name input/API call is based on: https://usehooks.com/useDebounce/

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { SaveButton } from "./SaveButton";
import { DisplayOutfit } from './DisplayOutfit';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useState, useEffect} from 'react';


export const CurrentOutfit = ({ currOutfit, setCurrOutfit, loading, setLoading }) => {
    const [name, setName] = useState(currOutfit.title)
    const debouncedName = useDebounce(name, 500)


    // 500ms after user stops typing Outfit Name input, API call will save name
    useEffect(() => {
        if (debouncedName) {
            updateName(debouncedName, currOutfit)
        }
    }, [debouncedName])

    // Clicking save will move outfit out of draft (changing current outfit to empty) and navigate user to View Outfit page
    const handleSubmit = () => {
        axios
            .patch(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}`,
            {
                draft: false,
            },{
                headers: {
                    Authorization: `Token af6053eea103fe7a3e9c9d9e4d054cf5f7a527d1`,
                },
            })
            .then((res) => {
                setCurrOutfit({})
            })
            .catch((err) => console.error(err))
    }
    
    // Clicking delete will delete outfit and change current outfit to empty
    const handleDeleteOutfit = () => {
        axios
            .delete(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}`,
            {
                headers: {
                    Authorization: `Token af6053eea103fe7a3e9c9d9e4d054cf5f7a527d1`,
                },
            })
            .then((res) => {
                setCurrOutfit({})
            })
            .catch((err) => console.error(err))
    }

    // Loading symbol will display until currOutfit API call returns (in App.js) 
    if (loading) {
        return(
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    } else {
        return(
            <>
                <h1>Current Outfit</h1>
                    <div><label htmlFor='name'>Outfit Name: </label></div>
                    <div><input
                        type='text'
                        id='name'
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                        required
                    ></input></div>

                <p>{Object.keys(currOutfit).length === 0 ? "You haven't starting building an outfit yet. " : `You have ${currOutfit.closet_item.length} closet items in your outfit so far. `}
                <a href='/'>Go to your closet to add items to your outfit.</a></p>
                {Object.keys(currOutfit).length === 0 ? "" :
                <><div>
                    <DisplayOutfit outfit={currOutfit} location='editOutfit' setCurrOutfit={setCurrOutfit} />
                </div>
                <IconButton color="primary" aria-label="delete outfit" 
                onClick={() => {
                    handleDeleteOutfit()
                }
                }
                >
                    <DeleteIcon style={{color:'#F06292'}} />
                </IconButton>
                <div onClick={
                    () => {
                    handleSubmit()
                }
                }>
                    <SaveButton />
                </div></>}
            </>
        )
    }
}

// API call for outfit name
function updateName(nameInput, currOutfit) {
    axios
        .patch(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}`,
        {
            title: nameInput,
        },{
            headers: {
                Authorization: `Token af6053eea103fe7a3e9c9d9e4d054cf5f7a527d1`,
            },
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.error(err))
}

// Used to set how often text input calls API, since we want it to save as user enters info
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return() => {
            clearTimeout(handler)
        }
    }, [value, delay])
        return debouncedValue
}