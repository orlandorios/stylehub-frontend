// TODO: Input for type of item
// TODO: Fix uploaded pic display
// TODO: Update navigation to closet when that has routing
// TODO: replace console log with axios request when endpoint is ready

import React, { useState } from "react"
import sampleImg from "../resources/items/images/bape_croptop.jpeg"
import { WithContext as ReactTags } from 'react-tag-input';
import { useNavigate } from "react-router";

export const AddClosetItem = () => {
    const [type, setType] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [material, setMaterial] = useState('')
    const [source, setSource] = useState('')
    const [brand, setBrand] = useState('')

    const [submitted,setSubmitted] = useState(false)
    const navigate = useNavigate()

    // Tag code
    // Tag documentation found here: https://www.npmjs.com/package/react-tag-input
    const [tags, setTags] = React.useState([])

    const possibleTags = ['spring', 'summer', 'fall', 'winter']
    const suggestions = possibleTags.map(possibleTag => {
    return {
        id: possibleTag,
        text: possibleTag
    };
    });

    const KeyCodes = {
        comma: 188,
        enter: 13
    };
    
    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };
    
    const handleAddition = tag => {
        setTags([...tags, tag]);
    };
    
    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
    };
    
    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
    };


    // Submit button action
    const handleSubmit = (event) => {
        console.log(size)
        console.log(color)
        console.log(material)
        console.log(source)
        console.log(brand)

        setSize('')
        setColor('')
        setMaterial('')
        setSource('')
        setBrand('')
        setSubmitted(true)
    }

    if (submitted === true) {
        navigate('../user/1')
    }


    return(
        <>
            <h2>Add a Closet Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div><label htmlFor='type'>1. What type of item is it? </label></div>
                    <div><input
                        type='text'
                        id='type'
                        value={type}
                        onChange = {(e) => setType(e.target.value)}
                    ></input></div>

                    <label htmlFor='photo'>2. Upload a photo: </label>
                    <input
                        type='file'
                        id='photo'
                        capture='environment'
                        accept='image/*'
                        onChange= {(e) => document.getElementById("preview").src = window.URL.createObjectURL(e.target.files[0])}
                    ></input>
                    <div><img id='preview' alt='' width='100rem' /></div>

                    <div>3. Add info about the item.</div>
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

                    <div>4. Add tags:</div>
                    <ReactTags
                    tags={tags}
                    suggestions={suggestions}
                    delimiters={delimiters}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    handleTagClick={handleTagClick}
                    inputFieldPosition="top"
                    autocomplete
                    allowDeleteFromEmptyInput={false}
                    />
                    <div>
                        <input type='submit' value='Save' />
                    </div>
                </div>
            </form>
        </>
    )
}