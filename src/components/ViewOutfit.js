import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { DisplayOutfit } from "./DisplayOutfit";

export const ViewOutfit = () => {
    const [viewOutfit, setViewOutfit] = useState({});
    const AuthStr = 'Token '.concat('af6053eea103fe7a3e9c9d9e4d054cf5f7a527d1')
    const {id} = useParams()


    useEffect(() => {
        axios.get(`https://stylehub.herokuapp.com/outfit/${id}`, {
            headers: {
                Authorization: AuthStr,
            }
            
        })
        .then((res) => 
        setViewOutfit(res.data))
        // console.log(res.data.closet_item))
    }, [AuthStr, id])

    return (
        <div>
            <h1>
            {viewOutfit.title}
            </h1>
            <DisplayOutfit
            outfit={viewOutfit}/>
        </div>

    )
}