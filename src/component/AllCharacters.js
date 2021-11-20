import React from 'react'
import ShowCharacters from './ShowCharacters'
import character1 from '../assets/images/character-1.png'
import character2 from '../assets/images/character-2.png'
import character3 from '../assets/images/character-3.png'
import character4 from '../assets/images/character-4.png'
import character5 from '../assets/images/character-5.png'
import character6 from '../assets/images/character-6.png'
import character7 from '../assets/images/character-7.png'
import character8 from '../assets/images/character-8.png'
import character9 from '../assets/images/character-9.png'
import character10 from '../assets/images/character-10.png'
import character11 from '../assets/images/character-11.png'
import character12 from '../assets/images/character-12.png'




const AllCharacters = () => {

    const characters = [
        {
            id: 1,
            name: 'Darlene Robertson',
            image: character1,
            friends: 23
        },
        {
            id: 2,
            name: 'Leslie Alexander',
            image: character2,
            friends: 23
        },
        {
            id: 3,
            name: 'Jenny Wilson',
            image: character3,
            friends: 23
        },
        {
            id: 4,
            name: 'Guy Hawkins',
            image: character4,
            friends: 23
        },
        {
            id: 5,
            name: 'Arlene McCoy',
            image: character5,
            friends: 23
        },
        {
            id: 6,
            name: 'Jerome Bell',
            image: character6,
            friends: 23
        },
        {
            id: 7,
            name: 'Brooklyn Simmons',
            image: character7,
            friends: 23
        },
        {
            id: 8,
            name: 'Kristin Watson',
            image: character8,
            friends: 23
        },
        {
            id: 9,
            name: 'Eleanor Pena',
            image: character9,
            friends: 23
        },
        {
            id: 10,
            name: 'Peter Kutt',
            image: character10,
            friends: 23
        },
        {
            id: 11,
            name: 'Klint Yurr',
            image: character11,
            friends: 23
        },
        {
            id: 12,
            name: 'Matt Pill',
            image: character12,
            friends: 23
        }
    ]

    return (
        <div>
            <ShowCharacters characters={characters} />                                                                         
        </div>
    )
}

export default AllCharacters
