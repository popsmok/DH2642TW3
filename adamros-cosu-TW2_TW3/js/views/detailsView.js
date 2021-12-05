//DishSource.getDishDetails(1445969).then(console.log).catch(console.error)
function DetailsView(props){
  return (
    <div>
    <h2>{props.dish.title}</h2>
    <table>
      <tbody>
        <tr>
          <td>
          <img src={props.dish.image} className="image" alt="Dish_Image" />
          <p> Price: {props.dish.pricePerServing}</p>
          <p> Price for {props.people} guests: {(props.people*props.dish.pricePerServing).toFixed(2)}</p>
          </td>
        </tr>
        </tbody>
        </table>

    <button disabled={props.isDishInMenu}
    onClick={ (event)=> {props.dishAdded(props.dish); window.location.hash="#search";} }> Add to menu! </button>
    <button onClick={e => window.location.hash="#search"}> Cancel </button>
    <p>Ingredients</p>
    {[...props.dishIngredients].sort(compareIngredients).map(ingredient => (
      <li key={ingredient.id}> {ingredient.original}</li>
      ))}
    <p>Instructions</p>


    <table><tbody><tr>
    <td>{props.dish.instructions}</td>
    </tr></tbody></table>
    <a href="" onClick={event => {
      event.preventDefault();
        }}>
      more information
      </a>

  </div>
  )
}
