# Welcome to StyleHub!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Contributors: Christopher Mosley, Heather Smith, Orlando Rios, Nathan Zeager and Aziza Littlejohn.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment

The app has been deployed to: https://https://style-hub.netlify.app/

With every push to this GitHub repository, the live website will reflect your changes.

**Note: This app is intended for mobile view as opposed to browser view. To change your view, left-click on the browser, choose Inspect, and the second button from the top left allows you to toggle between mobile views**

## How Does StyleHub Work?

### Login and Registration

When first coming to the site, users will be prompted to login or register. Through the registrations form, each user profile is given a unique token for authentication. This token allows users to essentially build their closet; add closet items, build and view outfits, and view their closet composition.

**Note: `View Outfit` is the only component that does not require authentication. This allows users to share their StyleHub outfits on other social media platforms as intended**

### My Closet

After successfully loggin in, users enter their closet. Within the top navigation bar, there is a button to the far left with our abbreviated logo that will bring the user to their closet from any page. On the far right of the top navbar is a button to add a new closet item. Beneath the header is a collection of filtering buttons for the closet; for each category (tops, bottoms, outerwear, and shoes), there is a button that renders that specific type of clothing in the main portion of the closet. Below the filter buttons is a search bar, where users can also filter through their closet in a more concise way. The main portion of the Closet displays all of the clothing items the user can build an outfit with! Clothing items are represented by cards that display their photo and a short description. On the bottom left of a clothing item card is the option to add the selected item to the Current Outfit Draft. To the right of that is the option to delete the item from the closet, and to the right of that is a toggle button to show all information about the item; category, subcategory, color, material, source, brand, and personalized tags where the user can add more searchable info. Users can also navigate to this page using the button on the far left of the bottom navigation bar.

### Add Closet Item

To add a new closet item, users are prompted to fill out a form where they can choose the Category, Subcategory, Material, and Source from a drop-down list, and enter their own Brand info and Tags. When successfully saved, the new item will display in the closet.

### My Outfit
