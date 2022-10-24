import axios from "axios"
import { useState } from "react"
import Button from '@mui/material/Button';

export const SearchBar = 
({setItems, token}) => {
    const [searchText, setSearchText] = useState('')

    const handleSearchCloset = (e) => {
        e.preventDefault();
        
        axios
            .get(`https://stylehub.herokuapp.com/mycloset/?search=${searchText}`,
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => {
                console.log(res.data)
                setSearchText('')
                setItems(res.data)
            })
            .catch((err) => console.error(err))
    }

    return(
        <div>
        <form onSubmit={handleSearchCloset}
        style={{marginBottom: 10}}>
        <input
            type='text'
            id='search'
            placeholder="search closet items"
            value={searchText}
            onChange = {(e) => setSearchText(e.target.value)}
        ></input>
        {/* <Button variant='contained' component='label'>
            Search
            <input hidden type='submit'
            value='Search' />
        </Button> */}
        </form>
        </div>
    )
}