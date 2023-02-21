import HouseScreen from "./screens/house-screen";
import AddScreen from "./screens/add-screen";
import TodosScreen from "./screens/todos-screen";
import DestructorScreen from "./screens/destructor-screen";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

function App() {


    return (
        <div className="container">

            <BrowserRouter>
                <Routes>
                    <Route path="/desctructors" element={<DestructorScreen/>}/>
                </Routes>
            </BrowserRouter>

            <h1>Welcome to WebDev</h1>
            <DestructorScreen/>
            <AddScreen a={123} b={32}/>
            <HouseScreen house={{rooms: 4, baths:3, sqft:2000}}/>
            <TodosScreen todos={[
                {_id: '123', label: 'cook', done: false},
                {_id: '234', label: 'teach', done: true},
                {_id: '345', label: 'sleep', done: false}
            ]}/>

    </div>
  );
}

export default App;
