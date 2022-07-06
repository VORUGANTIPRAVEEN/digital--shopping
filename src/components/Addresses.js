import React from 'react'
import './Settings.css';
export default function Addresses() {
  return (
    <div className="Addresses_main_div">
        <div class="form-group">
        <input type="street" className="form-control" id="autocomplete"  placeholder="Street" />
        <input type="city" className="form-control"id="inputCity" placeholder="City" />
        <input type="state"  className="form-control" id="inputState" placeholder="State" />
        <input type="zip" className="form-control" id="inputZip"  placeholder="Zip" />
        <input type="county"  className="form-control" id="inputCounty" placeholder="County" />
        <input type="country"  className="form-control"  id="inputCountry"  placeholder="Country" />
        <button>Submit</button>
        </div>
    </div>
  )
}
