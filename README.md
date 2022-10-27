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

When first coming to the site, users will be prompted to login or register. Through the registration form, each user profile is given a unique token for authentication. This token allows users to essentially build their closet; add closet items, build and view outfits, and view their closet composition.

**Note: `View Outfit` is the only component that does not require authentication. This allows users to share their StyleHub outfits on other social media platforms as intended**

### My Closet

After successfully logging in, users enter their closet. In the top navigation bar, there is a button to the far left with our abbreviated logo. This brings the user to their closet from any page. On the far right of the top navbar is a button to add a new closet item. Beneath the header is a collection of filtering buttons for the closet; each category has a button that renders that specific type of clothing. Below the filter buttons is a search bar where users can also filter through their closet in a more concise way. The main portion of the Closet displays all of the clothing items the user can build an outfit with! Clothing items are represented by cards that display their photo and a short description. On each clothing item's card, there is an option to add the selected item to the Current Outfit Draft, delete the item from the closet, and show all information about the item; category, subcategory, color, material, source, brand, and personalized tags where the user can add more searchable info. Users can also navigate to this page using the button on the far left of the bottom navigation bar.

### Add Closet Item

To add a new closet item, users are prompted to fill out a form where they can choose the Category, Subcategory, Material, and Source from a drop-down list, and enter their own Brand and Tags. When successfully saved, the new item will display in the closet.

### My Draft

On each closet item, there is a button on the bottom left of the card that allows the user to add that item to My Draft. Once clicked, the plus sign turns into a check to show that the the item is added and the user is automatically brought to view the current outfit draft. Here, the items are displayed in their respective areas, to mimick how they might look on the user's body! There is a hyperlink on the top of this view to add more items to the draft, which reroutes the user back to the closet. Once the draft outfit is finished, the user can save it to their outfits by giving the outfit a name and adding unique tags.

**Note: There is only one draft allowed at a time.**

### Outfits

On the bottom navbar, the second button from the right is where the user can find all of their saved outfits. On each outfit card, there is a button to view, edit, and expand to see the outfit name.

### Stats

The second button from the left on the bottom navbar brings the user to their Style Stats page. Here they can see a colorful donut chart displaying the differnt variables of their closet composition (category, color, brand, and source) by percentage points.

### Logout

To logout of StyleHub, there is an account icon at the top right of the page that drops down to show a Logout button. Once clicked, the user is brought back to our login and registration page.

Thank you for checking out our app, we hope you enjoy planning your fire fits with StyleHub!
