// Code Keypad Component Here


function Keypad (){
    function handleChange(event) {
        console.log(`${event.target.name}`);
      }
    
      return (
        <div>
          <input
            type="password"
            name="Entering password..."
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
      );
    
}

export default Keypad;