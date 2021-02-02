var excel = require('exceljs');

var data = [
    {
        rank: "1",
        year: "1967",
        title: "Sgt. Pepper's Lonely Hearts Club Band",
        artist: "The Beatles",
        genre:  "Rock", // Added
        subgenre: "Rock & Roll, Psychedelic Rock" // Added
    },
    {
        rank: "2",
        year: "1966",
        title: "Pet Sounds",
        artist: "The Beach Boys",
        genre:  "Rock",
        subgenre: "Pop Rock, Psychedelic Rock"
    },
    {
        rank: "3",
        year: "1966",
        title: "Revolver",
        artist: "The Beatles",
        genre: "Rock",
        subgenre: "Psychedelic Rock, Pop Rock"
    },
    {
        rank: "4",
        year: "1965",
        title: "Highway 61 Revisited",
        artist: "Bob Dylan",
        genre:  "Rock",
        subgenre:  "Folk Rock, Blues Rock"
    },
    {
        rank: "5",
        year: "1965",
        title: "Rubber Soul",
        artist: "The Beatles",
        genre:  "Rock, Pop",
        subgenre: "Pop Rock"
    },
    {
        rank: "6",
        year: "1971",
        title: "What's Going On",
        artist: "Marvin Gaye",
        genre: "Funk",
        subgenre: "Soul"
    },
    {
        rank: "7",
        year: "1972",
        title: "Exile on Main St.",
        artist: "The Rolling Stones",
        genre:  "Rock",
        subgenre: "Blues Rock, Rock & Roll, Classic Rock"
    },
    {
        rank: "8",
        year: "1979",
        title: "London Calling",
        artist: "The Clash",
        genre:  "Rock",
        subgenre: "Punk, New Wave"
    },
    {
        rank: "9",
        year: "1966",
        title: "Blonde on Blonde",
        artist: "Bob Dylan",
        genre:  "Rock, Blues",
        subgenre: "Folk Rock, Rhythm & Blues"
    },
    {
        rank: "10",
        year: "1968",
        title: "The Beatles (The While Album)",
        artist: "The Beatles",
        genre:  "Rock",
        subgenre: "Rock & Roll, Pop Rock, Psychedelic Rock, Experimental"
    }
];

var workbook = new excel.Workbook; // create a workbook

var worksheet = workbook.addWorksheet('Top 10'); // add worksheet to workbook

worksheet.columns = [ // Build column headers by adding properties. 
    {header: 'Rank', key: 'rank'},
    {header: 'Year', key: 'year'},
    {header: 'Title', key: 'title'},
    {header: 'Artist', key: 'artist'},
    {header: 'Genre', key: 'genre'},
    {header: 'Subgenre', key: 'subgenre'}
];

// ADDED FEATURES/PROPERTIES:
// - Added properties genre and subgenre
// - added styling/sizing to column header titles
// - Added a default column width
worksheet.getRow('1').font = { size: 16, color: {'argb': 'FFFF6600'}, bold: true, underline: true }; // style headers titles
worksheet.properties.defaultColWidth = 40; // adjusts default column width 


// add rows to worksheet using data from data variable, array of JSON objects
worksheet.addRows(data);
// write workbook to an excel file
workbook.xlsx.writeFile('Top_Albums.xlsx'); 
// Console.log to check/tell us when file has been written
console.log('File has been written');