import Button from '@mui/material/Button';

export const SaveButton = () => {
    return(
        <Button 
        variant='contained' 
        component='label' 
        sx={{backgroundColor: "#b19cd9"}}
        >
            Save
            <input hidden type='submit' value='Save' />
        </Button>
    )
}