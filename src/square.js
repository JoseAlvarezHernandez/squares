import React from 'react';
import classNames from 'classnames';

export default function Square({ onClick, isRed, isGreen }){
    return <div className={classNames('square', { 'red' : isRed, 'green': isGreen })} onClick={onClick}></div>
}