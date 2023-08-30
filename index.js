const arr = []
function randomIntFromInterval (min , max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const generateObject = () => {
    const randomNumber = Math.floor(Math.random() * 1000)
    const char = ['a','b','c','d'];
    const randomWord = char[Math.floor(Math.random() * 3)] + char[Math.floor(Math.random() * 3)] + char[Math.floor(Math.random() * 3)] + char[Math.floor(Math.random() * 3)]

    const date = String(161912450 + randomIntFromInterval(1000 , 4000))

    return {
        randomNumber,
        randomWord,
        date
    }
}

const reslut = generateObject();

console.log(reslut
    )