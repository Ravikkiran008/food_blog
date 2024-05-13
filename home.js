
function veg_display() {
    var quick_preparation_div = document.getElementById("quick_preparation_div");
    var vegetarian_div = document.getElementById("vegetarian_div");
    var non_vegetarian_div = document.getElementById("non_vegetarian_div");
    non_vegetarian_div.innerHTML = ``
    quick_preparation_div.innerHTML = ``
    vegetarian_div.innerHTML = `<div id="veg_img-display">
    <img src="resources/Sesame-Butter-Noodles-400x400.jpg" alt="" srcset="">
    <center><p style="font-weight: bolder;">sesame noodles</p></center>
</div>

<div id="veg_img-display">
    <img src="resources/Mushroom-Sandwich-9-800x800.webp" alt="" srcset="">
    <center><p style="font-weight: bolder;">Roasted Mushroom Sandwich</p></center>
</div>

<div id="veg_img-display">
    <img src="resources/Mushroom-Gnocchi-12-400x400.webp" alt="" srcset="">
    <center><p style="font-weight: bolder;">Creamy Mushroom Sauce</p></center>
</div>

<div id="veg_img-display">
    <img src="resources/Applesauce-1-4-400x400.webp" alt="" srcset="">
    <center><p style="font-weight: bolder;">Instant Apple sauce</p></center>
</div>`
}

function non_veg_display() {
    var quick_preparation_div = document.getElementById("quick_preparation_div");
    var non_vegetarian_div = document.getElementById("non_vegetarian_div");
    var vegetarian_div = document.getElementById("vegetarian_div");
    vegetarian_div.innerHTML = ``
    quick_preparation_div.innerHTML = ``
    non_vegetarian_div.innerHTML = `<div id="non_veg_img-display">
    <img src="resources/Chicken-Bowls-1-3-1200x1200.webp" alt="" srcset="">
    <center><p style="font-weight: bolder;">Banza Chicken Bowl</p></center>
</div>

<div id="non_veg_img-display">
    <img src="resources/Air-Fryer-Chicken-9-1200x1200.webp" alt="" srcset="">
    <center><p style="font-weight: bolder;">Air Fryer Chicken Breast</p></center>
</div>

<div id="non_veg_img-display">
    <img src="resources/Tomato-Soup-3-1-400x400.webp" alt="" srcset="">
    <center><p style="font-weight: bolder;">Tomato soup</p></center>
</div>

<div id="non_veg_img-display">
    <img src="resources/Garlic-Bread-11-400x400.jpg" alt="" srcset="">
    <center><p style="font-weight: bolder;">Favourite Garlic Bread</p></center>
</div>`
}


function quick_recipe() {
    var quick_preparation_div = document.getElementById("quick_preparation_div");
    var non_vegetarian_div = document.getElementById("non_vegetarian_div");
    var vegetarian_div = document.getElementById("vegetarian_div");
    non_vegetarian_div.innerHTML = ``
    vegetarian_div.innerHTML = ``
    quick_preparation_div.innerHTML = `<div id="non_veg_img-display">
    <img src="resources/Chocolate-Chip-Cookies-400x400.webp" alt="" srcset="">
    <center><p style="font-weight: bolder;">Best Chocolate Chip Cookies</p></center>
</div>

<div id="non_veg_img-display">
    <img src="resources/Avocado-Egg-Salad-3-400x400.webp" alt="" srcset="">
    <center><p style="font-weight: bolder;">Avacado Egg Salad</p></center>
</div>

<div id="non_veg_img-display">
    <img src="resources/Vegan-Crunchwraps-with-Cashew-Queso-400x400.webp" alt="" srcset="">
    <center><p style="font-weight: bolder;">Vegan Crunchwrap</p></center>
</div>

<div id="non_veg_img-display">
    <img src="resources/Chicken-Pot-Pie-Soup-1-4-400x400.webp" alt="" srcset="">
    <center><p style="font-weight: bolder;">Chicken Pot Pie Soup</p></center>
</div>`
}

function labelon(){
    var card_img_overlay=document.getElementsByClassName("card_img");
    card_img_overlay.innerHTML=`<center><h6  style="margin-top: 100%;color: white;background-color: goldenrod;"     class="card-title">Bowls</h6></center>`
    
}

function signup_submission(){
    window.alert("Signup successfull")
}

function login_submission(){
    window.alert("Login successfull")
}