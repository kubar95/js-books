const filterItemsList = (itemsList, elementContainingFilterProperty, filterValue) => {
    if (!Number.isInteger(filterValue))
        filterValue = parseInt(filterValue)
    for (let item of itemsList) {
        const booksPageAmount = item.getElementsByClassName(elementContainingFilterProperty)[0].innerText;
        if (booksPageAmount <= filterValue)
            item.style.display = "none"
        else {
            if (window.innerWidth > 768)
                item.style.display = "block"

            else
                item.style.display = "flex"
        }

    }
}
export default filterItemsList