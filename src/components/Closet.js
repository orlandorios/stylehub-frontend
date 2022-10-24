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
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios'
import { SearchBar } from './SearchBar';



export const Closet = ({currOutfit, setCurrOutfit, setLoading, token}) => {
    const [items, setItems] = useState([])
    const [selectedCat, setSelectedCat] = useState("");
    const [selectedSubCat, setSelectedSubCat] = useState('');
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
    if (selectedColor === 'All Colors') {
        setSelectedColor('')
    }
    setSelectedColor(event.target.value);
    console.log(selectedColor)
    return (filterByColor(items))
}; 

const filterByColor = (items) => {
    if (!selectedColor) {
        return items;
    }
    const filteredItems = items.filter(
        (item) => item.color === selectedColor);
        console.log(filteredItems)
        return setItems(filteredItems);
}

// useEffect(() => {
//     var filteredData = filterByColor(items);
//     setItems(filteredData)
//     console.log(items)
// }, []);

const handleSubCatChange = (event) => {
    setSelectedSubCat(event.target.value)
}

const getSubcat = (selectedCat) => {
    if (selectedCat === 'tops') {
        return <>
            <MenuItem value='button-down'>Button Down</MenuItem>
            <MenuItem value='dress'>Dress</MenuItem>
            <MenuItem value='shirt'>Shirt</MenuItem>
            <MenuItem value='sweater'>Sweater</MenuItem>
            <MenuItem value='t-shirt'>T-shirt</MenuItem>
        </>
    }else if (selectedCat === 'outerwear') {
        return <>
            <MenuItem value='cardigan'>Cardigan</MenuItem>
            <MenuItem value='coat'>Coat</MenuItem>
            <MenuItem value='jacket'>Jacket</MenuItem>
            <MenuItem value='vest'>Vest</MenuItem>
        </>
    }else if (selectedCat === 'bottoms') {
        return <>
            <MenuItem value='pants'>Pants</MenuItem>
            <MenuItem value='shorts'>Shorts</MenuItem>
            <MenuItem value='skirt'>Skirt</MenuItem>
        </>
    }else if (selectedCat === 'shoes') {
        return <>
            <MenuItem value='boots'>Boots</MenuItem>
            <MenuItem value='flats'>Flats</MenuItem>
            <MenuItem value='heels'>Heels</MenuItem>
            <MenuItem value='sandals'>Sandals</MenuItem>
            <MenuItem value='slippers'>Slippers</MenuItem>
            <MenuItem value='sneakers'>Sneakers</MenuItem>
        </>
    }
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


return (
    <> 
    <Button variant="contained" onClick={handleAllChange} value='all' size="small">All Clothing Items</Button>
<div className='buttons-box'>
    <ButtonGroup row variant="contained" aria-label="outlined primary button group">
        <Button onClick={handleTopsChange} value="tops" color="secondary" size="small">Tops</Button>
        <Button onClick={handleBottomsChange} value="bottoms" color="secondary" size="small">Bottoms</Button>
        <Button onClick={handleOuterChange} value="outerwear" color="secondary" size="small">Outerwear</Button>
        <Button onClick={handleShoesChange} value="shoes" color="secondary" size="small">Shoes</Button>
        
      </ButtonGroup>
    <FormControl sx={{ m: 2, minWidth: 150 }}>
        <InputLabel id='subcategory-select-label'>SubCategory</InputLabel>          <Select 
        labelId='subcategory-select-label'
        id='subcategory-select'
        onChange = {(e) => handleSubCatChange(e)} 
        required disabled={selectedCat === '' ? true: false}>
            <MenuItem value=''>All {selectedCat}</MenuItem>
            {/* {getSubcat(selectedCat)} */}
        </Select>
    </FormControl>
    <FormControl sx={{ m: 2, minWidth: 150 }}>
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

    <SearchBar setItems={setItems} token={ token }/>

    <div className="items-container">
    <ShowItems items={items} currOutfit={currOutfit} setCurrOutfit={setCurrOutfit} setLoading={setLoading} token={token}/>
    </div>      
    </div>
</>
)
}