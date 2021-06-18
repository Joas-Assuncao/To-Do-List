const goals = document.querySelector('#goals');
const addToList = document.querySelector('button#addToList');
const removeToList = document.querySelector('button#removeToList');
let toDoList = document.querySelector('select#toDoList');

// Trazer tarefas do storage

const goalsOnStorage = JSON.parse(localStorage.getItem('goals')) || [];

function loadPage() {
    for(let i = 0; i < goalsOnStorage.length; i++) {
        let option = document.createElement('option');
        option.innerText = goalsOnStorage[i]
        toDoList.appendChild(option);
    }
}

loadPage();

// Adicionar à lista

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

// Remover da lista

removeToList.onclick = () => {
        const index = toDoList.selectedIndex;
        goalsOnStorage.splice(index, 1);
        localStorage.setItem('goals', JSON.stringify(goalsOnStorage))
        location.reload();
}

// Limpar input e manter focado no mesmo

goals.value = '';
goals.focus();