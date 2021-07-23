# Platzi Conf Merch

Ecommerce built in React. Choose a product to buy, complete the form with your personal data, pay through PayPal or shopping cards and then you will see on Google Maps where your product will be sent.

The API to show the products is built with Strapi CMS.

## Preview 🖼

![Design preview](https://firebasestorage.googleapis.com/v0/b/platzi-conf-merch-d6365.appspot.com/o/platzi-conf-merch.png?alt=media&token=d3f0507f-7d6b-4d5f-aec5-4213552038b2)

## Demo 💻

If you want to see the demo, you can visit this link. **[Demo of the project](https://platzi-conf-merch-d6365.web.app/)**

## Pre requirements 📋

To run this project or you want to modify something, you needed the next points
- A browser.
- A code editor as Visual Studio Code, Atom, Sublime Text, among others.

## How to clone 🚀

To clone this project you can to do with __git clone__

- With HTTPS
~~~
https://github.com/mxrold/Platzi-Conf-Merch-React-Hooks.git
~~~
- With SSH
~~~
git@github.com:mxrold/Platzi-Conf-Merch-React-Hooks.git
~~~

_Not sure how to clone a project? **[Check this](https://github.com/mxrold/how-to-clone-a-repository-in-github/blob/main/README.md)**_


## Installation 🎉

To run this project, you need to have your Google and PayPal API KEY. Once you have it, create a file called **.env**. Then in that file, create the following variables:
~~~
PAYPAL_APP_CLIENT_ID= <YOUR_API_KEY>
~~~
~~~
GOOGLE_MAPS_CLIENT_ID= <YOUR_API_KEY>
~~~

Also, you must install Strapi CMS with this command. 
~~~
npx create-strapi-app <NAME_YOUR_PROJECT> --quickstart
~~~
In this project, Strapi runs on port 1337. Check your configuration and make sure it is on the correct port.


## Building with 🛠️

- HTML
- CSS
- React
- React Router
- Webpack
- Strapi CMS
- PayPal and Google Maps APIs

### Notes
This is a project from **[Platzi React Hooks Professional Course](https://platzi.com/clases/react-hooks/)**.