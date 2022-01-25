 import { Component } from "react";
 class Footer extends Component {
     render() {
         const year = new Date().getFullYear();
         return (
             <footer>
                 <p>Thank you for visiting this page! It is {year}</p>
             </footer>
         );
     }
 }
 
 export default Footer;
 
 