function connect() {


    var searchText = document.getElementById('Search').value;
    var quantity = parseInt (document.getElementById('mealnumber').value);
 
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   
    fetch(url)
    .then(res => res.json() )
    .then(data => showData(data));
   
    document.getElementById('Search').value = ""; 
    document.getElementById('mealNumber').value= "";
}
   
function showData(data){
   
    console.log("data from showData Function", data);
   
    var oldContent = document.getElementById('container');
    oldContent.textContent= "";
   
    for (var i=0; i< data.meals.length; i++){
        console.log(data.meals[i]);
   
        var newDiv = document.createElement('div');
        newDiv.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${data.meals[i].strMealThumb}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
            <h5 class="card-title" id="itemName">${data.meals[i].strMeal}</h5>
            <p class="card-text">Fulfill your appetite now</p>
            <a href="#" class="btn btn-secondary" id="addCart">Order Now</a>
           </div>
       </div>`
       
        newDiv.classList.add("meal-style");
           
        oldContent.appendChild(newDiv);
        
   
          }
      
   
   }