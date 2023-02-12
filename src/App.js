import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
function App() {

const list2 = [
  {
    title: 'Dhanashree thillana',
    rating: '4/5'
  },
  {
    title: 'Hindola thillana',
    rating: '4.5/5'
  },
]
const [display,setDisplay] = React.useState([])

const list= {
 classical: [
  {
    title: 'Dhanashree thillana',
    rating: '4/5'
  },
  {
    title: 'Hindola thillana',
    rating: '4.5/5'
  }
 ],
 motivational: [
  {
    title: 'Try by Mandey Harvey',
    rating: '5/5'
  },
  {
    title: "It's Okay by Nightbirde",
    rating: '4.5/5'
  }
 ],
anime: [
  {
    title: 'Naruto',
    rating: '4/5'
  },
  {
    title: 'Black Clover',
    rating: '4/5'
  }
 ],
}

const handleButtonContent=(type)=>{
  // console.log( list[type])
  
  setDisplay(list[type])
  console.log(display)

}
  return (
    <div className='auto'>
      <div>
      <h1>Good music</h1>
      <p>Check out my music references</p>
      <div className='center'>
        <button className='p-2' onClick={()=>handleButtonContent('classical')}>Classical Music</button>
        <button className='p-2' onClick={()=>handleButtonContent('motivational')}>Motivational Music</button>
        <button className='p-2' onClick={()=>handleButtonContent('anime')}>Anime Music</button>
      </div>
      <hr/>
      <div className='w60'>
      
     {display&& display.map((ele,index)=>(
      <div className='border display' key={index}>
          {console.log(ele.title)}
          <div className='bold'>{ele.title}</div>
          <div className='fs-10 p1'>{ele.rating}</div>
        </div>
     ))}
          
         
          
        
        
      </div>
      </div>
      
    </div>
  );
}

export default App;
