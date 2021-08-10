import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '../../graphql/myQueries'
import '../../tableStyle.css'
function SouthA(){
    const{data,loading,error} = useQuery(GET_COUNTRIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    // if(data){
    //     console.log(data.continents[6].countries)
    // }
    return (
            <div>
                 <h1>South America</h1>
                 <table>
                     <thead>
                         <tr>
                             <th>Code</th>
                             <th>Name</th>
                             <th>Capital</th>
                             <th>Currency</th>
                             <th>Languages</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                             data.continents[6].countries.map((item)=>{
                                return(
                                      <tr key={item.native}>
                                          <td>{item.code}</td>
                                          <td>{item.native}</td>
                                          <td>{item.capital}</td>
                                          <td>{item.currency}</td>
                                          <td>
                                              {item.languages.map((item)=>{
                                                     return <p key={item.name}>{item.name}</p>
                                              })}
                                          </td>
                                      </tr>
                                )
                             })

                         }
                     </tbody>
                 </table>
            </div>
        )
}
export default SouthA