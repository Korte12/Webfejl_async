const buyApple1 = (applenumber) => {
    if(applenumber < 5) {
        return Promise.resolve("Van elég alma")
    }

    else{
        return Promise.reject("Nincs elég alma")
    }
}

const res1 = buyApple1(4)

console.log(res1)

res1.then((value)=>{
    console.log(value)
})

console.log("Feloldás után")

buyApple1(5).then((value) =>{
    console.log(value)
}).catch((error) =>{
    console.log(error)
});


const buyApple2=(applenumber=> {
    return new Promise((resolve, reject) =>{
        if(applenumber<5){
            resolve("Van alma")
        }
        else{
            reject("Nincs alma")
        }
    })
})


buyApple2(3).then((param) =>{
    console.log(param)
}).catch((error) =>{
    console.log(error)
})

buyApple2(5).then((param) =>{
    console.log(param)
}).catch((error) =>{
    console.log(error)
})

setTimeout(() =>{
    
},0)


const buyApple3=(applenumber=> {
    return new Promise((resolve, reject) =>{
        if(applenumber<5){
            setTimeout(() =>{
                resolve("Van eleg alma sigmasigma respet")
            },2000)

        }
        else{
            setTimeout(()=>{
                reject("Nincs alma :( :lehullolevel:") 
            },3000)

        }
    })
})

buyApple3(4).then((param1) =>{
    console.log(param1)
}).catch((error) =>{
    console.log(error)
})

const res2 = buyApple3(5)
console.log(res2)

class Service{
    #data
    constructor(){
        this.#data = people
    }

    init() {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(this.#data)
            }, 3000);
        })
    }
}

class DataviewController {
    #div
    constructor(){
        this.#div = document.createElement('div')
        document.body.appendChild(this.#div)
        this.#div.textContent = "Loading"
    }
    setContent(array) {
        this.#div.innerHTML = ''
        for(const element of array) {
            const div = document.createElement('div')
            div.textContent = element.name
            this.#div.appendChild(div)

        }
    }
}

const ser = new Service();
const view = new DataviewController()
ser.init().then((yap) =>{
    view.setContent(yap)
})
