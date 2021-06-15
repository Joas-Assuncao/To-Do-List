const goals = document.querySelector('#goals');
let addToList = document.querySelector('button#addToList');
let removeToList = document.querySelector('button#removeToList');
let toDoList = document.querySelector('select#toDoList');

let goalsOnStorage = JSON.parse(localStorage.getItem('goals')) || [];


function loadPage() {
    for(let i = 0; i < goalsOnStorage.length; i++) {
        let option = document.createElement('option');
        option.innerText = goalsOnStorage[i]
        toDoList.appendChild(option);
    }
}

loadPage();

addToList.onclick = () => {
    if(goals.value === '') {
        alert('Digite uma tarefa e tente novamente!');
    } else {
        const index = goalsOnStorage.indexOf(goals.value);
        const existsInLocalStorage = index != -1;
        
        if(existsInLocalStorage) {
            alert('Tarefa já existente no sistema!')
        } else {
            goalsOnStorage.push(goals.value)
            localStorage.setItem('goals', JSON.stringify(goalsOnStorage))
            location.reload();
        }
    }
    goals.value = '';
    goals.focus();
}

removeToList.onclick = () => {
        const index = toDoList.selectedIndex;
        goalsOnStorage.splice(index, 1);
        localStorage.setItem('goals', JSON.stringify(goalsOnStorage))
        location.reload();
}