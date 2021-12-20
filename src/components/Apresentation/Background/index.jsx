import React, { useState, useEffect } from 'react'
  
  function Background() {
    const imgs = ["src/img/coffe.jpg", "src/img/canabbis.jpg"]
    const [imgT, setImgT] = useState(0)
    const [l, setL] = useState("-50%")
    const [o, setO] = useState("0")

    useEffect(() => {
      setTimeout(() => {
        if(imgT === 0) {
          setO("50%")
          setImgT(1)
          setL("0")
          setTimeout(() => {
            setO("0")
          }, 8000)
        } else {
          setO("50%")
          setImgT(0)
          setL("-50%")
          setTimeout(() => {
            setO("0")
          }, 8000)
        }
      }, 13000);
    }, [imgT]);

    return (
      <div className="background" style={{ background: "#222831", width: "100%", height: "100%", overflow: "hidden"}}>
        <div
        style={{ 
          position: "relative", 
          minWidth: "150%", 
          minHeight: "100%", 
          overflow: "hidden",
          left: l,  
          transition: "39s"
        }}
        >
          <img
            src={imgs[imgT]} 
            style={{ 
              position: "relative", 
              minWidth: "100%", 
              minHeight: "100vh", 
              overflow: "hidden", 
              opacity: o, 
              transition: "all ease 5s"
            }}
          />
        </div>
      </div>
    )
  }

export default Background

    /*setTimeout(() => {
      const x = useMotionValue(0)
    }, 5000)*/
    /*const x = useMotionValue(0)
    const input = [-200, 0, 200]
    const output = [0, 1, 0]
    const opacity = useTransform(x, input, output)*/