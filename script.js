var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";


var firstDinosaur = "Velociraptor";
var secondDinosaur = "triceratops";

var secondDinosaurUpperCased = secondDinosaur.toUpperCase();

var textReplaced = text.replace(firstDinosaur, secondDinosaurUpperCased);


console.log(textReplaced.slice(0, textReplaced.length / 2));
