import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// 
// const Home = ({ title }) => {
//     return (
//         <div className='text-black   pl-[10px]  pr-[10px]   bg-slate-300  rounded-2xl' style={{
//             mixBlendMode: 'inherit'
//         }}>
{/* <Link to="/">{title}</Link> */ }
{/* <div> */ }
{/* <input type='text' className='rounded-2xl opacity-[0.7]  placeholder:text-l placeholder:text-red-700' */ }
//                     name='random' placeholder='enter your shit here' />
{/* <input className='rounded-xl bg-slate-400 pl-[4px] ml-[10px]  text-xl' */ }
//                     type='submit' onClick={(e) => {
//                         e.preventDefault();
//                         alert(e.target.value);
//                     }} />
{/* </div> */ }
{/* </div> */ }
//     );
// };
// 
// const About = ({ title }) => {
//     return (
//         <div>
{/* <Link to="/about">{title}</Link> */ }
{/* </div> */ }
//     );
// };
// 
// const Help = ({ title }) => {
//     return (
//         <div>
{/* <Link to="/help">{title}</Link> */ }
{/* </div> */ }
//     );
// };
// 
// const App = () => {
//     return (
//         <Router>
{/* <div> */ }
{/* <Route path="/" exact render={() => <Home title="Home" />} /> */ }
{/* <Route path="/about" render={() => <About title="About" />} /> */ }
{/* <Route path="/help" render={() => <Help title="Help" />} /> */ }
{/* </div> */ }
{/* </Router> */ }
//     );
// };
// 
// export default App;


const Home = () => {
    return (
        <div className='text-black   pl-[10px]  pr-[10px]   bg-slate-300  rounded-2xl' style={{

            mixBlendMode: 'inherit'


        }}>
            <a href='#' /> Home<br />
            <div>
                <input type='textField' className='rounded-2xl opacity-[0.7]  placeholder:text-l
                placeholder:text-red-700'
                    name='random' placeholder='enter' />
                <input className='rounded-xl  bg-slate-400  pl-[4px] ml-[10px]  text-xl'
                    type='submit' onMouseOver={
                        (e) => {
                            // e.preventDefault();
                            // console.log(e.target.value)
                            window.alert(e.target.value)
                        }
                    } />
            </div>
        </div>
    )
}
const About = () => {
    return (
        <div>

            <a href='#' />  About
        </div>
    )
}
const Help = () => {
    return (
        <div>
            <a href="#"> Help</a>
        </div >
    )
}
export { Home, About, Help };