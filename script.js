const url = 'https://dog.ceo/api/breeds/image/random';
const button=document.querySelector('#random-dog');
const div=document.querySelector('#dog');
async function randomDog(){
    const response=await fetch(url);

  const dog=  await response.json();
  
   const img=document.createElement('img')
   div.innerHTML='';
   img.src=dog.message;
   console.log(img.src);
   div.appendChild(img);
   
   
}
button.onclick=()=>randomDog();
