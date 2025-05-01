 import Logo from '../assets/Logo.jpg'
 import { useNavigate } from 'react-router-dom'


 export default function Header(){
        const Navigate = useNavigate() 
    return (
        <div>
            <button onClick={()=>{Navigate('/')}}>Home</button>
            <button onClick={()=>{Navigate('/gallery')}}>Gallery</button>
            <button onClick={()=>{Navigate('/about')}}>About</button>
            <button onClick={()=>{Navigate('/contact')}}>Contact</button>
            <h2>Buttons</h2>          
        </div>
    )
} 

export function Component2 (){ 

    return (
        <>
         <h1>This is the other export</h1>
         <img src={Logo} alt="" />
        </>

    )
}










// const Header = ()=>{

// }
