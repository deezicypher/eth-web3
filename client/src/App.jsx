import { Footer,Navbar,Welcome,Services, Transactions } from "./components"



const App = () =>{
  

  return (
    <div className="m-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
