fs = require('fs')
if (!fs.existsSync('Json/Data.json')) {
    //create new file if not exist
    fs.closeSync(fs.openSync('Json/Data.json', 'w'));
}

// read file and store to file variable
const file = fs.readFileSync('Json/Data.json')

// Create array that contain the object.
const data = [
{
    ID:"page5",
    Headers: "Top Place to Visit at Phnom Penh",
    tilte: "National Museam",
    writer: "Lun Rabou",
    date:"Th 28, 2022",
    image: "Cambodian Cultural Village.jpg",
    paragraph1:"The National Museum of Cambodia houses the world's best collection of Khmer sculpture, spanning millennia of outstanding Khmer design. It is located in a charming terracotta structure of classical architecture (constructed between 1917 and 1920), close north of the Royal Palace, with an appealing courtyard garden.",
    paragraph2:"The National Museum of Cambodia houses the world's best collection of Khmer sculpture, spanning millennia of outstanding Khmer design. It is located in a charming terracotta structure of classical architecture (constructed between 1917 and 1920), close north of the Royal Palace, with an appealing courtyard garden.",
    paragraph3:"There are guides that speak both French and English accessible. Alternatively, you may purchase a brochure that contains pertinent information on the locations of the museum's most important exhibits. Postcards, imitation sculptures, and books on art and culture may be purchased from the store located near the main entrance.",
    previous: "Angkor Wat",
    src: "index1_Web.html",
    footerImg: "Angkor-Wat.jpg",
    next: "Cambodian Cultural Village",
    src1: "index1_Web.html",
    nextImg:"Cambodian Cultural Village.jpg"
},
];

// Process write the data into json format.

//check if file is empty
if (file.length == 0) {
    //add data to json file
    fs.writeFileSync("Json/Data.json", JSON.stringify([data]))
} else {
    //append data to json file
    const json = JSON.parse(file.toString());


    //add data that contain json element to json by using json
    json.push(data);
    fs.writeFileSync("Json/Data.json", JSON.stringify(json))

}