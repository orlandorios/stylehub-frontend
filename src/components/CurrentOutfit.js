// TODO: Delete button functionality
// TODO: Save button functionality

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { SaveButton } from "./SaveButton";
import { DisplayOutfit } from './DisplayOutfit';

export const CurrentOutfit = ({ currOutfit }) => {
    return(
        <>
            <h1>Current Outfit</h1>
            <p>{currOutfit.length === 0 ? "You haven't starting building an outfit yet." : `You have ${currOutfit.closet_item.length} closet items in your outfit so far.`} <a href='/'>Go to your closet to add items to your outfit.</a></p>
            <div>
                <DisplayOutfit outfit={currOutfit} location='editOutfit' />
            </div>
            <IconButton color="primary" aria-label="clear outfit">
                <DeleteIcon />
            </IconButton>
            <SaveButton />
        </>
    )
}