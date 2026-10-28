 const FormComponent = () => (
     <>
         <section id= "formContainer">
    <form id= "StudentForm">
      <div class= "Input-Field">
        <label for="name">Student Name</label>
        <input type="text" name="name" id="name"/>
      </div>
       
        
      <div class= "Input-Field">
           <label for="program">Program</label>
           < input type="text" name="program" id="program"/>
      </div>
      <div>
        <button>Add Student</button>
      </div>
    </form>
 
  </section>

     </>
 )

export default FormComponent;