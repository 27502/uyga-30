const wrapperEl = document.querySelector(".wrapper")
const loadingEL = document.querySelector(".loading")
const BASE_URL = "https://dummyjson.com"

async function fetchData(endpoint){
    const response = await fetch(`${BASE_URL}${endpoint}`)
    response
        .json()
        .then((res)=> createCard(res))
        .catch((err) => console.log(err))
        .finally(() =>{
            loadingEL.style.display = "none"
           
        })
}

window.addEventListener("load", ()=>{
    fetchData("/users")
})

function createCard(data){
    data.users.forEach(users=> {
        const divEl = document.createElement("div")
        divEl.className = "card"
        divEl.innerHTML = `
        <img class="rasm" src="${users.image}"alt="rasm">
        <h3 class="ism"> ${users.firstName}</h3>
        <h4 class="family">${users.lastName}</h4>
        <p class="age">age:${users.age}</p>
        <p>Phone:${users.phone} </p>
        <p>email:${users.email}</p>
        <button class="follow">Follow</button>
        `
        wrapperEl.appendChild(divEl)    
    })
    
}
