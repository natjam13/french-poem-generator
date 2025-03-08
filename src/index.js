function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey = "6699b7b6dd40692473of31ft3a14835d";
    let context = "You are a poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions. Do noy include a title to the poem. Sign the poem with `Shecodes AI` inside a <strong> element";
    let prompt = `User instructions are: Generate a romantic french poem ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    axios.get(apiURL).then(displayPoem);
}    
  
   

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);