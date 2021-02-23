import React from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from            '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function Price(){
    return(
        
<>      <div><br></br>
        <h5>PRICE</h5>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            Free
            </label><br></br>


            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            Less than $25
            </label><br></br>
        
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            $25 - $50
            </label><br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            $50 - $100
            </label><br></br>

            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            More than $100
            </label><br></br>
            </div><br></br><br></br>




            <div>
        <h5>SESSION AVAILABILITY</h5>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            30 min
            </label><br></br>

            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            60 min
            </label><br></br>
        
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            15 min
            </label><br></br>
            </div><br></br><br></br>


            <div>
        <h5>LANGUAGE</h5>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            English
            </label><br></br>

            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            French
            </label><br></br>
        
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            German
            </label><br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            Hindi
            </label><br></br>

            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
            Arabic
            </label><br></br>
        
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />&nbsp;&nbsp;
            <label class="form-check-label" for="flexCheckChecked">
             Mandarin Chineses
            </label>
            </div><br></br>

        <h6 className="morecolor">More</h6>
            
</>

    );
}
export default Price;