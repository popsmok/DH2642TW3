function SidebarPresenter(props){   // assume a model prop
   return <SidebarView
    guests={props.model.numberOfGuests}
    setGuests= {(guests) => props.model.setNumberOfGuests(guests)}
    dishes = {[...props.model.dishes]}
    removeDish = {(id) => props.model.removeFromMenu(id)}
    dishChoice = {(id) => props.model.setCurrentDish(id)}
    ></SidebarView>
}
