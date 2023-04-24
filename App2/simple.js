// const { response } = require("express");

const { response } = require("express");

// fetch('http://example.com/movies.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data));


fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((data)=> console.log(data));