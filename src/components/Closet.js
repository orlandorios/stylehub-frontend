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
    const [draftItems, setDraftItems] = useState([])


useEffect(() => {
    axios
    .get(url,
    {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
    .then((res) => setItems(res.data))

    // 2nd then request to get items in the current outfit
    .then((res) => {
        axios.get(
            'https://stylehub.herokuapp.com/draft-outfit/',
            {
                headers: {
                    Authorization: `Token ${token}`,
                }
            })
    .then((res) => setDraftItems(res.data))
        })
        .catch((error) => {
            console.log(error)
        })

    }, [token, url])


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
    <div className="closet-container">
    <Button variant="contained" onClick={handleAllChange} value='all' size="small">All Clothing Items</Button>
<div className='buttons-box'>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={handleTopsChange} value="tops" color="secondary" size="small">Tops</Button>
        <Button onClick={handleBottomsChange} value="bottoms" color="secondary" size="small">Bottoms</Button>
        <Button onClick={handleOuterChange} value="outerwear" color="secondary" size="small">Outerwear</Button>
        <Button onClick={handleShoesChange} value="shoes" color="secondary" size="small">Shoes</Button>
    </ButtonGroup>

    <SearchBar setItems={setItems} token={ token }/>

    <div className="items-container">
    <ShowItems draftItems={draftItems} setDraftItems={setDraftItems} items={items} setItems={setItems} url={url} currOutfit={currOutfit} setCurrOutfit={setCurrOutfit} setLoading={setLoading} token={token}/>
    </div>
    </div>
</div>
)
}
