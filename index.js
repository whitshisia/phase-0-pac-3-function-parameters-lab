function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  console.log(introduction("Aki"));

  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguage("Aki", "Ember.js"));

  function introductionWithLanguageOptional(name, language ="Javascript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguage("Gracie"));
   
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    language = language.charAt(0).toUpperCase() + language.slice(1);
    
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguageOptional("Gracie")); // Output: "Hi, my name is Gracie and I am learning to program in JavaScript."
  