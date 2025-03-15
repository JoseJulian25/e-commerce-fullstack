import React from "react";


const SectionHeading = ({title}) => {
    return (
        <div className="flex flex-wrap px-10 my-5 gap-2">
            <div className="border-1 rounded bg-black w-1 h-8">

            </div>
            <p className="text-2xl">{title}</p>
        </div>
    )
}

export default SectionHeading;