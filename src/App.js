import React ,{useState} from "react";
import "./style.css";


export default function App() {




   const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const [display, setDisplay] = useState(false)
  const [index, setIndex]=useState(null)

  const handler=(i)=>{
    setDisplay(!display)
    setIndex(i)

  }

  const handleMove = (slideNumber) => {
    let newSlideNumber;

    if (slideNumber === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setIndex(newSlideNumber)
  };
  return (
    <div style={{position:"relative"}}>
     { display&&<div><button onClick={()=>handleMove(index)}>-</button>
  
    <img src={photos[index].src} alt="" className="sliderImg" style={{width:500 , position:"absolute" ,top:0, buttom:0,zindex:1}}/><button>hello</button>
        
      </div>}
      
      {photos.map((item,i)=>(
    <div >   
    <img onClick={()=>handler(i)} src={item.src} alt="" style={{width:200}} />
    </div>
      ))}
    </div>
  );
}
