import { ShowItems } from './ShowItems'
import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import { pink } from '@mui/material/colors';
import RadioGroup from '@mui/material/RadioGroup';
import axios from 'axios'



export const Closet = ({currOutfit, setCurrOutfit, setLoading, token}) => {
    const [items, setItems] = useState([])
    const [selectedCat, setSelectedCat] = useState("");
    const [selectedColor, setSelectedColor] = useState('');
    const [url, setUrl] = useState('https://stylehub.herokuapp.com/mycloset/')
    const allUrl = 'https://stylehub.herokuapp.com/mycloset/'
    const topsUrl = 'https://stylehub.herokuapp.com/mycloset-tops/'
    const bottomsUrl = 'https://stylehub.herokuapp.com/mycloset-bottoms/'
    const outerUrl = 'https://stylehub.herokuapp.com/mycloset-outerwear/'
    const shoesUrl = 'https://stylehub.herokuapp.com/mycloset-shoes/'
    const controlProps = (item) => ({
        checked: selectedCat === item,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
      });

useEffect(() => {
    axios
    .get(url,
    {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
    .then((res) => setItems(res.data))
}, [token, url])

const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
}; 

const filterByColor = (filteredData) => {
    if (!selectedColor) {
        return filteredData;
    }
    const filteredItems = filteredData.filter(
        (item) => item.color === selectedColor);
        return filteredItems;
}


const handleAllChange = (event) => {
    setSelectedCat(event.target.value);
    if (event.target.value === 'all') {
        setUrl(allUrl)
    }
};

const handleTopsChange = (event) => {
    setSelectedCat(event.target.value);
    if (event.target.value === 'tops') {
        setUrl(topsUrl)
    }
};

const handleBottomsChange = (event) => {
    setSelectedCat(event.target.value);
    if (event.target.value === 'bottoms') {
        setUrl(bottomsUrl)
    }
};

const handleOuterChange = (event) => {
    setSelectedCat(event.target.value);
    if (event.target.value === 'outerwear') {
        setUrl(outerUrl)
    }
};

const handleShoesChange = (event) => {
    setSelectedCat(event.target.value);
    if (event.target.value === 'shoes') {
        setUrl(shoesUrl)
    }
};

useEffect(() => {
    var filteredData = filterByColor(items);
    setItems(filteredData)
    console.log(items)
}, []);


return (
    <div className="select-bar">
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Category</FormLabel>
      <FormControlLabel onChange={handleAllChange} control={<Radio {...controlProps('all')} sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },
  }} size="small" />} label="All Clothing Items" />
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onChange={handleTopsChange} control={<Radio {...controlProps('tops')} color="secondary" size="small" />} label="Tops" />
        <FormControlLabel onChange={handleBottomsChange} control={<Radio {...controlProps('bottoms')} color="secondary" size="small"/>} label="Bottoms" />
        <FormControlLabel onChange={handleOuterChange} control={<Radio {...controlProps('outerwear')} color="secondary" size="small"/>} label="Outerwear" />
        <FormControlLabel onChange={handleShoesChange} control={<Radio {...controlProps('shoes')} color="secondary" size="small"/>} label="Shoes" />
      </RadioGroup>
    </FormControl>
    <FormControl sx={{ m: 4, minWidth: 150 }}>
        <InputLabel id="color-select-label">Color</InputLabel>
        <Select
        labelId="color-select-label"
        id="color-select"
        value={selectedColor}
        label="Color"
        onChange={handleColorChange}
        >
            <MenuItem value='All Colors'>All Colors</MenuItem>
            <MenuItem value='green'>green</MenuItem>
            <MenuItem value='turquoise'>turquoise</MenuItem>
            <MenuItem value='blue'>blue</MenuItem>
            <MenuItem value='purple'>purple</MenuItem>
            <MenuItem value='red'>red</MenuItem>
            <MenuItem value='pink'>pink</MenuItem>
            <MenuItem value='orange'>orange</MenuItem>
            <MenuItem value='yellow'>yellow</MenuItem>
            <MenuItem value='white'>white</MenuItem>
            <MenuItem value='grey'>grey</MenuItem>
            <MenuItem value='black'>black</MenuItem>
            <MenuItem value='brown'>brown</MenuItem>
            <MenuItem value='multi'>multi</MenuItem>
        </Select>
    </FormControl>

    <div className="items-container">
    <ShowItems items={items} currOutfit={currOutfit} setCurrOutfit={setCurrOutfit} setLoading={setLoading} token={token}/>
    </div>      
    </div>

)
}