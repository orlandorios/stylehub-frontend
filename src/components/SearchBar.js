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
        <>
        <form onSubmit={handleSearchCloset}>
        <label htmlFor='search'>Search Closet: </label>
        <input
            type='text'
            id='search'
            value={searchText}
            onChange = {(e) => setSearchText(e.target.value)}
        ></input>
        <Button variant='contained' component='label'>
            Search
            <input hidden type='submit'
            value='Search' />
        </Button>
        </form>
        </>
    )
}