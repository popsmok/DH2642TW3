function eventPrinter(evt){ console.log(evt);}

function SearchFormView(props){
  return(
  <div>
  <input onChange={ e=> props.onText(e.target.value) } placeholder="Search..."/>
  <select onChange={ e=> props.onDishType(e.target.value) }>
      <option>Choose:</option>
      {props.options.map((opt) => (<option key={opt} >{opt}</option>))}
</select>
<button onClick={ (event)=> props.onSearch() }
>
Search
</button>
<button onClick={e=> window.location.hash="#summary" }> Show summary</button>
</div>
);
}

function SearchResultsView(props){
  return (<div className="flexParent">
      {
        props.searchResults.map((searchResults) =>(
            <span className="SearchResults" key={searchResults.id} onClick={
               () => {props.dishChosen(searchResults.id);
               window.location.hash="#details";}}>
              <img className="SearchResults" src={"https://spoonacular.com/recipeImages/"+ searchResults.image} />
              <p className="SearchResults"> {searchResults.title}</p>
            </span>
          ))
      }
  </div>
);
}
