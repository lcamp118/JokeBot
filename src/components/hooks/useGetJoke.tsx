import React from 'react'

export default function useGetJoke(type){
    return fetch(`https://official-joke-api.appspot.com/jokes/${type}/random`)
}