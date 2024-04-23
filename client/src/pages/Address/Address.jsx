
import ReactDOM from 'react-dom';
import './../member/style.css'
 
function Address() {
    return (
        <form className='container new-line'>
             <label>Street  </label>
            <input name="address" placeholder="Address" type="text" />
            <label>Street 2 </label>
            <input name="unit" placeholder="Unit number" type="text" />
            <label>City </label>
            <input name="city" placeholder="City" type="text" />
            <label>State </label>
            <input name="state" placeholder="State" type="text" />
            <label>Country </label>
            <input name="country" placeholder="Country" type="text" />
            <label>Zip Code </label>
            <input name="postcode" placeholder="Postcode" type="text" />
            
        </form>
    );
}

export default Address;