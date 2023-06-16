module.exports = function getFlag(argumento){
    const indexArr = process.argv.indexOf(argumento) + 1
    console.log(argumento)
    console.log(indexArr)
 return process.argv[indexArr]
}

// ou

// function getFlagValue(flag){
//     const indexArr = process.argv.indexOf(flag) + 1
//     return process.argv[indexArr]
// }

// module.exports = getFlag;