import React, {useState, Component} from "react";


export const RedButton = (props) => {

    return(
        <div  style={
            {
                color: '#b7b6b6',
                fontSize: 10,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                marginTop: '10px',
                marginRight: '5px',
                border: "#770909",
                borderRadius: '20px',
                backgroundColor:  "#770909",
                transition: 'background 0.2s ease',
            }
        }>{props.id}</div>
    );
}