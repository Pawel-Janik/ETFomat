import React from 'react'

import { Dot, DotProps } from 'recharts';

interface ChartDotProps extends DotProps {
    index?: number
}

export const ChartDot = (props: ChartDotProps) => {
    const onMouseOver = () => {
        if (props.onMouseOver && props.index !== undefined){
            props.onMouseOver(props.index);
        }
    }
    return (        
        <Dot 
            {...props} 
            onMouseOver={onMouseOver}
        />
    );
}
