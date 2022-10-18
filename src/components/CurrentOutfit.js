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