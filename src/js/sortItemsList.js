const sortItemsList = (itemsList,sortType) => {
    if(!Array.isArray(itemsList))
    itemsList=Array.from(itemsList)
    const sortedItemsList = itemsList.sort((a, b) => {
        a = a.getElementsByClassName(sortTypeToClassName[sortType])[0].innerText
        b = b.getElementsByClassName(sortTypeToClassName[sortType])[0].innerText
        return compare[sortType](a, b)
    })
    return sortedItemsList
};
export default sortItemsList;

const sortTypeToClassName = {
    pages: "books-list__pages-amount",
    date: "books-list__release-date",
    name: "books-list__author"
}
export const compare = {
    pages(a, b) {
        return a - b
    },
    date(dateA, dateB) {
        const dateASplit = dateA.split('/')
        const dateBSplit = dateB.split('/')
        const monthA = dateASplit[0] - 1
        const monthB = dateBSplit[0] - 1
        const yearA = dateASplit[1]
        const yearB = dateBSplit[1]
        dateA = new Date(yearA, monthA)
        dateB = new Date(yearB, monthB)
        return dateA - dateB
    },
    name(nameA, nameB) {
        const nameASplit = nameA.split(" ")
        const nameBSplit = nameB.split(" ")
        nameA = nameASplit[2]
        nameB = nameBSplit[2]
        if (nameA < nameB) {
            return -1
        }
        else {
            return nameA > nameB ? 1 : 0
        }
    }
}