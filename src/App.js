import axios from "axios"
import { useState } from "react"
import Buttons from "./components/Buttons"
import DisplayExcuse from "./components/DisplayExcuse"

const App = () => {
  const [display, setdisplay] = useState('')
  const [button, setbutton] = useState('')
  const [bg, setbg] = useState('')
  const family = 'https://excuser.herokuapp.com/v1/excuse/family/'
  const office = 'https://excuser.herokuapp.com/v1/excuse/office/'
  const children = 'https://excuser.herokuapp.com/v1/excuse/children/'
  const college = 'https://excuser.herokuapp.com/v1/excuse/college/'
  const party = 'https://excuser.herokuapp.com/v1/excuse/party/'
  const getfamily = ()=>{
    axios.get(family).then((result)=>{
      setbg('bg-warning col-6 p-5 mx-auto border shadow-sm')
      setbutton('You click family Excuse')
      let content = result.data
      setdisplay(content[0].excuse)
    })
  }
  const getoffice = ()=>{
    axios.get(office).then((result)=>{
      setbg('bg-info col-6 p-5 mx-auto border shadow-sm')
      setbutton('You click office Excuse')
      let content = result.data
      setdisplay(content[0].excuse)
    })
  }
  const getchildren = ()=>{
    axios.get(children).then((result)=>{
      setbg('bg-success col-6 p-5 mx-auto border shadow-sm')
      setbutton('You click children Excuse')
      let content = result.data
      setdisplay(content[0].excuse)
    })
  }
  const getcollege = ()=>{
    axios.get(college).then((result)=>{
      setbg('bg-primary col-6 p-5 mx-auto border shadow-sm')
      setbutton('You click college Excuse')
      let content = result.data
      setdisplay(content[0].excuse)
    })
  }
  const getparty = ()=>{
    axios.get(party).then((result)=>{
      setbg('bg-secondary col-6 p-5 mx-auto border shadow-sm')
      setbutton('You click party Excuse')
      let content = result.data
      setdisplay(content[0].excuse)
    })
  }
  return (
    <>
      <Buttons
      family={getfamily}
      office={getoffice}
      children={getchildren}
      college={getcollege}
      party={getparty}/>
      <DisplayExcuse style={bg} content={display} button={button}/>
    </>
  )
}

export default App