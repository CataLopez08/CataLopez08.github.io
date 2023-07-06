console.log("is connnected");

// Array of ingredients with quantity for Arepas

const ingredientsArepa = [
    {name: "Warm water", quantity: "1 cup (240 ml)"},
    {name: "Salt", quantity: "1/2 tsp"},
    {name: "Pre-cooked white corn meal", quantity: "1 cup (150 g)"},
    {name: "Butter", quantity: "1 tbsp"},
    {name:" shredded mozzarella cheese", quantity: "1 cup (100 g)"}

    ]
    
    // Array of ingredients with quantity for Pandebonos
    
    const ingredientsPandebonos = [
        {name: "Cassava or tapioca starch", quantity: "1 cup (120 g)"},
        {name: "Cornstarch", quantity: "1/4 cup (30 g)"},
        {name: "Baking powder", quantity: "1 tsp"},
        {name: "Salt", quantity: "1 tsp"},
        {name: "White granulated sugar", quantity: "1½ tbsp"},
        {name: "Shredded mozzarella cheese (cups)", quantity: 2},
        {name: "Unsalted butter", quantity: "4 tbsp (56 g)"},
        {name: "Egg", quantity: "1 unit"},
        {name: "Milk", quantity: "As needed"},
    ]

    const ingredientsScrambleEggs = [
        {name:"Egg", quantity: "8"},
        {name:"Tomatoes", quantity:"2"},
        {name:"Chopped Scallions", quantity:"4 tbsp"},
        {name:"Olive oil", quantity:"4 tbsp"},     
        {name:"salt", quantity:"to taste"},
        
    ]

    const ingredientsRedBeans = [
        {name:"Olive Oil", quantity:"3 tbsp"},
        {name:"Ham hocks", quantity:"1 lb"},
        {name:"Bay leave", quantity:"1"},
        {name:"Garlic cloves", quantity:"2"},
        {name:"Cranberry Beans", quantity:"1 lb"},
        {name:"Water", quantity:"10 cups"},
        {name:"Green plantain", quantity:"1"},
        {name:"Carrot (big)", quantity:"0.5"},
        {name:"vegetables stock cubes", quantity:"2"},
        {name:"salt", quantity:"to taste"},
        {name:"pepper", quantity:"to taste"},

    ]
    //From my colombianRecipes
    const ingredientHenSoup = [
        {name:"Ears fresh corn", quantity:"3"},
        {name:"Water", quantity:"12 cups"},
        {name:"Aliños", quantity:"0.5 cup", ingredients: [
            {name:"Green pepper", quantity:"0.5"},
            {name:"Red pepper", quantity:"0.5"},
            {name:"Onion", quantity:"0.5"},
            {name:"Scallions", quantity:"4"},
            {name:"Cumin", quantity:"0.5 tsp"},
            {name:"Garlic", quantity:"2 cloves"},
            {name:"Water", quantity:"1 cup"},
            {name:"Azafran", quantity:"0.5 tbsp"},]},
        {name:"Big Chicken", quantity:"1"},
        {name:"Salt", quantity:"1 tsp"},
        {name:"Green Plantain", quantity:"2"},
        {name:"Chicken Bouillon cubes", quantity:"2"},
        {name:"White potatoes", quantity:"6"},
        {name:"Frozen yuca", quantity:"1 lb"},
        {name:"cilantro", quantity:"0.25 cup"},
        {name:"Pepper", quantity:"0.25 tsp"},
    ]
    //From my colombianRecipes
    const ingredientShrimpCeviche = [
        {name:"Shripm", quantity:"2 lb"},
        {name:"Onion", quantity:"0.5 cup"},
        {name:"Cilatro", quantity:"0.5 cup"},
        {name:"Parsley", quantity:"0.5 cup"},
        {name:"Garlic glove", quantity:"1"},
        {name:"Lime juice", quantity:"0.5 cup"},
        {name:"Ketchup", quantity:"1 cup"},
        {name:"Tabasco sauce", quantity:"0.5 tbsp"},
        {name:"Olive oil", quantity:"1 tsp"},
        {name:"Salt", quantity:"To taste"},
        {name:"Pepper", quantity:"To taste"},
        {name:"Salty crackers for serving", quantity:"As many as you want"},
    ]
    
    //Breakfast Recipes
    const recipeArepa = document.getElementById("ingredientListArepas");
    const recipePandebono = document.getElementById("ingredientListPandebonos");
    const recipeScrambleEggs = document.getElementById("ingredientListScrambleEggs");

    //Lunch Recipes
    const recipeRedBeans = document.getElementById("ingredientListRedBeans");
    const recipeHenSoup = document.getElementById("ingredientListHenSoup");
    const recipeShrimpCeviche = document.getElementById("ingredientListColombianShrimpCeviche");

     //create header for Arepa

     const arepaHeader = document.createElement("h1");
     
     const arepaHeaderTitle = document.createElement("p");

     const arepaDescription = document.createElement("p");

     const arepaProcess = document.createElement("ol");
     const arepaProcesSteps = document.createElement("li");
    
     arepaHeaderTitle.innerHTML = "Arepa";
    //  arepaHeaderTitle.style.marginTop = "0px";
     arepaHeaderTitle.style.textAlign = "center";
     arepaHeaderTitle.style.font = "30px Monserrat";
     arepaHeaderTitle.style.letterSpacing = "3px;"
     arepaHeaderTitle.style.textTransform = "uppercase";
     arepaHeaderTitle.classList.add("arepaHeaderTitle");

     arepaDescription.innerHTML = "Description: Delicious Colombian arepas made with pre-cooked cornmeal, butter and mozzarella cheese.";
     
    //  arepaProcess.innerHTML = "The process";
    //  arepaProcess.style.font = "25px Monserrat";
    //  arepaProcess.style.letterSpacing = "3px;"
    //  arepaProcess.style.textTransform = "uppercase";

    //  arepaProcesSteps.innerHTML = "Mix all of the ingredients in a large bowl and knead until the dough is soft and smooth. If you notice that it is a bit dry, you can add more water. And if you see that it is still too wet, you can add more corn meal.";
    //  arepaProcesSteps.innerHTML = "Shape the arepas anyway you want. They can be thin, thick, small, large, round whatever shape you like best. This step is not rocket science.";

     arepaHeader.appendChild(arepaHeaderTitle);
     recipeArepa.appendChild(arepaHeader);

     recipeArepa.appendChild(arepaDescription);

    //  arepaProcess.appendChild(arepaProcesSteps);
    //  recipeArepa.appendChild(arepaProcess);

    //creating a list of ingredients for Arepa Product
    
    for(const arepa of ingredientsArepa){

        //Create li element
    
        const productArepa = document.createElement("li");
        productArepa.style.listStyleType = "none";
        // productArepa.classList

        //create the checkbox

        const checkbox = document.createElement("input");
        checkbox.type ="checkbox";
        checkbox.classList.add("cbox1");

        //append the checkbox to the list item

        productArepa.appendChild(checkbox);

        //create the label for the checkbox
        
        const productArepaIngredients = document.createElement("label");
        productArepaIngredients.textContent = arepa.quantity + " - " + arepa.name;
        productArepaIngredients.classList.add("checkedText");

                 
        // attach the li to the ul
    
        productArepa.appendChild(productArepaIngredients);
        recipeArepa.appendChild(productArepa);
    }

    //create header for pandebono

    const pandebonoHeader = document.createElement("h1");

    const pandebonoHeaderTitle = document.createElement("p");
    pandebonoHeaderTitle.innerHTML = "Pandebono";
    pandebonoHeaderTitle.classList.add("arepaHeaderTitle");
    pandebonoHeaderTitle.style.textAlign = "center";
    pandebonoHeaderTitle.style.font = "25px Monserrat";
    pandebonoHeaderTitle.style.letterSpacing = "3px;"
    pandebonoHeaderTitle.style.textTransform = "uppercase";

    pandebonoHeader.appendChild(pandebonoHeaderTitle);
    recipePandebono.appendChild(pandebonoHeader);

       //creating a list of ingredients for pandebonos product

    for(const pandebono of ingredientsPandebonos){

         //Create li element

        const productPandebono = document.createElement("li");
        productPandebono.style.listStyleType = "none";
       

        //create the checkbox

        const checkbox1 = document.createElement("input");
        checkbox1.type ="checkbox";
        checkbox1.classList.add("cbox1");

        //append the checkbox to the list item

        productPandebono.appendChild(checkbox1);

        //create the label for the checkbox
        
        const productPandebonoIngredients = document.createElement("label");
        productPandebonoIngredients.textContent = pandebono.quantity + "  -  " + pandebono.name;
        productPandebonoIngredients.classList.add("checkedText");

                 
        // attach the li to the ul
    
        productPandebono.appendChild(productPandebonoIngredients);
        recipePandebono.appendChild(productPandebono);
                            
    }

    //create header for Scramble Eggs

    const ScrambleEggsHeader = document.createElement("h1");

    const scrambleEggsHeaderTitle = document.createElement("p");
    scrambleEggsHeaderTitle.innerHTML = "Scramble Eggs";
    scrambleEggsHeaderTitle.classList.add("arepaHeaderTitle");
    scrambleEggsHeaderTitle.style.textAlign = "center";
    scrambleEggsHeaderTitle.style.font = "25px Monserrat";
    scrambleEggsHeaderTitle.style.letterSpacing = "3px;"
    scrambleEggsHeaderTitle.style.textTransform = "uppercase";
    
    ScrambleEggsHeader.appendChild(scrambleEggsHeaderTitle);
    recipeScrambleEggs.appendChild(ScrambleEggsHeader);

     //creating a list of ingredients for scramble eggs

     for(const eggs of ingredientsScrambleEggs){

        //Create li element

        const productScrambleEggs = document.createElement("li");
        productScrambleEggs.style.listStyleType = "none";
       

        //create the checkbox

        const checkbox = document.createElement("input");
        checkbox.type ="checkbox";
        checkbox.classList.add("cbox1");


        //append the checkbox to the list item

        productScrambleEggs.appendChild(checkbox);

        //create the label for the checkbox
        
        const productEggsIngredients = document.createElement("label");
        productEggsIngredients.textContent = eggs.quantity + " - " + eggs.name;
        productEggsIngredients.classList.add("checkedText");


                 
        // attach the li to the ul
    
        productScrambleEggs.appendChild(productEggsIngredients);
        recipeScrambleEggs.appendChild(productScrambleEggs);
            
     }

     //Create header for Red Beans

     const redBeansHeader = document.createElement("h1");

     const redBreansHeaderTitle = document.createElement("p");
     redBreansHeaderTitle.innerHTML = "Red Beans";
     redBreansHeaderTitle.classList.add("arepaHeaderTitle");
     redBreansHeaderTitle.style.textAlign = "center";
     redBreansHeaderTitle.style.font = "25px Monserrat";
     redBreansHeaderTitle.style.letterSpacing = "3px;"
     redBreansHeaderTitle.style.textTransform = "uppercase";

     redBeansHeader.appendChild(redBreansHeaderTitle);
     recipeRedBeans.appendChild(redBeansHeader);

    //Create list of ingredients for Red Beans

     for (const beans of ingredientsRedBeans){

        //Create li element

        const productRedBeans = document.createElement("li");
        productRedBeans.style.listStyleType = "none";

        //create the checkbox
 
        const checkbox = document.createElement("input");
        checkbox.type ="checkbox";
        checkbox.classList.add("cbox1");

         //append the checkbox to the list item
 
         productRedBeans.appendChild(checkbox);

          //create the label for the checkbox
         
          const productRedBeansIngredients = document.createElement("label");
          productRedBeansIngredients.textContent =  beans.quantity + " - "  + beans.name;
          productRedBeansIngredients.classList.add("checkedText");

             // attach the li to the ul
     
          productRedBeans.appendChild(productRedBeansIngredients);
          recipeRedBeans.appendChild(productRedBeans);                  
      
     }

     //Create header for Hen Soup

     const henSoupHeader = document.createElement("h1");

     const henSoupHeaderTitle = document.createElement("p");
     henSoupHeaderTitle.innerHTML = "chicken Soup (Sancocho de Gallina)";
     henSoupHeaderTitle.classList.add("arepaHeaderTitle");
     henSoupHeaderTitle.style.textAlign = "center";
     henSoupHeaderTitle.style.font = "25px Monserrat";
     henSoupHeaderTitle.style.letterSpacing = "3px;"
     henSoupHeaderTitle.style.textTransform = "uppercase";

     henSoupHeader.appendChild(henSoupHeaderTitle);
     recipeHenSoup.appendChild(henSoupHeader);

     //create list for ingredients for Hen Soup

     for(const henSoup of ingredientHenSoup){ 

        const productHenSoup = document.createElement("li");      
        productHenSoup.style.listStyleType = "none";

        // const subProductHenSoup = document.createElement("li");
        // subProductHenSoup.style.listStyleType = "none";
     
         //create the checkbox
 
         const checkbox = document.createElement("input");
         checkbox.type ="checkbox";
         checkbox.classList.add("cbox1");
 
         //append the checkbox to the list item
 
         productHenSoup.appendChild(checkbox);
        //  subProductHenSoup.appendChild(checkbox);
 
         //create the label for the checkbox
         
         const productHenSoupIngredients = document.createElement("label");
         productHenSoupIngredients.textContent = henSoup.quantity + " - " + henSoup.name;
         productHenSoupIngredients.classList.add("checkedText");

         if (henSoup.ingredients) {
            //create a nested list for the subingredients

            const subList = document.createElement("ul");
            // subList.style.listStyleType = "none";

            //iterate over the subingredients array using a for of loop

            for(const subIngredients of henSoup.ingredients){

                const subListHenSoupCheckbox = document.createElement("input");
                subListHenSoupCheckbox.type ="checkbox";
                subListHenSoupCheckbox.classList.add("cbox1");

                subList.appendChild(subListHenSoupCheckbox);

                const subListHenSoup = document.createElement("label");
                subListHenSoup.textContent = subIngredients.quantity + " - " + subIngredients.name;
                subListHenSoup.classList.add("checkedText");

                subList.appendChild(subListHenSoup);
            }
                productHenSoupIngredients.appendChild(subList);
        }

        productHenSoup.appendChild(productHenSoupIngredients);
        recipeHenSoup.appendChild(productHenSoup);

     }
         

        //  const subProductHenSoupIngredients = document.createElement("label");
        //  subProductHenSoupIngredients.textContent = (henSoup.ingredients).quantity + " - " + (henSoup.ingredients).name;
        //  subProductHenSoupIngredients.classList.add("checkedText");
 
                  
         // attach the li to the ul
     
        //  productHenSoup.appendChild(productHenSoupIngredients);
        //  productHenSoup.appendChild(subProductHenSoupIngredients);
        //  recipeHenSoup.appendChild(productHenSoup);
     
    
     //Create header for ShrimpCeviche

     const shrimpCevicheHeader = document.createElement("h1");

     const shrimpCevicheHeaderTitle = document.createElement("p");
     shrimpCevicheHeaderTitle.innerHTML = "Colombian Shrimp Ceviche";
     shrimpCevicheHeaderTitle.classList.add("arepaHeaderTitle");
     shrimpCevicheHeaderTitle.style.textAlign = "center";
     shrimpCevicheHeaderTitle.style.font = "25px Monserrat";
     shrimpCevicheHeaderTitle.style.letterSpacing = "3px;"
     shrimpCevicheHeaderTitle.style.textTransform = "uppercase";

     shrimpCevicheHeader.appendChild(shrimpCevicheHeaderTitle);
     recipeShrimpCeviche.appendChild(shrimpCevicheHeader);

     for (const shrimpCeviche of ingredientShrimpCeviche){

     const productShrimpCeviche = document.createElement("li");
     productShrimpCeviche.style.listStyleType = "none";    
       
      //create the checkbox

      const checkbox = document.createElement("input");
      checkbox.type ="checkbox";
      checkbox.classList.add("cbox1");

      //append the checkbox to the list item

      productShrimpCeviche.appendChild(checkbox);

      //create the label for the checkbox
      
      const productShrimpCevicheIngredients = document.createElement("label");
      productShrimpCevicheIngredients.textContent = shrimpCeviche.quantity + " - " + shrimpCeviche.name;
      productShrimpCevicheIngredients.classList.add("checkedText");

               
      // attach the li to the ul
  
      productShrimpCeviche.appendChild(productShrimpCevicheIngredients);
      recipeShrimpCeviche.appendChild(productShrimpCeviche);
  }
   

     //Finish the list of ingredients 


     //creating a list of object with my brakfast products

     //arepa

     var cartList = [];

    const recipeDataBase = [
        {
            name: 'Arepa',
            ingredients: [
                {name: "Warm water", quantity: "1 cup (240 ml)"},
                {name: "Salt", quantity: "½ tsp"},
                {name: "Pre-cooked white corn meal", quantity: "1 cup (150 g)"},
                {name: "Butter", quantity: "1 tbsp"},
                {name:" shredded mozzarella cheese", quantity: "1 cup (100 g)"}
            ]
        },
        {
            name: 'Pandebono',
            ingredients: [
                {name: "Cassava or tapioca starch", quantity: "1 cup (120 g)"},
                {name: "Cornstarch", quantity: "1/4 cup (30 g)"},
                {name: "Baking powder", quantity: "1 tsp"},
                {name: "Salt", quantity: "1 tsp"},
                {name: "White granulated sugar", quantity: "1½ tbsp"},
                {name: "Shredded mozzarella cheese", quantity: "2 cups (200 g)"},
                {name: "Unsalted butter", quantity: "4 tbsp (56 g)"},
                {name: "Egg", quantity: "1 unit"},
                {name: "Milk", quantity: "As needed"},
            ]
        },
        {
            name: 'Scramble Eggs',
            ingredients: [
                {name:"Egg", quantity: "8"},
                {name:"Tomatoes", quantity:"2"},
                {name:"Olive oil", quantity:"4 tbsp"},     
                {name:"salt", quantity:"to taste"}
            ],
        },
        {
            name: 'Red Beans',
            ingredients:[
                {name:"Olive Oil", quantity:"3 tbsp"},
                {name:"Ham hocks", quantity:"1 lb"},
                {name:"Bay leave", quantitiy:"1"},
                {name:"Garlic cloves", quantity:"2"},
                {name:"Cranberry Beans", quantity:"1 lb"},
                {name:"Water", quantity:"10 cups"},
                {name:"Green plantain", quantitiy:"1"},
                {name:"Carrot (big)", quantitiy:"0.5"},
                {name:"vegetables stock cubes", quantity:"2"},
                {name:"salt", quantity:"to taste"},
                {name:"pepper", quantitiy:"to taste"},
            
            ],
        },
        {
            name: 'Hen Soup',
            ingredients:[
                        {name:"Ears fresh corn", quantity:"3"},
                        {name:"Water", quantity:"12 cups"},
                        {name:"Aliños", quantity:"0.5 cup", ingredients: [
                            {name:"Green pepper", quantity:"0.5"},
                            {name:"Red pepper", quantity:"0.5"},
                            {name:"Onion", quantity:"0.5"},
                            {name:"Scallions", quantity:"4"},
                            {name:"Cumin", quantity:"0.5 tsp"},
                            {name:"Garlic", quantity:"2 cloves"},
                            {name:"Water", quantity:"1 cup"},
                            {name:"Azafran", quantity:"0.5 tbsp"},]},
                        {name:"Big Chicken", quantity:"1"},
                        {name:"Salt", quantity:"1 tsp"},
                        {name:"Green Plantain", quantity:"2"},
                        {name:"Chicken Bouillon cubes", quantity:"2"},
                        {name:"White potatoes", quantity:"6"},
                        {name:"Frozen yuca", quantity:"1 lb"},
                        {name:"cilantro", quantity:"0.25 cup"},
                        {name:"Pepper", quantity:"0.25 tsp"},
                    
                    ],
        },
        {
            name: 'Shrimp ceviche',
            ingredients:[
                {name:"Shrimps", quantity:2, unit: 'lb EXAMPLE'},
                {name:"Onion", quantity:"0.5 cup"},
                {name:"Cilatro", quantity:"0.5 cup"},
                {name:"Parsley", quantity:"0.5 cup"},
                {name:"Garlic glove", quantity:"1"},
                {name:"Lime juice", quantity:"0.5 cup"},
                {name:"Ketchup", quantity:"1 cup"},
                {name:"Tabasco sauce", quantity:"0.5 tbsp"},
                {name:"Olive oil", quantity:"1 tsp"},
                {name:"Salt", quantity:"To taste"},
                {name:"Pepper", quantity:"To taste"},
                {name:"Salty crackers for serving", quantity:"As many as you want"}, ],
        },

];

