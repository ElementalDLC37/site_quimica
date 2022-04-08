import React, { useState, useEffect } from 'react'
  
  function Background() {

    const imgs = ["https://images.pexels.com/photos/3742854/pexels-photo-3742854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/4058233/pexels-photo-4058233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]
    const [imgT, setImgT] = useState(0)
    const [l, setL] = useState("-50%")
    const [o, setO] = useState("0")
    const [t, setT] = useState(8000)
    const [tZao, setTZao] = useState(13000)
    const [tranL, setTranL] = useState("39s")
    const [tran, setTran] = useState("all ease 5s")

    console.log(window.onfocus)

    window.onfocus = () => {
      console.log("focus")
      console.log(window.onfocus)
      console.log(window.onblur)
    }

    window.onblur = () => {
      console.log("blur")
      console.log(window.onfocus)
      console.log(window.onblur)
    }

    useEffect(() => {
      setTimeout(() => {
        
        if(imgT === 0) {
          setImgT(1)
          setL("0")
          setO("50%")
          setTimeout(() => {
            setO("0")
          }, t)
        } else {
          setImgT(0)
          setL("-50%")
          setO("50%")
          setTimeout(() => {
            setO("0")
          }, t)
        }
      }, tZao);
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
          transition: tranL
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
              transition: tran
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