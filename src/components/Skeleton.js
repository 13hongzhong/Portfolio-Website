import React from 'react'

const Skeleton = ({children, className=""}) => {
	return (
	<div className={`w-full h-full inline-block z-0 p-32 ${className}`}>
	{children}
</div>
)
}

export default Skeleton