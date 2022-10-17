// TODO: replace console log with axios request when endpoint is ready (uncomment code)
// TODO: Add required to pic input (uncomment code) (Why doesn't it let me upload files on my computer?)
// TODO: Get input info/formatting required for axios request
// TODO: Pull input options from backend when endpoints are ready
// TODO (?): Remove tiny pic preview? (may be gone now)
// TODO: Add inputs for item subtype
// TODO: Update navigation to closet when that has routing
// TODO: Come up with final list for tag suggestion
// TODO (?): Replace phone image with file image if on computer?
// TODO: Add CSS
// TODO (?): Display option to to upload file in addition to camera?
// TODO (?): Store different size images?
// TODO: Add padding at bottom for mobile display

import React, { useState } from "react"
import { WithContext as ReactTags } from 'react-tag-input';
import { useNavigate } from "react-router";
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import { PhotoCamera } from "@mui/icons-material";
import { SaveButton } from "./SaveButton";


export const AddClosetItem = () => {
    const [type, setType] = useState('')
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
        for (const tag of tags) {
            setTagList(tagList.push(tag.text))
        }

        console.log(type)
        console.log(size)
        console.log(color)
        console.log(material)
        console.log(source)
        console.log(brand)
        console.log(tags)
        console.log(tagList)

        setType('')
        setSize('')
        setColor('')
        setMaterial('')
        setSource('')
        setBrand('')
        setSubmitted(true)

        // event.preventDefault()
        // axios
        //     .post('https://stylehub.herokuapp.com/mycloset/',
        //     {
        //         // item_choices: type,
        //         // item_image:,
        //         size: size,
        //         color: color,
        //         material: material,
        //         source: source,
        //         brand: brand,
        //         // tag:,
        //     },
        //     {
        //         headers: {
        //             Authorization: `Token ${token}`,
        //         },
        //     })
        //     .then((res) => {
        //         setType('')
        //         setSize('')
        //         setColor('')
        //         setMaterial('')
        //         setSource('')
        //         setBrand('')
        //         setSubmitted(true)
        //     })
        //     .catch((err) => setError(err.response.data.error))
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
                    <div><select name='types' id='type' onChange = {(e) => handleChange('type', e)} required>
                        <option value=''>--Select a type--</option>
                        <option value='top'>top</option>
                        <option value='bottom'>bottom</option>
                        <option value='outer'>outer</option>
                        <option value='shoes'>shoes</option>
                    </select></div>

                    <div><label htmlFor='photo'>2. Upload a photo:</label></div>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input
                            hidden
                            type='file'
                            id='photo'
                            capture='environment'
                            accept='image/*'
                            onChange= {(e) => document.getElementById("preview").src = window.URL.createObjectURL(e.target.files[0])}
                            // required
                            >
                        </input>
                        <PhotoCamera />
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
                        <option value='red'>red</option>
                    </select></div>
                    {/* <div><input
                        type='text'
                        id='color'
                        value={color}
                        onChange = {(e) => setColor(e.target.value)}
                        required
                    ></input></div> */}

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
                        <option value='thrift'>thrift</option>
                    </select></div>
                    {/* <div><input
                        type='text'
                        id='source'
                        value={source}
                        onChange = {(e) => setSource(e.target.value)}
                        required
                    ></input></div> */}

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