function DetailsPresenter(props){
  const currentDish = useModelProperty(props.model, "currentDish");
  const currentDishDetails = useModelProperty(props.model, "currentDishDetails");
  const currentDishError = useModelProperty(props.model, "currentDishError");
  const numberOfGuests = useModelProperty(props.model, "numberOfGuests");
  const dishes = useModelProperty(props.model, "dishes");
  
  return promiseNoData(currentDish, currentDishDetails, currentDishError)
  || (<DetailsView
  isDishInMenu = {dishes.find(d => d.id === currentDish)}
  people = {numberOfGuests}
  dish = {currentDishDetails}
  dishIngredients = {getIngredients([currentDishDetails])}
  dishAdded = {dishes => myModel.addToMenu(dishes)}
/>)
}
