class DinnerModel{
    constructor(guests=2, dishes=[], currentDish=null){
      this.observers = [];
      this.dishes = dishes;
      this.currentDish = currentDish;
      this.setNumberOfGuests(guests);
    }
    addObserver(callback){
      this.observers = [...this.observers, callback];
    }
    removeObserver(callback){
      this.observers = this.observers.filter((e) => e !== callback);
    }
    notifyObservers(){
      this.observers.forEach(args => {
        setTimeout(() =>  {
          try {
            args();
          } catch(error){
            console.log(error);
          }
        }, 0)
      })
    }
    addToMenu(dish){
      const found = this.dishes.filter((e) => e === dish)
      if(found !== dish){
        this.dishes = [...this.dishes, dish]
        this.notifyObservers();
    }
    };
    removeFromMenu(dishData){
      const found = this.dishes.filter(e => dishData === e)
      if(found[0] === dishData){
      this.dishes = this.dishes.filter(dishID => dishID.id !== dishData.id)
      this.notifyObservers()
    }
    }

    setDishes(dishes){
      this.dishes= [...dishes];
      this.notifyObservers()
    }


      setNumberOfGuests(x){
        if(Number.isInteger(x) && x > 0){
          const old = this.numberOfGuests;
          this.numberOfGuests= x;
          if(old !== x){
            this.notifyObservers()
          }
        } else {
          throw Error;
        }
      }
    setCurrentDish(id){
      if(this.currentDish === id){
        return
      }
      this.currentDish = id;
      this.currentDishDetails = null;
      this.currentDishError = null;
      this.notifyObservers();

      if(this.currentDish) {
        DishSource.getDishDetails(this.currentDish)
        .then((results) => {
          if (this.currentDish === id) {
            this.currentDishDetails = results;
            this.notifyObservers();
          }
        })
        .catch(err => {
          if (this.currentDish === id) {
            this.currentDishError = err;
            this.notifyObservers();
          }
        })
      }
    }
}

function getIngredients (dishArr){
  const result={}; // object used as mapping
  dishArr.forEach(d=> d.extendedIngredients.forEach(ingredient=>{
    if(!result[ingredient.id]){
      result[ingredient.id] = {...ingredient};
    } else {
      result [ingredient.id].amount += ingredient.amount;
    }
    }))
      return Object.values(result);
    }
