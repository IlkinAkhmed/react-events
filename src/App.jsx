import { useState } from "react";
import "./App.css";

function App() {

  const [bigimg, setBigimg] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8JasYF9tuSwGowjPBgmO1H4vXFMKMbyufg&usqp=CAU"
  );

  const changeimg = (e) => {
    setBigimg(e.target.src);
  };




  const [bar, setBar] = useState("fa-bars")

  const [nav, setNav] = useState('')


  const openNav = (e) => {
    if (bar === 'fa-bars') {
      setBar("fa-xmark")
      setNav('active')
    }else{
      setBar('fa-bars')
      setNav('')
    }
  };



  return (
    <>
      <nav>
        <ul className="navUl">
          <li>react1</li>
          <li>react2</li>
          <li>react3</li>
          <li>react4</li>
          <li>react5</li>
        </ul>
        <i className={`fa-solid ${bar}`} onClick={(e) => openNav(e)}></i>
      </nav>

      <div className={`respNav ${nav}`} onClick={(e) => openNav(e)}>
        <ul className="respUl">
          <li>react1</li>
          <li>react2</li>
          <li>react3</li>
          <li>react4</li>
          <li>react5</li>
        </ul>
      </div>
      <div className="wrapper">
        <div className="big-img">
          <img src={bigimg} alt="" />
        </div>
        <div className="small-imgs">
          <img
            onClick={(e) => changeimg(e)}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4j0DdOtNjyxlZCViOCfdgE0o5Uhrvhfk7FOcNFx30Iu3RAPV3LKFYkAQh-fhKjPfl0U&usqp=CAU"
            alt=""
          />
          <img
            onClick={(e) => changeimg(e)}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF5Q2N6AL6SyK2sxeC3-sjRm4G9OkNAlwfArE1S2duwMt830f4_673YvqPQ-PYrNZD00&usqp=CAU"
            alt=""
          />
          <img
            onClick={(e) => changeimg(e)}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eiw4ysonxHEWPK5ga7uMqJfJPw1FJVrcJu5Z5o2STl_TSqKA40nM78r4Dg0mt1PutAw&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
