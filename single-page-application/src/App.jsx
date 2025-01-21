import { useRef } from 'react'
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'
function App() {
    return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/class-11-chemistry' element={<Class11Chemistry/>}/>
                <Route path='/class-12-chemistry' element={<Class12Chemistry/>}/>
            </Route>

            </Routes>
        </BrowserRouter>
    </div>     
)}

function Layout() {
    const inputRef = useRef();

    function focusOnPhoneNumber() {
        inputRef.current.focus()
    }

    return(
        <div style={{height: "100vh"}}>
            <Link to={'/'}>Home</Link> |
            <Link to={'/class-11-chemistry'}>Class 11th</Link> |
            <Link to={'/class-12-chemistry'}>Class 12th</Link>
            <div style={{height: "90vh"}}>
                <Outlet/>
            </div>
            <div>
                <input ref={inputRef} type="text" placeholder='phone number'/>
                <input type="text" placeholder='name'/>
                <button onClick={focusOnPhoneNumber}>submit</button>
            </div>
            Footer | Contact Us
        </div>
    )
}

function Home() {
    return (
        <div>
            Welcome Home
        </div>
    )
}

function Class11Chemistry() {
    return (
        <div>
            this is a page for class 11th chemistry topic
        </div>
    )
}

function Class12Chemistry() {
    return (
        <div>
            this is a page for class 12th chemistry topic
            <Link to={'/'}><button>Go back to home page</button></Link>
        </div>
    )
}

export default App
