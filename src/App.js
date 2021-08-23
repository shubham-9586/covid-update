import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {
    const [data,setData]=useState([]); 

    const getCovidData = async ()=>{

        try{
            const res=await  fetch('https://data.covid19india.org/data.json');
         const actualData =await  res.json();
         console.log(actualData.statewise[0]);
         setData(actualData.statewise[0]);
         

        }catch (err) {
            console.log(err);

        }
     

    }

    useEffect(() => {
      getCovidData();
    }, [ ]);
    return (
        <section>
        <div class="mp">
           <h1>LIVE</h1>
           <h2>COVID-19 CORONAVIRUS TRACKER</h2> 
           <ul>
               <li className="card1">
                  <div className="card__main1">
                      <div className="card__inner1">
                          <p className="card__kame"><span>OUR</span>COUNTRY</p>
                            <p className="card__total1">INDIA</p>
                      </div>

                  </div>

               </li>
               <li className="card2">
                  <div className="card__main2">
                      <div className="card__inner2">
                          <p className="card__jame"><span>TOTAL</span>RECOVERED</p>
                            <p className="card__total2">{data.recovered}</p>
                      </div>

                  </div>

               </li>
               <li className="card3">
                  <div className="card__main3">
                      <div className="card__inner3">
                          <p className="card__lame"><span>TOTAL</span>CONFIRMED</p>
                            <p className="cards__samll">{data.confirmed}</p>
                      </div>

                  </div>

               </li>
               <li className="card4">
                  <div className="card__main4">
                      <div className="card__inner4">
                          <p className="card__name"><span>TOTAL</span>DEATH</p>
                            <p className="card__total4">{data.deaths}</p>
                      </div>

                  </div>

               </li>
               <li className="card5">
                  <div className="card__main5">
                      <div className="card__inner5">
                          <p className="card__game"><span>TOTAL</span>ACTIVE</p>
                            <p className="card__total5">{data.active}</p>
                      </div>

                  </div>

               </li>
               <li className="card6">
                  <div className="card__main6">
                      <div className="card__inner6">
                          <p className="card__hame"><span>LAST</span>UPDATED</p>
                            <p className="card__total6">{data.lastupdatedtime}</p>
                      </div>

                  </div>

               </li>
           </ul>
        </div>
        </section>
    )
}

export default Covid;