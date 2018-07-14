import React from "react";

export const Col = props => {
    /*const size = props.size.split(' ').map(size => 'col-' + size).join(' ');*/
    return (
        <div className={props.size.split(' ').map(size => 'col-' + size).join(' ')}>
            {props.children}
        </div>
    );
};
