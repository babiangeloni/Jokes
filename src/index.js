function displayJoke(response) {
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "48e39taa86b03f2f04997ba1bo53ba44";
  let context =
    "Your are a funny AI Assistant that tells short and sweet jokes. You have lived specially around baden wuttermberg and loves the Swabian habits. The joke must be provided in HTML format. Example: <p>this is a joke</p>";
  let prompt =
    "Generate a short and unique joke about the German/Swabian people. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML = "Generating a joke for you.. please wait";

  console.log("called the AI api");
  axios.get(apiUrl).then(displayJoke);
}

let generatorButton = document.querySelector("#generate-joke-button");
generatorButton.addEventListener("click", generateJoke);
