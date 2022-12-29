var courses = [{
    image: './images/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 100
},
{
    image: './images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 150
},
{
    image: './images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 130
},
{
    image: './images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 170
},
{
    image: './images/javascriptVariables.png',
    title: 'variables and data type ',
    category: 'JS',
    price: 200
},
{
    image: './images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 250
},
{
    image: './images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 230
},
{
    image: './images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 300
},
{
    image: './images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 240
},
{
    image: './images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 120
},
{
    image: './images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 325
},
{
    image: './images/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 120
},
{
    image: './images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 140
},
{
    image: './images/cssColors.png',
    title: 'css colors',
    category: 'css',
    price: 260
},
{
    image: './images/phpBasics.png',
    title: 'getting started with php',
    category: 'php',
    price: 177
},
{
    image: './images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 105
},
{
    image: './images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 164
},
{
    image: './images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'php',
    price: 159
},
{
    image: './images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 147
},
{
    image: './images/course3.jpeg',
    title: 'PHP functions',
    category: 'PHP',
    price: 123
},
{
    image: './images/course2.jpeg',
    title: 'basics of HTML',
    category: 'html',
    price: 200
}

]

	
var crt = document.querySelector('.crt'),
listing = document.querySelector('#listing');

let Cours= (image, titre, prix)=> {
    let div = document.createElement('div');
    div.setAttribute('class', 'card text-center col-3 me-2 mb-2');
    let img = document.createElement('img');
    img.setAttribute('src',image)
    img.setAttribute('class','img_crd ')

    let xdiv = document.createElement('div')
 

    let nomcr = document.createElement('h2');
    nomcr.setAttribute('class', 'card-title');
    let xctn = document.createTextNode(titre);
    nomcr.appendChild(xctn);

    let span = document.createElement('span');
    span.setAttribute('class', 'badge badge-pill badge-danger bg-danger text-white');
    span.appendChild(document.createTextNode(prix + ' DH'));

    div.appendChild(img);
    xdiv.appendChild(nomcr);
    xdiv.appendChild(span);
    div.appendChild(xdiv)
    crt.append(div)
}


courses.forEach((el) => {
    Cours(el.image, el.title, el.price);
})

let Categories = (cat)=>{
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(cat));
    li.setAttribute('class', 'list-group-item');
    li.id=cat;
    listing.append(li);
}

let categories = ['all', ...new Set(courses.map((v) => v.category.toLowerCase()))]

categories.forEach((v) => {
    Categories(v);
})



let search = ()=>{
    let result;
    let cat = document.getElementsByClassName('form-control')[0].value
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].title.toLowerCase().includes(cat.toLowerCase().trimStart())){
            Cours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
    if(cat =="")
        courses.forEach((el)=>{
            Cours(el.image,el.title,el.price)
        })
}
document.getElementById('search').addEventListener('keyup',search)



document.getElementById('all').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    courses.forEach((el) => {
        Cours(el.image, el.title, el.price);
    })
})
document.getElementById('js').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="js"){
            Cours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('html').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="html"){
            Cours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('css').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="css"){
            Cours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('php').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="php"){
            Cours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})


let Valeur=()=>{
    let value =document.getElementById('range').value
    document.getElementById('valeur').innerHTML = "Value : "+ value +"DH"
    document.getElementById('range').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
        for(let i =0;i<courses.length;i++){
            if(courses[i].price <= value){
                Cours(courses[i].image,courses[i].title,courses[i].price)
            }
           
        }
    })
}



    