function addToShoppingList(listIndex) {

    var recipe = recipeDataBase[listIndex - 1];

    for(var i=0; i < recipe.ingredients.length; i++){
        var ingredient = recipe.ingredients[i];

        //create a new cart item object

        var cartItem = {
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit: ingredient.unit
        };

        //Here a create if statement to add the same ingredients.

        // Add the cart item to the cartList

        // ACA ESCRIBIRAS EL IF PARA CHEQUEAR SI EL INGREDIENTE EXISTA

        cartList.push(cartItem);

      }

    //Refresh the cart UI
    updateCartUI();
}

function updateCartUI(){

       
        const cartElement = document.getElementById("shoppingList");
        const sideCart = document.getElementById("my-cart");
    
    //cartElement.innerHTML = ""; //clear the cart UI
    cartElement.style.marginLeft = "15px";


    //loop throught the cart items

    for(let j=0; j<cartList.length;j++){
        const cartItemElement = document.createElement("ul");
        cartItemElement.className = "cart-item";

        const nameElement = document.createElement("li");
        nameElement.textContent = cartList[j].name;

        const quantityElement = document.createElement("span");
        quantityElement.textContent = cartList[j].quantity;

        const unitElement = document.createElement("span");
        unitElement.textContent = cartList[j].unit;

        cartItemElement.appendChild(nameElement);
        cartItemElement.appendChild(quantityElement);
        cartItemElement.appendChild(unitElement);

       cartElement.appendChild(cartItemElement);
       sideCart.appendChild(cartItemElement)
      

    }

    //update the cart counter how many ingredients are added - much better recipes you added
        
     const cartCounter = document.getElementById("cart-counter");     
     cartCounter.textContent = cartList.length;

     console.log(cartCounter, cartList.length)
     console.log("Item added to cart:" , cartElement);


}

function showCart(){
    const sideCart = document.getElementById('my-cart');
    sideCart.classList.add('open')
}

function hideCart(){
    const sideCart = document.getElementById('my-cart');
    sideCart.classList.remove('open')
}

function cleanCartList(){

    const cartElement = document.getElementById("shoppingList");
    const sideCart = document.getElementById('my-cart');

    const cartCounter = document.getElementById("cart-counter");  
    cartCounter.textContent = cartList.length;

    //cartElement.innerHTML = "";

    while (sideCart.lastChild != cartElement) {
        sideCart.removeChild(sideCart.lastChild);

        
    }

    cartList = [];

    updateCartUI

}



  
  function myFunction(){
    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
