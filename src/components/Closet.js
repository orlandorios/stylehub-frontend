import { ShowItems } from './ShowItems'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import practice from '../resources/items/item_info';
// import axios from 'axios'



export const Closet = () => {
    const [filteredList, setFilteredList] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
// useEffect(() => {
//     axios
//     .get('https://stylehub.herokuapp.com/mycloset/')
//     .then((res) => setItems(res.data.results))
// }, [])

const filterByType = (filteredData) => {
    if (!selectedType) {
      return filteredData;
    }

    const filteredItems = filteredData.filter(
      (item) => item.type.indexOf(selectedType) !== -1
    );
    return filteredItems;
  };

  const filterByColor = (filteredData) => {
    if (!selectedColor) {
      return filteredData;
    }
    const filteredItems = filteredData.filter(
      (item) => item.color === selectedColor
    );
    return filteredItems;
  };

  const filterByCategory = (filteredData) => {
    if (!selectedCategory) {
      return filteredData;
    }
    const filteredItems = filteredData.filter(
      (item) => item.category === selectedCategory
    );
    return filteredItems;
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    var filteredData = filterByType(practice);
    filteredData = filterByColor(filteredData);
    filteredData = filterByCategory(filteredData);
    setFilteredList(filteredData);
    console.log(filteredList)
  }, [selectedType, selectedColor]);


return (
    <div className="select-bar">
        <FormControl sx={{ m: 4, minWidth: 150 }}>
            <InputLabel id="type-select-label">Type</InputLabel>
            <Select
            labelId="type-select-label"
            id="type-select"
            value={selectedType}
            label="Type"
            onChange={handleTypeChange}
            autoWidth
            >
                <MenuItem value='All types'>All types</MenuItem>
                <MenuItem value='tops'>tops</MenuItem>
                <MenuItem value='bottoms'>bottoms</MenuItem>
                <MenuItem value='outerwear'>outerwear</MenuItem>
                <MenuItem value='shoes'>shoes</MenuItem>
            </Select>
        </FormControl>
    <FormControl sx={{ m: 4, minWidth: 150 }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
        labelId="category-select-label"
        id="category-select"
        value={selectedCategory}
        label="Category"
        onChange={handleCategoryChange}
        >
            <MenuItem value=''>All Categories</MenuItem>
            <MenuItem value='Tops' disabled>Tops</MenuItem>
            <MenuItem value='buton-down'>button-down</MenuItem>
            <MenuItem value='dress'>dress</MenuItem>
            <MenuItem value='shirt'>shirt</MenuItem>
            <MenuItem value='sweater'>sweater</MenuItem>
            <MenuItem value='t-shirt'>t-shirt</MenuItem>
            <MenuItem value='Bottoms' disabled>Bottoms</MenuItem>
            <MenuItem value='pants'>pants</MenuItem>
            <MenuItem value='shorts'>shorts</MenuItem>
            <MenuItem value='skirt'>skirt</MenuItem>
            <MenuItem value='Outerwear' disabled>Outerwear</MenuItem>
            <MenuItem value='coat'>coat</MenuItem>
            <MenuItem value='jacket'>jacket</MenuItem>
            <MenuItem value='vest'>vest</MenuItem>
            <MenuItem value='Shoes' disabled>Shoes</MenuItem>
            <MenuItem value='boots'>boots</MenuItem>
            <MenuItem value='flats'>flats</MenuItem>
            <MenuItem value='heels'>heels</MenuItem>
            <MenuItem value='sandals'>sandals</MenuItem>
            <MenuItem value='slippers'>slippers</MenuItem>
            <MenuItem value='sneakers'>sneakers</MenuItem>
        </Select>
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
            <MenuItem value=''>All Colors</MenuItem>
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
    <ShowItems items={filteredList}/>
    </div>      
    </div>

)
}