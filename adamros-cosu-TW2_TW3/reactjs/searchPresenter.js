function SearchPresenter(props){
  //hooks called and returning current value
  const [promise, setPromise]=React.useState(null);
  const [searchQuery, setSearchQuery]=React.useState("");
  const [searchType, setSearchType]=React.useState("");

  //change value promise 
  React.useEffect( function(){
        setPromise(DishSource.searchDishes({}));
      }, []); // [] cleanup after an effect has been established
  const [data, error] = usePromise(promise);

  //React.Framnet used to return multiple elements instead of div
  return(
    <React.Fragment>
     <SearchFormView
     options={["starter", "main course", "dessert"]}
     onText={(text) => {
       setSearchQuery(text);
     }}
     onDishType={dishType => {
       setSearchType(dishType);
        setPromise(DishSource.searchDishes({"type": dishType, "query": searchQuery}));
     }}
     onSearch={() => {
       setPromise(DishSource.searchDishes({"type": searchType, "query": searchQuery}));
     }}
     />
     {promiseNoData(promise, data, error) ||
         <SearchResultsView searchResults={data} dishChosen={(id) => props.model.setCurrentDish(id)}/>}
    </React.Fragment>

  )
}
