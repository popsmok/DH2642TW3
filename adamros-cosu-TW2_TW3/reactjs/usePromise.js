function usePromise(promise){
  const [data, setData]=React.useState(null);
  const [error, setError]=React.useState(null);

  React.useEffect(() => {
    setData(null);
    setError(null);

    let cancelled = false;
    if(promise){
      promise.then(((dt) => {
        if(!cancelled) {
          setData(dt);
        }
      })).catch((er) => {
        setError(er);
        console.log(er);
      })
    }
    return function () {
      cancelled = true;
    }
  }, [promise]);
  return [data, error];
}
