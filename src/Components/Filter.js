import React from 'react';
import '../CSS/Filter1.css'
import {Button} from 'react-bootstrap'

class Filter extends React.Component{

render()
{

return(
<div>


<label for="dateofbirth">Arrival Date</label>
<input type="date" name="dateofbirth" id="dateofbirth" className="calendar" />
<label for="dateofbirth">Departure Date</label>
<input type="date" name="dateofbirth" id="dateofbirth" />
{/* <Button className="submit-button">Search</Button> */}
</div>


)

}

}

export default Filter;