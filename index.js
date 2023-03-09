function introduction(name) {
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name, language) {
   return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language= "JavaScript") {
   return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguageOptional("Gracie", "Python")
/*console.log(introductionWithLanguageOptional('Gracie'))
console.log(introductionWithLanguageOptional('Gracie', 'Python'))*/