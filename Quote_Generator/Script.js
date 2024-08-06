  let quoted = document.getElementById('Quote')
  let authors = document.getElementById('author')
  let btn = document.getElementById('btn')


  const url ="https://dummyjson.com/quotes/random"

  let getquote = ()=>{
    fetch(url)
    .then((data)=> data.json())
    .then((item) =>{
      console.log(item.quote)
      console.log(item.author)
      quoted.textContent = item.quote
      authors.innerText = item.author
    });
  }
  window.addEventListener("load",getquote)
  btn.addEventListener("click",getquote)

  function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quoted.innerHTML +"_______ by " + authors.innerHTML,"Tweet Window", "width=600, height=300");
  }