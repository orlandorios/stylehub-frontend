// TODO: Come up with final list for tag suggestion
// TODO (?): Replace camera image with file image if on computer?
// TODO: Add CSS
// TODO (?): Display option to to upload file in addition to camera?
// TODO: test all input options

import M from 'materialize-css';

import React, { useEffect, useState } from "react"
import { WithContext as ReactTags } from 'react-tag-input';
import { useNavigate } from "react-router";
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import { PhotoCamera } from "@mui/icons-material";
import { SaveButton } from "./SaveButton";
import loadImage from "blueimp-load-image";
import TextField from '@mui/material/TextField';


export const FormClosetItem = ({token}) => {
    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')
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
        if (inputType === 'category') {
            setCategory(event.target.value)
        }
        if (inputType === 'subcategory') {
            setSubcategory(event.target.value)
        }
        if (inputType === 'color') {
            setColor(event.target.value)
        }
        if (inputType === 'source') {
            setSource(event.target.value)
        }
    }

    // Disables subcategory selection if category option isn't selected
    if (category === 'top') {
        
    } else if (category === 'bottom') {
        
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

        // Covert tags to list of tag strings
        let tagsToPost = []
        for (const tag of tags) {
            tagsToPost.push(tag.id)
        }

        // Rotate iPhone images
        // See https://stackoverflow.com/questions/72794830/uploaded-images-in-react-rotating-when-uploading-on-iphone
        console.log(imgFile)
        let file = imgFile
        
        loadImage(
            file,
            function (img, data) {
                if (data.imageHead && data.exif) {
                    // Reset Exif Orientation data:
                    loadImage.writeExifData(data.imageHead, data, "Orientation", 1);
                    img.toBlob(function (blob) {
                    loadImage.replaceHead(blob, data.imageHead, function (newBlob) {
                        // do something with newBlob
                        file = newBlob;
                    });
                    }, "image/jpeg");
                }
            },
            { meta: true, orientation: true, canvas: true, maxWidth: 800 }
        );
        
        console.log(file)
        setImgFile(file)

        setSubmitted(true)

        const form = new FormData();
        form.append("category", category);
        form.append("subcategory", subcategory);
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
                Authorization: `Token ${token}`
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
            navigate('../')
        }
    },[navigate,submitted])
    
    useEffect(() => {
        // Init Tabs Materialize JS
        M.AutoInit();
    }, [category]);

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='add-item-instr'>Enter your closet item information.</div>
                    <div className='form-group row'>
                        <div className="input-field col s12">
                            <select name='category' id='category' onChange = {(e) => handleChange('category', e)} required>
                                <option value=''>--Select a category--</option>
                                <option value='top'>Top</option>
                                <option value='outerwear'>Outerwear</option>
                                <option value='bottom'>Bottom</option>
                                <option value='shoes'>Shoes</option>
                            </select>
                            <label htmlFor='category'>What category is it? </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="input-field col s12">
                    <select name='subcategory' id='subcategory' onChange = {(e) => handleChange('subcategory', e)} required disabled={category === '' ? true: false}>
                        <option value=''>--Select a subcategory--</option>
                        {getSubcat(category)}
                    </select>
                    <label htmlFor='subcategory'>What subcategory is it? </label>
                    </div>
                    </div>
                    <div className='row'>
                        <div className="col s12">
                            <label htmlFor='photo' className="photo-upload-prompt">Upload a photo </label>
                            <div className="photo-icon-container">
                                <IconButton className='photo-upload-button' color="primary" aria-label="upload picture" component="label" type='button'>
                                    
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
                                        required
                                        >
                                    </input>
                                    <PhotoCamera type='button' />
                                </IconButton>
                            </div>
                            <div className="photo-upload-preview"><img id='preview' alt='' width='100rem' />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="input-field col s12">
                            <input
                            className="validate"
                            type='text'
                            id='size'
                            value={size}
                            onChange = {(e) => setSize(e.target.value)}
                            required
                            ></input>
                            <label htmlFor='size'>Size </label> 
                        </div>
                    </div>

                    <div className='row'>
                        <div className="input-field col s12">
                        
                            <select name='colors' id='color' onChange = {(e) => handleChange('color', e)} required>
                            <option value='' disabled selected>--Select a color--</option>
                            <option value='white'>White</option>
                            <option value='green'>Green</option>
                            <option value='yellow'>Yellow</option>
                            <option value='orange'>Orange</option>
                            <option value='red'>Red</option>
                            <option value='pink'>Pink</option>
                            <option value='purple'>Purple</option>
                            <option value='turquoise'>Turquoise</option>
                            <option value='blue'>Blue</option>
                            <option value='brown'>Brown</option>
                            <option value='black'>Black</option>
                            <option value='grey'>Grey</option>
                            <option value='multi'>Multi</option>
                            </select>
                            <label htmlFor='color'>Color </label> 
                        </div>
                    </div>

                    <div className='row'>
                        <div className="input-field col s12">
                        <label htmlFor='material'>Material </label>
                        <input
                        type='text'
                        id='material'
                        value={material}
                        onChange = {(e) => setMaterial(e.target.value)}
                        required
                        ></input>
                    </div>
                    </div>

                    <div className='row'>
                        <div className="input-field col s12">
                            <select name='sources' id='source' onChange = {(e) => handleChange('source', e)} required>
                            <option value=''>--Select a source--</option>
                            <option value='brand_store'>Brand Store</option>
                            <option value='department_store'>Department Store</option>
                            <option value='discount_store'>Discount Store</option>
                            <option value='thrift_shop'>Thrift Shop</option>
                            <option value='resale/consignment_shop'>Resale/Consignment Shop</option>
                            <option value='friend'>Friend</option>
                            <option value='other'>Other</option>
                            </select>
                            <label htmlFor='source'>Source </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="input-field col s12">
                            <label htmlFor='brand'>Brand </label>
                            <input
                            type='text'
                            id='brand'
                            value={brand}
                            onChange = {(e) => setBrand(e.target.value)}
                            required
                            ></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col s12">
                            <label htmlFor='tags'>Tags </label>
                            <ReactTags
                                tags={tags}
                                suggestions={suggestions}
                                delimiters={delimiters}
                                handleDelete={handleDelete}
                                handleAddition={handleAddition}
                                handleDrag={handleDrag}
                                handleTagClick={handleTagClick}
                                inline
                                autocomplete
                                allowDeleteFromEmptyInput={false}
                            />
                        </div>
                    </div>
                    <div className='add-item-save'>
                        <SaveButton />
                    </div>
                    
                </div>
            </form>
        </>
    )
}

// Determines category options based on subcategory display
const getSubcat = (category) => {
    if (category === 'top') {
        return <>
            <option value='button-down'>Button Down</option>
            <option value='dress'>Dress</option>
            <option value='shirt'>Shirt</option>
            <option value='sweater'>Sweater</option>
            <option value='t-shirt'>T-shirt</option>
        </>
    }else if (category === 'outerwear') {
        return <>
            <option value='cardigan'>Cardigan</option>
            <option value='coat'>Coat</option>
            <option value='jacket'>Jacket</option>
            <option value='vest'>Vest</option>
        </>
    }else if (category === 'bottom') {
        return <>
            <option value='pants'>Pants</option>
            <option value='shorts'>Shorts</option>
            <option value='skirt'>Skirt</option>
        </>
    }else if (category === 'shoes') {
        return <>
            <option value='boots'>Boots</option>
            <option value='flats'>Flats</option>
            <option value='heels'>Heels</option>
            <option value='sandals'>Sandals</option>
            <option value='slippers'>Slippers</option>
            <option value='sneakers'>Sneakers</option>
        </>
    }
}