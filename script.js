var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops";

var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

if (text.indexOf("Velocriraptor") === -1) {
    var textReplaced = text.replace("Velociraptor", dinosaur.toUpperCase());
}

// console.log(textReplaced);
console.log(textReplaced.length / 2);

console.log(textReplaced.slice(0, 72));
