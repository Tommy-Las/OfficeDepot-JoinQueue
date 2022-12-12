import React, { useState } from 'react';


function SearchBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (e) =>{
        const searchWord = e.target.value;
        const newFilter = data.filter((value) => {
            return value.city.toLowerCase().includes(searchWord.toLowerCase());
        })

        if(searchWord === ""){
            setFilteredData([]);
        }
        else{
            setFilteredData(newFilter);
        }
    }

    return(
        <div>
            <input 
                type='text'
                style={{
                    display: 'block',
                    margin: 'auto',
                    width: '30%'
                }}
                placeholder={placeholder}
                onChange={handleFilter}
            />
            { filteredData.length >=1 && (
            <div 
                style={{
                    marginTop: 10,
                }}
            >
                {filteredData.map((value, key) => {
                    return <div
                                className='row border border-3 border-secondary bg-light'
                                style={{
                                    width: '60%',
                                    margin: 'auto',
                                    marginTop: 20,
                                    "--bs-border-opacity": 0.5,
                                }}
                            > 
                                <div
                                    className='col-7'
                                >{value.address}, {value.city}, {value.state} {value.postal}</div>
                                <div
                                    className='col-5'
                                >
                                    <p>WAIT TIME</p> 
                                    <h3><strong style={{color: 'red', fontSize: 35}}>{value.time}</strong> mins</h3>
                                </div> 
                            </div>
                })}
            </div>)}
        </div>
    )
}

export default SearchBar;