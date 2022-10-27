import { Button } from "@mui/material"
import axios from "axios"


export const Profile = ({setAuth, token}) => {

    const handleLogout = () => {
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

        <Button
        onClick={handleLogout}
        variant="contained">
        Log out
        </Button>
        </div>
        
    )
}