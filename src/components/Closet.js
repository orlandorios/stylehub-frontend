import { ShowItems } from './ShowItems'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios'
import { SearchBar } from './SearchBar';



export const Closet = ({currOutfit, setCurrOutfit, setLoading, token}) => {
    const [items, setItems] = useState([])
    const [selectedCat, setSelectedCat] = useState("");
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
    <Button variant="contained" style={{ backgroundColor: '#b19cd9', marginBottom: '5px'}} onClick={handleAllChange} value='all' size="small">All Clothing Items</Button>
<div className='buttons-box'>
    <ButtonGroup 
    variant="text"
    color='secondary'
    aria-label="outlined button group">
        <Button 
        onClick={handleTopsChange} 
        value="tops" size="small" 
        style={{ color: 'white', backgroundColor: '#9cc4d9', borderColor: 'white'}} >Tops</Button>
        <Button 
        onClick={handleBottomsChange} 
        value="bottoms" size="small" 
        style={{ color: 'white', backgroundColor: '#9cc4d9', borderColor: 'white'}}>Bottoms</Button>
        <Button 
        onClick={handleOuterChange} 
        value="outerwear" size="small" 
        style={{ color: 'white', backgroundColor: '#9cc4d9', borderColor: 'white'}}>Outerwear</Button>
        <Button 
        onClick={handleShoesChange} 
        value="shoes" size="small" 
        style={{ color: 'white', backgroundColor: '#9cc4d9', borderColor: 'white'}}>Shoes</Button>
    </ButtonGroup>

    <SearchBar setItems={setItems} token={ token }/>

    <div className="items-container">
    <ShowItems draftItems={draftItems} setDraftItems={setDraftItems} items={items} setItems={setItems} url={url} currOutfit={currOutfit} setCurrOutfit={setCurrOutfit} setLoading={setLoading} token={token}/>
    </div>
    </div>
</div>
)
}
