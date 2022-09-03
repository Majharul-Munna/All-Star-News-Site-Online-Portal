const loadNews = (tap) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${tap}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
    .catch(error => console.log(error))
}
const loadCatagory = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => displayCatagory(data.data.news_category))
}

const displayCatagory = catagoris => {
    console.log(catagoris);
    const catagoryContainer = document.getElementById('catagory-container');
    catagoris.forEach(catagori => {
        const catagoryDiv = document.createElement('div');
        catagoryDiv.classList.add('d-btn-con');
        catagoryDiv.innerHTML = `
        <button class = "btn btn-secondary">${catagori.category_name}</button>
        `;
        catagoryContainer.appendChild(catagoryDiv);

    });
}

const displayNews = newss => {
    console.log(newss);
    const newsContainer = document.getElementById('news-container');
  
    newsContainer.innerHTML = ``;
    newss.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
              <div class="card container">
                    <img src="${news.thumbnail_url}" class="img-fluid p-5" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.details.length > 200 ? news.details.slice(0,200) + '...' : news.details}</p>
                    </div>
                    <div class = "d-flex author">
                    <img src="${news.author.img}" class=" author-img img-fluid rounded-circle float-start" alt="...">
                    <p>${news.author.name}</p>
                    <p>${news.author.published_date} </p>
                    </div>
                    <button class = "btn btn-primary">View</button>
                </div>
            `;
        newsContainer.appendChild(newsDiv);
    });
}

const getBreaking = () =>{
    const getBr = "01";
    loadNews(getBr);
}
const getReguler = () =>{
    const getRe = "02";
    loadNews(getRe);
}
const getInternational = () =>{
    const getIn = "03";
    loadNews(getIn);
}
const getSports = () =>{
    const getSp = "04";
    loadNews(getSp);
}
const getEntertainment = () =>{
    const getEn = "05";
    loadNews(getEn);
}
const getCulture = () =>{
    const getCu = "06";
    loadNews(getCu);
}
const getArts = () =>{
    const getAr = "07";
    loadNews(getAr);
}
const getAll = () =>{
    const getAl = "08";
    loadNews(getAl);
}

loadCatagory();

loadNews('08');