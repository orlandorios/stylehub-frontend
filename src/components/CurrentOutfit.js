//TODO: Replace faulty image src with error image

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { SaveButton } from "./SaveButton";
import { DisplayOutfit } from './DisplayOutfit';

export const CurrentOutfit = ({ currOutfit }) => {
    return(
        <>
            <h1>Current Outfit</h1>
            <p>You haven't starting building an outfit yet. <a href='/'>Go to your closet to start adding items to your outfit.</a></p>
            <div> Outfit image goes here 
                <DisplayOutfit outfit={currOutfit} />
            </div>
            <IconButton color="primary" aria-label="clear outfit">
                <DeleteIcon />
            </IconButton>
            <SaveButton />
        </>
    )
}