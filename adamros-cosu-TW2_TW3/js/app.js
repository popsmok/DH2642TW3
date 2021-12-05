 /*function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props){
   return  (
        <div>
             <SidebarObserver model={props.model}  />
             <SummaryObserver model={props.model}  />
             <RenderTest />
         </div>
    );
}*/

const App= (props)=>
<div className="flexParent">
  <div className="sidebar debug"    ><SidebarObserver model={props.model}  /></div>
  <div className="mainContent debug">
  <ShowPresenter hash="#search">
  <SearchPresenter model={props.model}/>
  </ShowPresenter>

  <ShowPresenter hash="#details">
  <DetailsPresenter model={props.model}/>
  </ShowPresenter>

  <ShowPresenter hash="#summary">
  <SummaryObserver model={props.model}/>
  </ShowPresenter>
  </div>
</div>;

function defaultRoute(){
  const knownRoutes = ["#search", "#summary", "#details"]
    if(!knownRoutes.includes(window.location.hash)) {
      window.location.hash="#search";
  }
}
defaultRoute(); // when the application loads, set the default route!

window.addEventListener("hashchange", defaultRoute);
