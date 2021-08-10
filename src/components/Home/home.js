import React from 'react';
import{BrowserRouter,Link} from 'react-router-dom'
import Controller from '../RouterController/controller';
import '../Home/home.css'
function Home(){
    return(
        <BrowserRouter>
        <div className="myContainer"> 
            <h1>Continents</h1>
            <table className='mytable'>
                <thead>
                    <tr>
                       <th>Code</th>
                       <th>Name</th>
                       <th>Num of Countries</th>
                    </tr>
                </thead>
               <tbody>
                  <tr>
                     <td>AF</td>
                     <td><Link to='/AF'>Africa</Link></td>
                     <td>58</td>
                  </tr>
                  <tr>
                    <td>AN</td>
                    <td><Link to='/AN'>Antarctica</Link></td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>AS</td>
                    <td><Link to='/AS'>Asia</Link></td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <td>EU</td>
                    <td><Link to='/EU'>Europe</Link></td>
                    <td>53</td>
                  </tr>
                  <tr>
                    <td>NA</td>
                    <td><Link to='/NA'>North America</Link></td>
                    <td>41</td>
                  </tr>
                  <tr>
                    <td>OC</td>
                    <td><Link to='/OC'>Oceania</Link></td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <td>SA</td>
                    <td><Link to='/SA'>South America</Link></td>
                    <td>14</td>
                  </tr>
               </tbody>
               
            </table>
            <Controller/>
        </div>
        </BrowserRouter>
            
     
    )

}
export default Home;