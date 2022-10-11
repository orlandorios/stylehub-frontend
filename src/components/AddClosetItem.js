import { useState } from "react"
import sampleImg from "../resources/items/images/bape_croptop.jpeg"

export const AddClosetItem = () => {
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [material, setMaterial] = useState('')
    const [source, setSource] = useState('')
    const [brand, setBrand] = useState('')

    return(
        <>
            <h2>Add a Closet Item</h2>
            <form>
                <div>
                    <label htmlFor='photo'>1. Upload a photo: </label>
                    <input
                        type='file'
                        id='photo'
                    ></input>
                    <div><img src={sampleImg} alt='User image' width='100rem' /></div>
                    <div>2. Add info about the item.</div>
                    <div><label htmlFor='size'>Size: </label></div>
                    <div><input
                        type='text'
                        id='size'
                        value={size}
                        onChange = {(e) => setSize(e.target.value)}
                    ></input></div>
                    <div><label htmlFor='color'>Color: </label></div>
                    <div><input
                        type='text'
                        id='color'
                        value={color}
                        onChange = {(e) => setColor(e.target.value)}
                    ></input></div>
                    <div><label htmlFor='material'>Material: </label></div>
                    <div><input
                        type='text'
                        id='material'
                        value={material}
                        onChange = {(e) => setMaterial(e.target.value)}
                    ></input></div>
                    <div><label htmlFor='source'>Source: </label></div>
                    <div><input
                        type='text'
                        id='source'
                        value={source}
                        onChange = {(e) => setSource(e.target.value)}
                    ></input></div>
                    <div><label htmlFor='brand'>Brand: </label></div>
                    <div><input
                        type='text'
                        id='brand'
                        value={brand}
                        onChange = {(e) => setBrand(e.target.value)}
                    ></input></div>
                    {/* <input htmlFor='color'>Color: </input>
                    <label
                        type='text'
                        id='color'
                    ></label>
                    <input htmlFor='material'>Material: </input>
                    <label
                        type='text'
                        id='material'
                    ></label>
                    <input htmlFor='source'>Source: </input>
                    <label
                        type='text'
                        id='source'
                    ></label>
                    <input htmlFor='brand'>Brand: </input>
                    <label
                        type='text'
                        id='brand'
                    ></label> */}
                </div>
            </form>
        </>
    )
}