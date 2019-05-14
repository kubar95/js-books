import sortItemsList from './sortItemsList'
import filterItemsList from './filterItemsList'
import openModal from './openModal';
import { inputNumberValidator } from './validation'
import createBooksList from './createBooksList'
var booksList = document.getElementsByClassName("books-list")[0]
var bookItemsList = document.getElementsByClassName("books-list__item")
var sortOptionInputs = document.getElementsByClassName("sort-panel__input")
var filterInput = document.getElementsByClassName("filter-panel__input")[0]
var sortOptions = document.getElementsByClassName("sort-panel__options")[0]
var sortInputs = document.getElementsByClassName("sort-panel__input")
var resetBtn = document.getElementsByClassName("search-reset__btn")[0]
var resetKeysMap = { Alt: false, r: false }
import books from '../books.json'
const init = () => {
    createBooksList(books)
    onRefreshSort()
    onRefreshFilter()
    const initialBooksListInnerHtml = booksList.innerHTML
    resetBtn.addEventListener('click', () => resetBtnHandler(initialBooksListInnerHtml))
    document.addEventListener('keydown', () => resetKeyDownHandler(event, initialBooksListInnerHtml))
    document.addEventListener('keyup', resetKeyUpHandler)
    sortOptions.addEventListener('click', sortOptionsHandler)
    filterInput.addEventListener('input', filterInputHandler)
    booksList.addEventListener('click', modalHandler)
}
export default init

const onRefreshSort = () => {
    if (sessionStorage.sort) {
        for (let input of sortInputs)
            if (input.dataset.sort === sessionStorage.sort)
                input.checked = true
        let sortedBooksListItems = sortItemsList(bookItemsList, sessionStorage.sort)
        applySort(sortedBooksListItems)
    }
}
const onRefreshFilter = () => {

    if (sessionStorage.filterValue) {
        filterInput.value = sessionStorage.filterValue
        filterItemsList(bookItemsList, "books-list__pages-amount", sessionStorage.filterValue)
    }
}
const filterInputHandler = (event) => {
    let inputValue = event.target.value;
    const validInputValue = inputNumberValidator(inputValue, 9999)
    event.target.value = validInputValue
    sessionStorage.filterValue = validInputValue;
    filterItemsList(bookItemsList, "books-list__pages-amount", validInputValue)
}

const sortOptionsHandler = (event) => {
    let sortedBooksListItems
    if (event.target.nodeName == "LI") {
        let input = event.target.firstChild
        input.checked = true
        sessionStorage.setItem('sort', input.dataset.sort)
        sortedBooksListItems = sortItemsList(bookItemsList, input.dataset.sort)
    } else {
        let input = event.target
        sessionStorage.setItem('sort', input.dataset.sort)
        sortedBooksListItems = sortItemsList(bookItemsList, input.dataset.sort)
    }
    applySort(sortedBooksListItems)
}
const applySort = (sortedBooksListItems) => {
    for (const bookItem of sortedBooksListItems) {
        booksList.appendChild(bookItem)
    }
}
const resetBtnHandler = (initialBooksListInnerHtml) => {
    sessionStorage.removeItem("sort")
    sessionStorage.removeItem("filterValue")
    booksList.innerHTML = initialBooksListInnerHtml
    filterInput.value = null
    for (let input of sortOptionInputs)
        input.checked = false;
}
const resetKeyDownHandler = (event, initialBooksListInnerHtml) => {
    if (event.key in resetKeysMap) {
        resetKeysMap[event.key] = true;
        if (resetKeysMap.Alt && resetKeysMap.r)
            resetBtnHandler(initialBooksListInnerHtml)
    }
}
const resetKeyUpHandler = (event) => {
    if (event.key in resetKeysMap) {
        resetKeysMap[event.key] = false;
    }
}
const modalHandler = (event) => {
    if (event.target.nodeName != "A")
        event.preventDefault();
    if (event.target.nodeName != "IMG")
        return
    openModal(event)
}

