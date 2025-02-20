const resultEl=document.getElementById('result')
const lengthEl=document.getElementById('Length')
const uppercaseEl=document.getElementById('upperCase')
const lowercaseEl=document.getElementById('lowerCase')
const numberEl=document.getElementById('number')
const symbolEl=document.getElementById('symbol')
const clipEl=document.getElementById('clipboard')
const generateEl=document.getElementById('submit')

generateEl.addEventListener('click',()=>{
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked
    resultEl.innerText=generateRandom(hasLower,hasUpper,hasNumber,hasSymbol,length)
})
clipEl.addEventListener('click',()=>{
    const textarea=document.createElement('textarea')
    const password=resultEl.innerHTML
    if(!password) {return}
    textarea.value=password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('password copied to clipboard!')
})
function generateRandom(lower,upper,number,symbol,length){
    let genratedpassword=''
    const typeCount=lower+upper+number+symbol;
    const typeArr=[{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0])
    if(typeCount===0) return ''
    for(let i=0;i<length;i++){
        typeArr.forEach(type=>{
            const funcName=Object.keys(type)[0]
            genratedpassword+=randomFunc[funcName]()
        })
    }
    const finalpassword=genratedpassword.slice(0,length)
return finalpassword;
}
const randomFunc={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random()*symbols.length)]
}
console.log(randomFunc.lower())