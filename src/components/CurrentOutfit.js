import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { SaveButton } from "./SaveButton";

export const CurrentOutfit = ({ currOutfit }) => {
    return(
        <>
            <h1>Current Outfit</h1>
            <p>You haven't starting building an outfit yet. <a href='/'>Go to your closet to start adding items to your outfit.</a></p>
            <div> Outfit image goes here 
                {currOutfit.closet_item.map((item) => (
                    <div className={item.id}>{item.item_image ? <img src={item.item_image} alt='' width='100rem' /> : ''}</div>
                ))}
            </div>
            <IconButton color="primary" aria-label="clear outfit">
                <DeleteIcon />
            </IconButton>
            <SaveButton />
        </>
    )
}