import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

function Home() {
    return <h1 className="container">Welcome to My React App</h1>;
}

function About() {
    return <h1 className="container">This is the About Page</h1>;
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/counter">Counter</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </Router>
    );
}
