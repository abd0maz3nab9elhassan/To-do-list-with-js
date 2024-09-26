let todo = document.getElementById("exampleInputPassword1")
let list = document.getElementById("list")
let tasks = JSON.parse(localStorage.getItem('list')) 



display();

function add() {
    let task = todo.value
    if (task) {  
        tasks.push(task)
        localStorage.setItem('list', JSON.stringify(tasks))
        clear()
        display()
    }
}

function clear() {
    todo.value = '';  
}

function display() {
    let show = '';
    for (let i = 0; i < tasks.length; i++) {
        show += 
        `
        <tr>
            <td>
                <input type="checkbox" id="check-${i}" onclick="done(${i})">
            </td>
            <td><h2 id="h2-${i}" class='list'>${tasks[i]}</h2></td>
            <td><button class="btn  btn-secondary" onclick="del(${i})">delete</button></td>
        </tr>
        `;
    }
    document.getElementById('list').innerHTML = show;
}

function del(index) {
    tasks.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(tasks));
    display();
}

function done(index) {
    let checkbox = document.getElementById(`check-${index}`);
    let h2 = document.getElementById(`h2-${index}`);
    if (checkbox.checked) {
        h2.innerHTML = "طرش الطرش "; 
    } else {
        h2.innerHTML = tasks[index];
    }
}
