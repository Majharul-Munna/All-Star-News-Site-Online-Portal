const loadNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => displayNews(data.data))
}

const displayNews = newss => {
}

loadNews();