const allSideMenu = document.querySelectorAll('sidebar li a');
allSideMenu.forEach((item) => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        allSideMenu.forEach((sideMenu) => {
            sideMenu.parentElement.classList.remove('active');
        })
        li.classList.add('active')
    })
})

// Form Lists
const allListItem = document.querySelectorAll('.nav-lists > li > a');
allListItem.forEach((list) => {
    const li = list.parentElement;
    list.addEventListener('click', () => {
        li.classList.toggle('list-active');
    })
})

// Dropdown list
let dropdownList = document.querySelectorAll(".dropdown-container");
dropdownList.forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
        dropdown.classList.toggle("active-drop");
        let selectedValue = dropdown.querySelector(".dropdown-selected > input");
        let optionsList = dropdown.querySelectorAll(".dropdown-options > p");
        optionsList.forEach((option) => {
            option.addEventListener('click', (e) => {
                selectedValue.value = e.target.innerHTML;
            })
        })
    })
})



