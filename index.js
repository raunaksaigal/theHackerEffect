text_ori = document.querySelector(".text")

text_ori.addEventListener("click", ()=>{
  var iter = 0;
  myinterval = setInterval(()=>{
    
  

  var text = text_ori.innerText
  l = []
  for(let i=1; i< text.length; i++){
    l.push(text[i])
    l[i] = alpbt[Math.floor(Math.random()*26)]
    text_ori.innerText = l.join("")
  }
  iter++
  if (iter>10){
    console.log('hi')
    clearInterval(myinterval)
    l = [];
    iter = 0
    for(let i=0; i<text.length; i++){
        l.push(0)      
    }

    var i = 0
    secondInterval = setInterval(()=>{
      l[i] = final[i]
      for(let j=i+1; j<text.length; j++){
        l[j] = text[j]
        console.log(l)
      }
      text_ori.innerText = l.join("")
      if(i>final.length){
        clearInterval(secondInterval)
      }
      i++
    },7)
    

    for(let i=0; i< text.length; i++){
      
    }

  }
  },30)

})


const alpbt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const final = "HASSELBLAD"

div = ()=>{
  text_ori = document.querySelector(".text")
  var iter = 0;
  myinterval = setInterval(()=>{
    
  

  var text = text_ori.innerText
  l = []
  for(let i=1; i< text.length; i++){
    l.push(text[i])
    l[i] = alpbt[Math.floor(Math.random()*26)]
    text_ori.innerText = l.join("")
  }
  iter++
  if (iter>=10){
    console.log('hi')
    clearInterval(myinterval)
    l = [];
    iter = 0
    for(let i=0; i<text.length; i++){
        l.push(0)      
    }

    var i = 0
    secondInterval = setInterval(()=>{
      l[i] = final[i]
      for(let j=i+1; j<text.length; j++){
        if (j>i){
          l[j] = alpbt[Math.floor(Math.random()*26)]
        }
        else{
          l[j] = text[j]
        }
        
        console.log(l)
      }
      text_ori.innerText = l.join("")
      if(i>final.length){
        clearInterval(secondInterval)
      }
      i++
    },20)
    


  }
  },30)
}