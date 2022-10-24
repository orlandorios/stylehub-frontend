import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import axios from "axios"


export const Profile = ({setAuth, token}) => {

    const handleLogout = () => {
        // console.log(setAuth)
        // console.log(token)
        if(token == null) {
            throw new Error('token is not defined')
        }
        // send request to log out on the server
        axios
        .post(
            'https://stylehub.herokuapp.com/auth/token/logout/', {

            },
            {
            headers: {
                Authorization: `Token ${token}`,
            },
            }
        )
        .then(() =>
            // log out in React
        setAuth('', null),
    
        )
    }

    return(
        <div>
        <h1>Profile</h1>

        <Button
        onClick={handleLogout}
        variant="contained">
        Log out
        </Button>
        </div>
        
    )
}