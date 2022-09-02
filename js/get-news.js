const loadNews = (tap) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${tap}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
}

const displayNews = newss => {
    console.log(newss);
    const newsContainer = document.getElementById('news-container');
    newss.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
              <div class="card container">
                    <img src="${news.thumbnail_url}" class="" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.details.slice(0,200)}</p>
                    </div>
                    <div class = "d-flex">
                    <img src="${news.author}" class="img-fluid rounded float-start" alt="...">
                    <p>${news.author.name}</p>
                    </div>
                    
              </div>
        `;
        newsContainer.appendChild(newsDiv);
    });
}

loadNews('03');