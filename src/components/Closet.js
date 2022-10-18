import { ShowItems } from './ShowItems'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios'



export const Closet = () => {
const [items, setItems] = useState([])
console.log(items)
const [type, setType] = useState('')

useEffect(() => {
    axios
    .get('https://stylehub.herokuapp.com/mycloset/')
    .then((res) => setItems(res.data.results))
}, [])

const handleChange = (event) => {
    setType(event.target.value)
    setItems((items.filter((item)=>item.type===type)))
    console.log(event)
}

return (
    <div className="select-bar">
        <FormControl sx={{ m: 4, minWidth: 150 }}>
            <InputLabel id="tops-select">Tops</InputLabel>
            <Select
            labelId="tops-select"
            id="tops"
            value="tops"
            label="tops"
            onChange={(e)=>{handleChange(e)}}
            autoWidth
            >
                <MenuItem value='button-down'>button-down</MenuItem>
                <MenuItem value='shirt'>shirt</MenuItem>
                <MenuItem value='dress'>dress</MenuItem>
                <MenuItem value='t-shirt'>t-shirt</MenuItem>
                <MenuItem value='sweater'>sweater</MenuItem>
            </Select>
        </FormControl>
    <FormControl sx={{ m: 4, minWidth: 150 }}>
        <InputLabel id="bottoms-select">Bottoms</InputLabel>
        <Select
        labelId="bottoms-select"
        id="bottoms"
        value="bottoms"
        label="bottoms"
        onChange={handleChange}
        >
            <MenuItem value='pants'>pants</MenuItem>
            <MenuItem value='shorts'>shorts</MenuItem>
            <MenuItem value='skirt'>skirt</MenuItem>
        </Select>
    </FormControl>
    <FormControl sx={{ m: 4, minWidth: 150 }}>
        <InputLabel id="outerwear-select">Outerwear</InputLabel>
        <Select
        labelId="outerwear-select"
        id="outerwear"
        value="outerwear"
        label="outerwear"
        onChange={handleChange}
        >
            <MenuItem value='coat'>coat</MenuItem>
            <MenuItem value='jacket'>jacket</MenuItem>
            <MenuItem value='vest'>vest</MenuItem>
            <MenuItem value='cardigan'>cardigan</MenuItem>
        </Select>
    </FormControl>
    <FormControl sx={{ m: 4, minWidth: 150 }}>
        <InputLabel id="shoes-select">Shoes</InputLabel>
        <Select
        labelId="shoes-select"
        id="shoes"
        value="shoes"
        label="shoes"
        onChange={handleChange}
        >
            <MenuItem value='boots'>boots</MenuItem>
            <MenuItem value='flats'>flats</MenuItem>
            <MenuItem value='heels'>heels</MenuItem>
            <MenuItem value='sandals'>sandals</MenuItem>
            <MenuItem value='sneakers'>sneakers</MenuItem>
        </Select>
    </FormControl>

    <div className="items-container">
    <ShowItems items={items}/>
    </div>      
    </div>

)
}