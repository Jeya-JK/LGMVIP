import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa3 ba b--black rounded bg-white'
                 type="search" 
                 placeholder='Search by name' 
                 onChange={searchChange}
                 style = {{borderRadius: '25px'}}
                 />
            </div>
        );
}

export default SearchBox;
