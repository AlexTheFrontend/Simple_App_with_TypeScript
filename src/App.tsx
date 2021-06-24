import React, {useState} from 'react';
import './App.css';
import List from "./components/list";
import AddToList from "./components/AddToList";

export interface IState {
    people: {
        name: string,
        age: number,
        url: string,
        note?: string
    }[]
}

function App() {

    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "King Arthur",
            url: "https://cdn.vox-cdn.com/thumbor/BQFHgCIIIiYytUhl1uWuZmeb_NI=/0x0:1595x1000/1200x800/filters:focal(709x161:963x415)/cdn.vox-cdn.com/uploads/chorus_image/image/54725259/arthurcover.0.jpg",
            age: 186,
            note: "He was a great king"
        }
    ])

    return (
        <div className="App">
            <h1>People invited to my party!!!</h1>
            <List people={people}/>
            <AddToList people={people} setPeople={setPeople}/>
        </div>
    );
}

export default App;
