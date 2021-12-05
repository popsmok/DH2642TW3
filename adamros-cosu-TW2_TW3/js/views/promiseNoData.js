function promiseNoData(promise, data, error){
      if(!promise){
        return <div><span>no data</span></div>;
      }
      else if((!error)&&(!data)){
        return <img src="http://www.csc.kth.se/~cristi/loading.gif" alt="gif"/>;
      }
      else if(!data){
        return <span>some error</span>;
      }
      else if(!error){
        return false;
      }
  }
