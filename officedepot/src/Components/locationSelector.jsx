import React from 'react';
import officeDepotLogo from './officeDepotLogo.png';
import SearchBar from './searchBar';
import StoreData from '../data/officeAddress.json';

function LocationSelection() {
        return (
            <div>
                <img 
                    alt="Office depot logo" 
                    src={officeDepotLogo}
                    className="d-block"
                    style={{
                        width: "30vw",
                        marginTop: -13,
                        marginLeft: -15,
                    }}
                />
                <div
                    style={{
                        marginTop: '10vh',
                    }}
                >
                    <h1
                        className='text-center'
                    >STORE LOCATOR</h1>
                    <p
                        className='text-center'
                    >Enter City, State or Postal Code</p>
                    <SearchBar placeholder="Enter here" data = {StoreData} />
                </div>
                
            </div>
        );
    }
 
export default LocationSelection;