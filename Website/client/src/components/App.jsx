import React from 'react';
import NormalCard from './NormalCard';
import DangerCard from './DangerCard';
import FooterCard from './FooterCard';
import {useFetch} from '../utils/hooks';
import {useData} from '../utils/data';

function App(){

    //const [isDone, setIsDone] = useState(false);

    // function handleClick(){
    //     setIsDone(!isDone);
    // }


    const area = useFetch(
        'http://localhost:8080/python'
      );
    
    const data = useData(
            'http://localhost:8080/result'
      );

    if (area < 5){
        return(
            <div>
                <NormalCard />
                {/* <FooterCard /> */}
            </div>
        )
    }
    else {
        return(
            <div>
                <DangerCard
                    wind = {data} 
                />
                {/* <FooterCard /> */}
            </div>
        )
    }


    
    // return(
    //     <div onClick={handleClick}>

    //         {!isDone ? <NormalCard /> : <DangerCard />}
    //         <div>
    //           <h1 style={{color: 'white', textAlign: 'center'}}>Area of Cyclone: {area}</h1>
    //       </div>
    //       <div>
    //           <h1 style={{color: 'red', textAlign: 'center'}}>{data}</h1>
    //       </div>
            
    //         <FooterCard />

    //     </div>
    // );
}
export default App;