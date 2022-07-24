import "./topbar.scss";
import {Phone,Mail,LinkedIn,Instagram,GitHub} from "@material-ui/icons"
// import DarkModeIcon from '@mui/icons-material/DarkMode';


// export default function Topbar({menuOpen, setMenuOpen}) {
//   return (
//     <div className={"topbar "+(menuOpen && "active")}>
//       <div className="wrapper">
//         <div className="left">
//           <a href="#intro" className="logo">Alohomora.</a>
//           <div className="itemContainer">
//             <Phone className="icon"/>
//             <span>+91 975 3456 141</span>
//           </div>
//           <div className="itemContainer">
//             <Mail className="icon"/>
//             <span>ajanimesh20026@gmail.com</span>
//           </div>
//         </div>
//         {/* <div className="middle">
//           <h2>I THOUGH FIRE CODE!!</h2>
//         </div> */}
//         <div className="right">
//           <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
//             <span className="line1"></span>
//             <span className="line2"></span>
//             <span className="line3"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }








export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar "+(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        {/* <div className="itemContainer">
            <Phone className="icon" />
          </div> */}
          <div className="itemContainer">
          <a href="mailto:ajanimesh20026@gmail.com" target="_blank"><Mail className="icon" /></a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/animesh-jain-1224b81ba/" target="_blank"><LinkedIn className="icon" /></a>
          </div>
          <div className="itemContainer">
          <a href="https://github.com/anii-jain" target="_blank"><GitHub className="icon" /></a>
          </div>
          <div className="itemContainer"> 
          <a href="https://www.instagram.com/aniimesh_jain/" target="_blank"><Instagram className="icon" /></a>
          </div>
        </div>
        <div className="middle">
          <a href="#intro" className="logo">Portfolio.</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}