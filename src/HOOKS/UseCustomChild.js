import React from 'react'

function UseCustomChild() {

    function  Add() {
        SetCount(count+1);
    }
    function  Neg () {
        SetCount(count-1);
    }
  return [count,]
}

export default UseCustomChild