export const RenderHeader = () => {

     return (
          <div className="header">
               <div className="logo">
                    <img onClick={ () => { window.location.href="https://www.youtube.com/@kodiecode"} } src="/kodie-logo.jpg" alt="Kodie"/>
               </div>
               <h1>Authentication Tutorial</h1>
          </div>
     )
}