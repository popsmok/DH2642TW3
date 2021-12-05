const REF= "dinnerModel"+68 ; //  NN is your TW2_TW3 group number
function persistModel(model){
    let loadingFromFirebase=false;  // stops inf loops, (persistModel can trigger observers)
    model.addObserver(function(){
      if(loadingFromFirebase){return;};
         	firebase.database().ref(REF).set({  // Save to the database
      			guests: model.numberOfGuests,
            dishes: model.dishes,
            currentDish: model.currentDish
            });
    });
    // Load from the database.
    firebase.database().ref(REF).on("value", function(data){
      loadingFromFirebase= true; //enables loading data from database.
	     try{ //tries the whole try-block,before "commiting"
         if(data.val()){
		       model.setNumberOfGuests(data.val().guests)
           model.setDishes(data.val().dishes || []);
           model.setCurrentDish(data.val().currentDish || null);
         }
       } catch(e) { //catches error in try-block
         console.trace()
         console.log(e);
       } finally {
         loadingFromFirebase= false; //disable loading data from the database again.
       }
    });
}
