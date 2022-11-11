
// Note: Debounce code for Outfit Name input/API call is based on: https://usehooks.com/useDebounce/


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
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";




export const CurrentOutfit = ({ currOutfit, setCurrOutfit, loading, setLoading, token }) => {
    // replace null with empty string
    let storedName = currOutfit.title
    if (storedName === null) {
        storedName = ""
    }
    
    const [name, setName] = useState(currOutfit?.title || "")
    const debouncedName = useDebounce(name, 500)
    
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    // 500ms after user stops typing Outfit Name input, API call will save name
    useEffect(() => {
        if (debouncedName) {
            updateName(debouncedName, currOutfit, token)
        }
    }, [debouncedName])
    
    // Clicking save will move outfit out of draft (changing current outfit to empty) and navigate user to View Outfit page
    const handleSubmit = () => {
        axios
        .patch(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}/`,
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
            .patch(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}/`,
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
            <div className="outfit-container">

                {/* Only display if outfit has been started */}
                {Object.keys(currOutfit).length === 0 ? "" :
                <>
                <div className='row'>
                        <div className="input-field col s12">
                <input
                    type='text'
                    id='name'
                    className='input'
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                    required
                ></input>
                <label htmlFor='name' className='active'>Outfit Name </label>
                </div>
                </div>

                <div className='row'>
                    <div className="col s12">
                        <label htmlFor='tags'>Tags </label>
                        <ReactTags
                        tags={tags}
                        autofocus={false}
                        suggestions={suggestions}
                        delimiters={delimiters}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        handleTagClick={handleTagClick}
                        inline
                        autocomplete
                        allowDeleteFromEmptyInput={false}
                        />
                    </div>
                </div>
                </>
                }

                {/* Display depends on whether outfit has been started */}
                <div className='my-draft-message'>
                <Typography
                marginTop={1}
                marginBottom={2}
                align="center">
                {Object.keys(currOutfit).length === 0 ? "Start building a new outfit. " : null }
                {Object.keys(currOutfit).length === 0 ?
                <a href='/' style={{color: "#b19cd9"}}>Add items to closet</a> :
                <a href='/' style={{color: "#b19cd9"}}>Add more items to closet</a> }
                </Typography>
                </div>

                {/* Only display if outfit has been started */}
                {Object.keys(currOutfit).length === 0 ? "" :
                <>
                <Grid2
                    justifyContent="center"
                    container
                    >
                <div>
                    <DisplayOutfit token={token} outfit={currOutfit} location='editOutfit' setCurrOutfit={setCurrOutfit} />
                </div>
                </Grid2>


                <Grid2
                container
                justifyContent="center">
                <div className='my-draft-buttons'>
                    <span onClick={
                        () => {
                        handleSubmit()
                    }
                    }>
                        <SaveButton />
                    </span>
                    <span className='my-draft-delete' onClick={(e) => {
                    handleClickOpen()
                    e.preventDefault()
                    }}>

                    <Button 
                    sx={{backgroundColor: "#b19cd9"}}
                    type="button" 
                    variant="contained" 
                    aria-label="delete outfit">
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
                </Grid2>
                
                </>
                }
            </div>
        )
    }
}

// API call for outfit name
function updateName(nameInput, currOutfit, token) {
    axios
        .patch(`https://stylehub.herokuapp.com/outfit/${currOutfit.id}/`,
        {
            title: nameInput,
        },{
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then((res) => {
            currOutfit.title = nameInput
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
