function SummaryView(props){
    return (
      <div>
        <button onClick={e=> window.location.hash="#search" }> Back to Search</button>
        <div className="tite">
          Summary for <span title="nr. guests">
            {props.persons}
            </span> guests:
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Aisle</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {[...props.dishIngredients].sort(compareIngredients).map(dishIngredient =>(
                <tr key={dishIngredient.id}>
                  <td>{dishIngredient.name}</td>
                  <td>{dishIngredient.aisle}</td>
                  <td>{(dishIngredient.amount * props.persons).toFixed(2)} {dishIngredient.measures.metric.unitShort}</td>
                </tr>))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
}


 function compareIngredients(a,b){
    if(a.aisle < b.aisle)
      return -1;
    if (a.aisle > b.aisle)
      return 1;
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    if (a.name === b.name) throw new Error("the same ingredient");
  }
