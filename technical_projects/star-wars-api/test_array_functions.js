// This file is just a review of the javascript array functions using mock data from the star wars api. 

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP FUNCTIONS

// Get an array of all names
function getAllNames(characters) {
    return characters.map((character) => {
        return character.name;
    });
}

// Get an array of all heights
function getAllHeights(characters) {
    return characters.map((character) => {
        return character.height
    });
}

// Get an array of all objects with just name and height properties
function getNameAndHeight(characters) {
    return characters.map((character) => {
        return {'name': character.name, 'height': character.height}
    });
}

// Get an array of all first names
function getFirstNames(characters) {
    return characters.map((character) => {
        return character.name.split(' ')[0];
    });   
}

// REDUCE FUNCTIONS

// Get the total mass of all characters
function getTotalMass(characters) {
    return characters.reduce((prev, cur) => {
        return prev + Number(cur.mass);
    },0);
}

// Get the total height of all characters
function getTotalHeight(characters) {
    return characters.reduce((prev, cur) => {
        return prev + Number(cur.height)
    },0);
}

// Get the total number of characters in all the character names
function getTotalNumberOfCharsInNames(characters) {
    return characters.reduce((prev, cur) => {
        let nameNoSpace = cur.name.replace(' ','')
        return prev + Number(nameNoSpace.length)
    },0);
}

// Get the total number of characters by eye color
function getNumofCharactersByEyeColor(characters, eyeColor) {
    let charactersByEyeColor = []
    characters.map((character) => {
        if(character.eye_color === eyeColor) {
            charactersByEyeColor.push(character)
        }
    })
    return charactersByEyeColor.length
}; 

// FILTER FUNCTIONS

function getHeightGreaterThan100(characters) {
    return characters.filter((character) => {
        return character.mass > 100
    })
}

function getNumofCharactersWithHeightLess200(characters) {
    return characters.filter((character) => {
        return character.height < 200
    })
}

function getAllMaleCharacters(characters) {
    return characters.filter((character) => {
        return character.gender === 'male'
    })
}

function getAllFemaleCharacters(characters) {
    return characters.filter((character) => {
        return character.gender === 'female'
    })
}

// SORT FUNCTIONS

// Sort in alphabetic order
function sortByName(characters) {
    return characters.sort((a, b) => {
        if(a.name < b.name) return 1
        if(a.name > b.name) return -1
        else return 0;
    })
}

// Sort by mass in descending order
function sortByMassDesc(characters) {
    return characters.sort((a,b) => {
        return a.mass-b.mass
    })
}

// Sort by height in asscending order
function sortByHeightAsc(characters) {
    return characters.sort((a,b) => {
        return b.mass - a.mass
    })
}

// Sort by gender, ladies first!
function sortByGender(characters) {
    return characters.sort((character) => {
        if(character.gender === 'female') return 1
        if(character.gender === 'male') return -1
        else return 0
    })
}

// EVERY FUNCTIONS

// Does every character have blue eyes?
function eyeCheckAll(characters, color) {
    return characters.every((character) => {
        return (character.eyeColor === color)
    });
}

// Does every character have mass more than 40?
function massCheckAllGreaterThan(characters, mass) {
    return characters.every((character) => {
        return (character.mass > mass)
    });
}

// Is every character shorter than 200?
function heightCheckAllLessThan(characters, height) {
    return characters.every((character) => {
        return (character.height < height)
    });
}

// Is every character male?
function genderCheckAll(characters, gender) {
    return characters.every((character) => {
        return (character.gender === gender)
    });
}

// SOME FUNCTIONS

// Is there at least one male chatacter?
function genderCheckSome(characters, gender) {
    return characters.some((character) => {
        return (character.gender === gender)
    });
}

function eyeCheckSome(characters, color) {
    return characters.some((character) => {
        return (character.eye_color === color)
    })
}

// Is there at least one character taller than 200?
function heightCheckSomeGreaterThan(characters, height) {
    return characters.some((character) => {
        return (character.height > 200)
    });
}

// Is there at least one character that has a mass less than 50?
function massCheckSomeLessThan(characters, mass) {
    return characters.some((character) => {
        return (character.mass < mass)
    });
}

// TEST FUNCTION
function test(characters) {

    console.log("MAP FUNCTIONS \n")
    console.log("NAMES: \n", getAllNames(characters))
    console.log("HEIGHT: \n", getAllHeights(characters))
    console.log("NAME AND HEIGHT: \n", getNameAndHeight(characters))
    console.log("FIRST NAMES: \n", getFirstNames(characters))
    console.log("\n---------------------------------------------------------------------\n")

    console.log("REDUCE FUNCTIONS \n")
    console.log("TOTAL MASS: ", getTotalMass(characters))
    console.log("TOTAL HEIGHT: ", getTotalHeight(characters))
    console.log("TOTAL CHARACTERS IN NAMES: ", getTotalNumberOfCharsInNames(characters))
    console.log("TOTAL CHARACTERS WITH BLUE EYES: ", getNumofCharactersByEyeColor(characters, 'blue'))
    console.log("\n---------------------------------------------------------------------\n")

    console.log("MASS GREATER THAN 100: \n", getHeightGreaterThan100(characters))
    console.log("HEIGHT LESS THAN 200: \n", getNumofCharactersWithHeightLess200(characters))
    console.log("MALES: \n", getAllMaleCharacters(characters))
    console.log("FEMALES: \n", getAllFemaleCharacters(characters))
    console.log("\n---------------------------------------------------------------------\n")

    console.log("SORT FUNCTIONS \n")
    console.log("SORT BY NAME: \n", sortByName(characters))
    console.log("SORT BY MASS: \n", sortByMassDesc(characters))
    console.log("SORT BY HEIGHT: \n", sortByHeightAsc(characters))
    console.log("SORT BY GENDER: \n", sortByGender(characters))
    console.log("\n---------------------------------------------------------------------\n")

    console.log("EVERY FUNCTIONS \n")
    console.log("Does every character have blue eyes?: ", eyeCheckAll(characters, 'blue'))
    console.log("Does every character have mass more than 40?: ", massCheckAllGreaterThan(characters, 40))
    console.log("Is every character shorter than 200?: ", heightCheckAllLessThan(characters, 200))
    console.log("Is every character male?: ", genderCheckAll(characters, 'male'))
    console.log("\n---------------------------------------------------------------------\n")

    console.log("SOME FUNCTIONS \n")
    console.log("Is there at least one male character?: ", genderCheckSome(characters, 'male'))
    console.log("Is there at least one character with blue eyes?: ", eyeCheckSome(characters, 'blue'))
    console.log("Is there at least one character taller than 200?: ", heightCheckSomeGreaterThan(characters, 200))
    console.log("Is there at least one character that has mass less than 50?: ", massCheckSomeLessThan(characters, 50))
    console.log("\n---------------------------------------------------------------------\n")

};

test(characters)