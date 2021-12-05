function useModelProperty(model, propertyName){
  // Hook called with current value
  const [value, setValue] = React.useState(model[propertyName]);

  //When an observer notice a change it updates the website
  React.useEffect(function(){
    model.addObserver(() => setValue(model[propertyName]))
    return function () {
      model.removeObserver(setValue(model[propertyName]))
    }
  }, [model]); //Cleanup model
  return value
}
