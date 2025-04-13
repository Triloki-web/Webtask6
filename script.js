// const quote = document.getElementById("quote");
// const author = document.getElementById("author");

// const api_url = "https://api.quotable.io/random";

// async function getquote(url) {
//   const response = await fetch(url);
//   var data = await response.json();
//   quote.innerHTML = data.content;
//   author.innerHTML = data.author;
// }

// getquote(api_url);

// function tweet(){
//   window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "-----by" + author.innerHTML, "Tweet Window", "width=600, height=300");
// }

const api_url =
  "https://api.allorigins.win/get?url=https://zenquotes.io/api/random";
async function getquote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const contents = JSON.parse(data.contents);
    const randomIndex = Math.floor(Math.random() * contents.length);
    const quote = contents[randomIndex];
    console.log("Quote : ", contents[0].q);
    console.log("Author : ", contents[0].a);

    document.getElementById("quote").textContent = `"${quote.q}"`;
    document.getElementById("author").textContent = `"- ${quote.a}"`;
  } catch (error) {
    console.log("Error fetching quote :", error);
  }
}

getquote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "-----by" +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}
