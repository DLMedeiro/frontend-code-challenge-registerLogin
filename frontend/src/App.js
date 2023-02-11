import React, { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Admin from "./admin";
import RegisterLoginApi from "./api";
// import NavBar from "./NavBar";
// import { Route, Switch } from "react-router-dom";
// import Menu from "./Menu";
// import MenuItem from "./MenuItem";
// import NewItem from "./NewItem";

// No updates required if changes are made to database structure

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // Provides content for time gap in response from API

  const [allUsers, setAllUsers] = useState([]);
  // Holds content received from API

  const [update, setUpdate] = useState();
  // Used to initiate new API call if a new item is added

  useEffect(() => {
    async function getUsers() {
      let users = await RegisterLoginApi.getAllUsers();
      setAllUsers(users);
      setIsLoading(false);
    }
    getUsers();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      {allUsers.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
  // return (
  //   <div className="App">
  //     <BrowserRouter>
  //       {/* <NavBar allItems={allItems} /> */}
  //       <main>
  //         <Switch>
  //           <Route exact path="/admin">
  //             <Home allItems={allItems} />
  //             {/* Uses allItems to show menu quantities */}
  //             {/* Incorrect input after "/" redirects to catch all below*/}
  //           </Route>
  //           <Route exact path="/newItem">
  //             <NewItem addItem={addItem} />
  //             {/* Populates the information used in addItem to initiate Post request to API */}
  //           </Route>
  //           <Route exact path="/menu/:type">
  //             <Menu allItems={allItems} />
  //             {/* Renders specific content from allItems based on type parameter*/}
  //             {/* Incorrect type uses history method to redirect to homepage */}
  //           </Route>
  //           <Route path="/menu/:type/:id">
  //             <MenuItem items={allItems} cantFind="/" />
  //             {/* Incorrect item redirects to "/" */}
  //           </Route>
  //           <Route>
  //             <p>Hmmm. I can't seem to find what you want.</p>
  //           </Route>
  //           {/* Catch all for other incorrect routes */}
  //         </Switch>
  //       </main>
  //     </BrowserRouter>
  //   </div>
  // );
}

export default App;
