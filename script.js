let Conatiner = document.getElementById("Container");
let nextBtn = document.getElementById("btn");
let main = document.getElementById("main");

nextBtn.addEventListener("click", showQuotes);
async function showQuotes() {
  const url = "https://dummyjson.com/quotes/random";
  const response = await fetch(url);
  try {
    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    const result = await response.json();
   nextQuote(result);
  } catch (error) {
    console.log(error);
  }
}

function nextQuote(result) {
    main.innerHTML="";
    let content = document.createElement("span");
    content.innerHTML = `<span>${result.quote}</span>`
    let author = document.createElement("p")
  author.innerHTML = `<p> ~ ${result.author}</p>`;
  nextBtn.insertAdjacentElement("beforebegin", content)
  nextBtn.insertAdjacentElement("beforebegin", author)
  main.appendChild(content);
  main.appendChild(author);
}

