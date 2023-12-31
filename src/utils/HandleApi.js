import axios from 'axios'
const baseUrl = "https://todo-app-backend-1u6z.onrender.com"

const getAllToDo = (setToDo)=>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log('data--->',data);
        setToDo(data)
    })
}

const addToDo = (text,setText,setToDo)=>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}

const updateToDo = (todoId,text,setToDo,setText,setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`,{_id:todoId,text})
    .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))

}

const deleteToDo = (_id,setToDo) => {
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))

}

export {getAllToDo,addToDo,updateToDo,deleteToDo}