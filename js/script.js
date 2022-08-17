let allItems;


window.addEventListener('load', function() {
    let headerButtons = document.getElementsByClassName('header-cell');
    allItems = document.getElementById('all-items');

    [...headerButtons].forEach((button, index) => {
        button.onclick = () => {
            openTab(parseInt(button.id.substring(button.id.length - 1)));
        }
    });

    examineHash();

    let contentInput = document.getElementById('content');
    let addButton = document.getElementById('add-btn');

    let allItemsContainer = document.getElementById('all-items-container');
    let activeItemsContainer = document.getElementById('active-items-container');
    let completedItemsContainer = document.getElementById('completed-items-container');

    let toDoApp = new ToDo(allItemsContainer, activeItemsContainer, completedItemsContainer);

    addButton.onclick = function () {
        if (contentInput.value !== '') {
            toDoApp.add(contentInput.value);
            contentInput.value = '';
        }
    }
});

window.addEventListener('hashchange', function(e) {
    examineHash();
});

function openTab(no) {
    document.querySelectorAll('.header-cell').forEach(item => {
        item.classList.add('inactive-header-cell');
    });

    document.getElementById(`tab-${no}`).classList.remove('inactive-header-cell');

    switch(no) {
        case 1:
            allItems.style.marginLeft = '0%';
            window.location.hash = '#all-items';
            break;
        case 2:
            allItems.style.marginLeft = '-100%';
            window.location.hash = '#active-items';
            break;
        case 3:
            allItems.style.marginLeft = '-200%';
            window.location.hash = '#completed-items';
            break;
    }
}

function examineHash() {
    switch(window.location.hash) {
        case '#all-items':
        case '':
            openTab(1);
            break;
        case '#pending-items':
            openTab(2);
            break;
        case '#completed-items':
        openTab(3);
        break;
    }
}