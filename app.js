let title = document.getElementById("title")
 let topNews =document.getElementById("topNews")
axios(`https://newsapi.org/v2/everything?q=tesla&from=2025-03-27&sortBy=publishedAt&apiKey=1c427bebd7184b5297ca200bc5113934`)
.then((res)=>{

let articles = res.data.articles;
let length =articles.length

topNews.innerHTML = `
  <h1 class="header-title">Top ${length} News</h1>
`;

articles.forEach(article => {
  title.innerHTML += `
    <div class="card news-card">
      <img class="news-image" src="${article.urlToImage}" alt="News Image">
      <div class="card-body news-body">
        <h3 class="news-title">${article.title}</h3>
        <p class="news-description">${article.description}</p>
        <p class="news-author">Author: ${article.author}</p>
        <p class="date">Published: ${new Date(article.publishedAt).toLocaleString()}</p>
        <hr class="news-divider">
      </div>
    </div>
  `;
});

})
.catch((err)=>{
console.log(err);
Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });

})




    Swal.fire({
      title: 'Welcome!',
      text: 'Welcome to Top News API',
      icon: 'info',
      confirmButtonText: 'Got it!'
    });
