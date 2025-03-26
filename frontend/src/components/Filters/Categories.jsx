import React from 'react';

const Categories = ({types}) => {
  return (
    <div className='pt-2'>
      {types?.map(type => { return (
        <div className='flex gap-2 pl-2' key={type?.id}>
            <input type='checkbox' name={type?.type_id} className='border rounded-lg  w-4 h-4 text-gray-600'/>
            <label className='text-gray-600' >{type.name}</label>
        </div>
      )})}
    </div>
  );
};

export default Categories;