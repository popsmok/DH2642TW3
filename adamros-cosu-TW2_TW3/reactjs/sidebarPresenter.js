function SidebarObserver(props){
    const [number, setNumber]=React.useState(props.model.numberOfGuests);
    const [dish, setDish] = React.useState(props.model.dishes);

    React.useEffect( function(){
          function obs(){
              setNumber(props.model.numberOfGuests);
              setDish(props.model.dishes);
            }
              props.model.addObserver(obs);
              return function(){ props.model.removeObserver(obs);}
          }, []);
    return (
        <SidebarView
            guests={number}
            setGuests= {(guests) => props.model.setNumberOfGuests(guests)}
            dishes = {[...dish]}
            removeDish = {(id) => props.model.removeFromMenu(id)}
            dishChoice = {(id) => props.model.setCurrentDish(id)}
        />
    );
}
