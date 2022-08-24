 function Tododate(props){
    
    let month=props.tododate.toLocaleString('en-US', {month:'long'});
    let year=props.tododate.getFullYear();
    let day=props.tododate.toLocaleString('en-US',{day:'2-digit'})

    return(

         <div>
         <div>{year}</div>
         <div>{day}</div>
        <div>{month}</div>

    </div>
    )
 }
    
   
 export default Tododate;