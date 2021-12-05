function ShowPresenter(props){
  const [hashState, setHashState] = React.useState(window.location.hash);
  const listener = (() => {
    setHashState(window.location.hash)
  })
  React.useEffect(() => {
    window.addEventListener("hashchange", listener);
    return (() => window.removeEventListener(listener));
  }, []);
  return (
    <div className={(hashState !== props.hash) ? "hidden" : ""}>
    {props.children}
    </div>
  )
}
