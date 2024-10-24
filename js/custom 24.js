/*============common part start===========*/
let result = document.querySelectorAll('.result')

result.forEach((item)=>{
    let countNumber = item.dataset.number
    console.log(countNumber)
    let i = 0

    let count = ()=>{
        i++

        if(i == item.dataset.number){
            clearInterval(stop)
        }
        item.innerHTML = i
    }

    let stop = setInterval(()=>{
               count()
            } , 50)
})
/*============common part end===========*/







