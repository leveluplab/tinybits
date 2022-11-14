import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [a, setA] = React.useState('');
    const [b, setB] = React.useState('');
    const [sum, setSum] = React.useState(0);
    const handleSum = (e: any) => {
        setSum(parseInt(a, 10) + parseInt(b, 10));
    }
    return <div className="page home-page">
        <h1>Hello Developers</h1>
        <h2 data-auid="home-page">This is a demo app to learn UI automation</h2> <br />
        <h3>Add 2 numbers and display result</h3>
        <form className="form">
            <div className="input-container">
                <label htmlFor="a">A</label>
                <input
                    type="text"
                    id="a"
                    value={a}
                    data-auid="input-a"
                    onChange={(e) => {setA(e.target.value)}}
                />
            </div>
            <div className="input-container">
                <label htmlFor="b">B</label>
                <input
                    type="text"
                    id="b"
                    value={b}
                    data-auid="input-b"
                    onChange={(e) => {setB(e.target.value)}}
                />
            </div>
            <button
                type="button"
                className="add-btn enabled"
                data-auid="sum-button"
                onClick={handleSum}
            >
                Add numbers
            </button>
            <div className="result-container">
                <p>A + B = <span data-auid="sum">{sum}</span></p>
            </div>
        </form>
        <div className="link-to-done" data-auid="link-to-completion">
            <Link to="/done" >Got to completion message</Link>
        </div>
    </div>;
};

export default Home;
