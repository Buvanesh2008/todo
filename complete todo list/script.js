    let addBtn = document.getElementById("add");
    let task = document.getElementById("input-box");
    let list = [];
    let nextId = 1;
    let todoList = document.getElementById("todoList");
    let completedTask = document.getElementById("doneList");

    addBtn.addEventListener('click', () => {
        if(task.value.trim() !== ''){

            const newTask = {
                id : nextId,
                text : task.value.trim(),
                completed : false,
            }
            list.push(newTask);
            nextId++;
            
            //let index = list.length - 1;

            // todoList.innerHTML += '<li id="item-' + index + '">' 
            //     + task.value 
            //     + ' <button onclick="deleteTask(' + index + ')">DELETE</button>'
            //     + ' <button onclick="markCompleted(' + index + ')">COMPLETED</button>'
            //     + '</li>';

            const li = document.createElement("li")
            li.id = "item-" + newTask.id;
            
            const span = document.createElement("span")
            span.textContent = newTask.text ;

            const btnDiv = document.createElement("div")
            btnDiv.className="btn-div"

            const deleteBtn = document.createElement("button")
            deleteBtn.className="delete-btn"
            deleteBtn.textContent = "DELETE"

            const completedBtn = document.createElement("button")
            completedBtn.className="completed-btn"
            completedBtn.textContent = "COMPLETED"

            deleteBtn.addEventListener('click', () =>{
                deleteTask(newTask.id)
            })

            completedBtn.addEventListener('click', () =>{
                markCompleted(newTask.id)
            })


            btnDiv.append(deleteBtn)
            btnDiv.append(completedBtn)

            li.append(span)
            li.append(btnDiv)
            todoList.append(li)

            task.value = "";



        }
        else{
            alert("Enter a valid input!!");
        }
    });

    function markCompleted(id) {

        const index = list.findIndex(task => task.id === id);

        if(index === -1) return;

        const completedItem = list[index]

        //list.splice(index, 1);   
        list[index].completed = true;
        
        let item = document.getElementById("item-" + id);
        if(item) item.remove();

        //completedTask.innerHTML += "<li>" + list[id] + "</li>";
        const li = document.createElement("li")
        li.textContent = completedItem.text

        completedTask.append(li)
        //console.log(list)
    }

    function deleteTask(id) {
        const index = list.findIndex(task => task.id === id);

        if(index === -1) return

        list.splice(index , 1);   

        let item = document.getElementById("item-" + id);
        if(item) item.remove();

        //console.log(list)
    }
