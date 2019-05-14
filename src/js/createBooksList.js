
 const createBooksList = (books) => {
    const booksList = document.getElementsByClassName('books-list')[0]
    books.forEach(e => {
        booksList.innerHTML += `   
    <li class="books-list__item">
        <div class="books-list__img-container">
            <a href="${e.cover.large}">
                <img class="books-list__img"src="${e.cover.small}">
            </a>
        </div>
        <div class="books-list__info">
            <div class="books-list__book-name"> ${e.title} </div>
            <div class="books-list__classifier"><div class="books-list__classifier--border-red"></div></div>
            <div class="books-list__author">By ${e.author}</div>
            <div class="books-list__info-label">Release Date:</div> 
            <div class="books-list__release-date">${e.releaseDate}</div>
            <div class="books-list__info-label">Pages:</div> 
            <div class="books-list__pages-amount">${e.pages}</div>
            <div class="books-list__info-label">Link:</div> 
            <div class="books-list__shop-link"><a class="books-list__shop-link--red" href="${e.link}">shop</a></div>
        </div>
    </li>`
    })
}

export default createBooksList
