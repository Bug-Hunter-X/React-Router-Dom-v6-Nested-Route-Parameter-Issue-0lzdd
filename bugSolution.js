import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about/123">Go to About</Link>
    </div>
  );
}

function About() {
  const { id } = useParams();
  return (
    <div>
      <h1>About {id}</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

// ... rest of the components