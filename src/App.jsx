import './style.css';
import HeaderCointainer from "./components/HeaderCointainer"; 
function App() {
  

  return (
    <>

    <HeaderCointainer />
    <formCointainer />
    <listCointainer />

     <section id= "HeaderContainer">
    <h1>Student Directory</h1>
    <small>Show list of Student</small>
  </section>

     <section id= "FormContainer">
    <form id= "StudentForm">
      <div className= "Input-Field">
        <label htmlFor="name">Student Name</label>
        <input type="text" name="name" id="name"/>
      </div>
       
        
      <div className= "Input-Field">
           <label htmlFor="program">Program</label>
           <input type="text" name="program" id="program"/>
      </div>
      <div>
        <button>Add Student</button>
      </div>
    </form>
 
  </section>
  
 
 
  <section id= "formContainer">
    <form id= "StudentForm">
      <div className= "Input-Field">
        <label htmlFor="name">Student Name</label>
        <input type="text" name="name" id="name"/>
      </div>
       
        
      <div className= "Input-Field">
           <label htmlFor="program">Program</label>
           <i type="text" name="program" id="program"/>
      </div>
      <div>
        <button>Add Student</button>
      </div>
    </form>
 
  </section>
  
  
  
   <section id= "listContainer">
    
     </section>
  
    </>
  )
}

export default App
