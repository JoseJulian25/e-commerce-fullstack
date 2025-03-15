import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Card from '../../Card/Card';

const Category = ({title, data}) => {
    return (
        <>
            <SectionHeading title={title} />
            <div className='pr-10 pl-10 flex flex-wrap'>
                {data && data?.map((item, index) => {
                return <Card key={item?.title + index} title={item?.title} description={item?.description} imagePath={item?.image}  height={260} width={240} actionArrow={true}/>
                })}
            </div>
            
        </>
    )
}

export default Category;