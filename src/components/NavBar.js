import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
 
class NavBar extends React.Component{
 
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/category/1" className="nav-link">Category 1</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/category/2" className="nav-link">Category 2</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/category/3" className="nav-link">Category 3</Link>
                                    </li>
                                </ul>
                            </nav>
                            <br />
                            <Routes>
                                <Route path="/category/:id" children={<Route />} />
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}
 
export default NavBar;
 
function Child() {
    // To use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
   
    return (
      <div>
        <h2>ID: {id}</h2>
      </div>
    );
  }