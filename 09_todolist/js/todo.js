const form = document.querySelector('.todo_form')
const input = form.querySelector('input')
const ul = document.querySelector('.todo_list')

let todos = []

function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function removeTodo(e) {
    const li = e.target.parentNode
    li.remove()

    const newTodos = todos.filter(todo => todo.id !== parseInt(li.id))
    todos = newTodos

    saveTodo()
    // === 같음 !== 같지않음
}


function paintTodo(text) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    li.innerText = text
    li.id = todos.length + 1
    span.innerText = 'x'
    span.addEventListener('click', removeTodo)
    li.appendChild(span)
    ul.appendChild(li)

    todos.push(
        // {id : 1, text: text}
        {
            id: todos.length + 1,
            text
            //키와 벨류가 같을떄는 하나만 적어도 키:벨류
        }
    )

    saveTodo()

}


function handleSumbit(e) {
    e.preventDefault()
    if(input.value === '') return
    paintTodo(input.value)
    input.value = ''
}

function loadTodo() {
    const loadTodos = localStorage.getItem('todos')
    if(loadTodos !== null) {
        const parseTodo = JSON.parse(loadTodos)
        parseTodo.forEach(todo => paintTodo(todo.text))
    }
}


function init() {
    loadTodo()
    form.addEventListener('submit', handleSumbit)
}

init()