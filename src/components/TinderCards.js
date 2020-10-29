import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Tindercards.css';


function TinderCards() {

    const [people, setPeople] = useState([
            {
                name: "Prayat Chanaungkarnput",
                Url:"https://www.thairath.co.th/media/dFQROr7oWzulq5FZYSIQAUqDHaREd0MVSM4vUFKxeK77NOshQhm8eBAVYrXWfc5ToCJ.jpg",
            },
            {
                name: "Pravat Wongkom",
                Url:"https://static.naewna.com/uploads/news/source/327009.jpg",
            },
            {
                name: "Nobita",
                Url:"https://www.brighttv.co.th/wp-content/uploads/2018/08/pp550x550.u1.jpg",
            }
    ]);

    const swiped = (direction, nameToDelete) =>{
        console.log("removing: "+nameToDelete);
        
    };
    
    const outOfFrame = (name) =>{
        console.log(name + "left the screen!");
            
    };

    return (
        <div className="tiderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                <TinderCard
                  className="swipe"
                  key={person.name}
                  prevenSwipe={["up","down"]}
                  onSwipe={(dir) => swiped(dir, person.name)}
                  onCardLeftScreen={() => outOfFrame(person.name)}
                  >

                    <div 
                      style={{ backgroundImage: "url(" + person.Url + ")" }}
                      className="card"
                    >
                
                      <h3>{person.name}</h3>

                    </div>  


                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
