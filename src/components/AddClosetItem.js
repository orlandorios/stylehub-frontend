// TODO: replace console log with axios request when endpoint is ready (uncomment code)
// TODO: Add required to pic input (uncomment code)
// TODO: Pull input options from backend when endpoints are ready
// TODO (?): Remove tiny pic preview? (may be gone now)
// TODO: Add inputs for item subtype
// TODO: Update navigation to closet when that has routing
// TODO: Come up with final list for tag suggestion
// TODO (?): Replace camera image with file image if on computer?
// TODO: Add CSS
// TODO (?): Display option to to upload file in addition to camera?
// TODO (?): Store different size images?

import React, { useEffect, useState } from "react"
import { WithContext as ReactTags } from 'react-tag-input';
import { useNavigate } from "react-router";
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import { PhotoCamera } from "@mui/icons-material";
import { SaveButton } from "./SaveButton";


export const AddClosetItem = () => {
    const [type, setType] = useState('')
    const [imgFile, setImgFile] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [material, setMaterial] = useState('')
    const [source, setSource] = useState('')
    const [brand, setBrand] = useState('')
    const [tagList, setTagList] = useState([])

    const [error, setError] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const navigate = useNavigate()

    const handleChange = (inputType, event) => {
        if (inputType === 'type') {
            setType(event.target.value)
        }
        if (inputType === 'color') {
            setColor(event.target.value)
        }
        if (inputType === 'source') {
            setSource(event.target.value)
        }
    }

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
        let tagsToPost = []
        for (const tag of tags) {
            tagsToPost.push(tag.id)
        }

        console.log(type)
        console.log(imgFile)
        console.log(size)
        console.log(color)
        console.log(material)
        console.log(source)
        console.log(brand)
        console.log(tags)
        console.log(tagList)

        setSubmitted(true)

        const form = new FormData();
        form.append("item_choice", type);
        form.append("size", size);
        form.append("color", color);
        form.append("source", source);
        form.append("item_image", imgFile);
        form.append("tag", JSON.stringify(tagsToPost));
        form.append("material", material);
        form.append("brand", brand);

        const options = {
            method: 'POST',
            url: 'https://stylehub.herokuapp.com/mycloset/',
            headers: {
                'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
                Authorization: 'Token af6053eea103fe7a3e9c9d9e4d054cf5f7a527d1'
            },
            data: form
        };

        event.preventDefault()
        axios.request(options).then(function (response) {
            console.log(`Response: ${response.data}`);
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        if (submitted === true) {
            navigate('../user/1')
        }
    },[navigate,submitted])


    return(
        <>
            <h2>Add a Closet Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div><label htmlFor='type'>1. What type of item is it? </label></div>
                    <div><select name='types' id='type' onChange = {(e) => handleChange('type', e)} required>
                        <option value=''>--Select a type--</option>
                        <option value='shirt'>shirt</option>
                    </select></div>

                    <div><label htmlFor='photo'>2. Upload a photo:</label></div>
                    <IconButton color="primary" aria-label="upload picture" component="label" type='button'>
                        <input
                            hidden
                            type='file'
                            id='photo'
                            capture='environment'
                            accept='image/*'
                            onChange= {(e) => {
                                document.getElementById("preview").src = window.URL.createObjectURL(e.target.files[0])
                                setImgFile(e.target.files[0])
                            }}
                            // required
                            >
                        </input>
                        <PhotoCamera type='button' />
                    </IconButton>
                    <div><img id='preview' alt='' width='100rem' /></div>

                    <div>3. Add info about the item.</div>
                    <div><label htmlFor='size'>Size: </label></div>
                    <div><input
                        type='text'
                        id='size'
                        value={size}
                        onChange = {(e) => setSize(e.target.value)}
                        required
                    ></input></div>

                    <div><label htmlFor='color'>Color: </label></div>
                    <div><select name='colors' id='color' onChange = {(e) => handleChange('color', e)} required>
                        <option value=''>--Select a color--</option>
                        <option value='green'>green</option>
                    </select></div>

                    <div><label htmlFor='material'>Material: </label></div>
                    <div><input
                        type='text'
                        id='material'
                        value={material}
                        onChange = {(e) => setMaterial(e.target.value)}
                        required
                    ></input></div>

                    <div><label htmlFor='source'>Source: </label></div>
                    <div><select name='sources' id='source' onChange = {(e) => handleChange('source', e)} required>
                        <option value=''>--Select a source--</option>
                        <option value='brand_store'>brand store</option>
                    </select></div>

                    <div><label htmlFor='brand'>Brand: </label></div>
                    <div><input
                        type='text'
                        id='brand'
                        value={brand}
                        onChange = {(e) => setBrand(e.target.value)}
                        required
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
                        <SaveButton />
                    </div>
                </div>
            </form>
        </>
    )
}