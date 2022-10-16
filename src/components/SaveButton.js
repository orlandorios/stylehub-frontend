import Button from '@mui/material/Button';

export const SaveButton = () => {
    return(
        <Button variant='contained' component='label'>
            Save
            <input hidden type='submit' value='Save' />
        </Button>
    )
}