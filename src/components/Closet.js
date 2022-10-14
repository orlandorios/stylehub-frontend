import { ShowItems } from './ShowItems'
import useState from 'react'
import { practice } from '../resources/items/item_info'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export const Closet = () => {


return (
    <div className='closet-container'>
        <div className='type-choices'>
        <FormControl>
        <RadioGroup row name="row-radio-buttons-group">
            <FormControlLabel value="tops" control={<Radio />} label="tops" />
            <FormControlLabel value="bottom" control={<Radio />} label="bottoms" /> 
            <FormControlLabel value="outerwear" control={<Radio />} label="outerwear" />
            <FormControlLabel value="shoes" control={<Radio />} label="shoes" />
        </RadioGroup>
        </FormControl>
        </div>

        <ShowItems items={practice}/>
    </div>
)
}