function SidebarView(props){
  const types=["starter", "main course", "dessert"];
  function dishType(dish){
      if(dish.dishTypes){
          const tp= dish.dishTypes.filter(value => types.includes(value));
          if(tp.length)
          return tp[0];
      }
      return "";
  }
  function compareDishes(a,b){
      let ai= types.indexOf(dishType(a));
      let bi= types.indexOf(dishType(b));
      return ai < bi ? -1 : ai > bi ? 1 : 0
  }
    return (
        <div>
        <button
          disabled={props.guests <= 1}
          onClick={() => {props.setGuests(props.guests - 1);}}
          >
          -
          </button>
          {props.guests}
          <button
          onClick={() => {props.setGuests(props.guests + 1);}}
            >
            +
            </button>

        <table>
          <tbody>
            {[...props.dishes].sort(compareDishes).map((dish) =>
              <tr key={dish.id}>
                <td>
                  <button onClick={() => props.removeDish(dish)}> X </button>
                </td>
                <td>
                  <a href="#details" onClick={event =>
                    {event.preventDefault();
                      props.dishChoice(dish.id);
                      window.location.hash="#details";
                      }}>
                    {dish.title}
                  </a>
                </td>
              <td className="test">{dishType(dish)}</td>
              <td>{(dish.pricePerServing * props.guests).toFixed(2)}</td>
              </tr>
            )}
          <tr>
            <td>
              Totalt: {(props.dishes.reduce((prev,curr) =>
              (props.guests*curr.pricePerServing)+prev, 0)).toFixed(2)}
            </td>
          </tr>
          </tbody>
        </table>

       </div>
    );
}
