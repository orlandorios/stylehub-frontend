// TODO: Delete button functionality for individual items
// TODO: Save button should move user to view outfits page
// TODO: Finalize Tag suggestion list
// TODO: Look into Axios call error messages when there is no current outfit
// TODO: Code goes blank when refreshing

// Note: Debounce code for Outfit Name input/API call is based on: https://usehooks.com/useDebounce/

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { SaveButton } from "./SaveButton";
import { DisplayOutfit } from './DisplayOutfit';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
import React, { useEffect, useState } from "react"
import { WithContext as ReactTags } from 'react-tag-input';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


export const CurrentOutfit = ({ currOutfit, setCurrOutfit, loading, setLoading, token }) => {
    // replace null with empty string
    let storedName = currOutfit.title
    if (storedName === null) {
        storedName = ""
    }

    const [name, setName] = useState(storedName)
    const debouncedName = useDebounce(name, 500)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
        
    const handleClose = () => {
        setOpen(false);
    };

    console.log(`Current Outfit`)
    console.log(currOutfit)
    // 500ms after user stops typing Outfit Name input, API call will save name
    useEffect(() => {
        if (debouncedName) {
            updateName(debouncedName, currOutfit, token)
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
                    Authorization: `Token ${token}`,
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
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => {
                setCurrOutfit({})
            })
            .catch((err) => console.error(err))
    }

    // Tag code
    // Tag documentation found here: https://www.npmjs.com/package/react-tag-input

    // pull tag info from currOutfit so they display in form
    let currOutfitTagsObj=[]
    if (Object.keys(currOutfit).length !== 0) {
        let currOutfitTags = currOutfit.tag
        currOutfitTagsObj = currOutfitTags.map((x) => ({id: x, text: x}))
    }

    const [tags, setTags] = React.useState(currOutfitTagsObj)

    const possibleTags = ['spring', 'summer', 'fall', 'winter']
    const suggestions = possibleTags.map(possibleTag => {
    return {
        id: possibleTag,
        text: possibleTag
    };
    });

    const KeyCodes = {
        comma: 188,
        enter: 13
    };
    
    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };
    
    const handleAddition = tag => {
        setTags([...tags, tag]);
    };
    
    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
    };
    
    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
    };


    // Save tags after user updates
    useEffect(() => {
        // Setting up conditional so code doesn't run when there's no current outfit
        if (Object.keys(currOutfit).length !== 0) {
            let tagsToPost = []
            for (const tag of tags) {
                tagsToPost.push(tag.id)
            }

            let currOutfitData = currOutfit
            currOutfitData.tag = tagsToPost

            axios
            .patch(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}`,
            {
                tag: tagsToPost,
            },{
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => {
                setCurrOutfit(currOutfitData)
            })
            .catch((err) => console.error(err))
        }
    }, [tags])


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

                {/* Only display if outfit has been started */}
                {Object.keys(currOutfit).length === 0 ? "" :
                <>
                <div><label htmlFor='name'>Outfit Name: </label></div>
                <div><input
                    type='text'
                    id='name'
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                    required
                ></input></div>

                <div>Add tags:</div>
                <ReactTags
                tags={tags}
                suggestions={suggestions}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                handleTagClick={handleTagClick}
                inputFieldPosition="top"
                autocomplete
                allowDeleteFromEmptyInput={false}
                />
                </>
                }


                {/* Display depends on whether outfit has been started */}
                <p>{Object.keys(currOutfit).length === 0 ? "You haven't starting building an outfit yet. " : `You have ${currOutfit.closet_item.length} closet items in your outfit so far. `}
                <a href='/'>Add items in closet.</a></p>


                {/* Only display if outfit has been started */}
                {Object.keys(currOutfit).length === 0 ? "" :
                <><div>
                    <DisplayOutfit token={token} outfit={currOutfit} location='editOutfit' setCurrOutfit={setCurrOutfit} />
                </div>
                <div className='my-draft-buttons'>
                    <span onClick={
                        () => {
                        handleSubmit()
                    }
                    }>
                        <SaveButton />
                    </span>
                    <span  onClick={(e) => {
                    handleClickOpen()
                    e.preventDefault()
                    }}>
                    <Button type="button" variant="contained" aria-label="delete outfit">
                        Delete
                    </Button>
                    </span>
                    <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <div onClick={handleClose}>
                    <Button type="button" onClick={(e) => e.preventDefault()} >Cancel</Button></div>
                    <Button type="button" onClick={() => {
                        handleDeleteOutfit()
                        handleClose()
                        }} autoFocus>
                        Delete
                    </Button>
                    </DialogActions>
                    </Dialog>
                </div>
                </>}
            </>
        )
    }
}

// API call for outfit name
function updateName(nameInput, currOutfit, token) {
    axios
        .patch(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}`,
        {
            title: nameInput,
        },{
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then((res) => {
            // console.log(res.data)
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