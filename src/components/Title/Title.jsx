import React from 'react';

const Title = ({ subTitle, title }) => {
    return (
        <div className="text-center  mt-20 sm:mb-8">
            <p className="text-lg sm:texet-2xl text-[#076e83] font-semibold mb-2">
                {subTitle}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#076e83] leading-tight">
                {title}
            </h2>
        </div>
    );
};

export default Title;
