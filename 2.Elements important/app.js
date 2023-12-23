/* Declaration of Global variables */

const myIds = document.getElementById("my-id");
const myClasss = document.querySelector(".title")
console.log(myIds, myClasss,);

// Logic of the code


myClasss.forEach( myClass => {
    myClass.addEventListener("click", () => {
        console.log("je réagis en fonction d'une sélection par classe");
    })
    
});


//  Ne fonctionne pas, car la méthode n'est pas disponible pour cette objet du Dom
myIds.forEach(myId => {
    myId.addEventListener("click", () => {
        console.log("Je réagis en fonction d'une selection par id");
    })

})


