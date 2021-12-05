function SummaryPresenter(props){  // assume a model prop
   return <SummaryView persons={props.model.numberOfGuests}
   dishIngredients = {getIngredients([... props.model.dishes])}/>
}
