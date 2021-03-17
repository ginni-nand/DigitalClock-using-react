import React , {useState} from 'react';

const App=()=>
{
  let time=new Date().toLocaleTimeString();
const [ctime,setctime]=useState(time);
const Updatetime=()=>
{
  time=new Date().toLocaleTimeString();
  setctime(time);

}
setInterval(Updatetime,1000);
  return(
    <>
    <h1>{time}</h1>
   
    </>
  );
};

export default App;
