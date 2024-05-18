import React,{useState,createContext} from "react"
export const DataContext= createContext();
 export const DataProvider =(props) =>{
      
const [tech,setTech]=useState([
    {
        id:'1',
        name:'Database',
        image:'../images/Database.jpg',
        link:'/Courses/Database'
    },
    {
        id:'2',
        name:'Python',
        image:'../images/PHP.jpg ',
        link:'/Courses/ProgrammingI'
    },
    {
        id:'3',
        name:'Bus Finance',
        image:'../images/blockchain.jpg',
        link:'/Courses/BusinessFinance'
    },
    {
        id:'4',
        name:'Business Stats',
        image:'../images/ML.jpg',
        link:'/Courses/BusinessStats'
    },
    
])
const[PR,setPR]= useState([
 {   
    id:'7',
    name:'ML',
    image:'../images/ML.jpg',
    link:'/'
},
{
    id:'8',
    name:'ML',
    image:'../images/ML.jpg',
    link:'/'
},
{
    id:'9',
    name:'ML',
    image:'../images/ML.jpg',
    link:'/'
},
{
    id:'10',
    name:'ML',
    image:'../images/ML.jpg',
    link:'/'
},
{
    id:'11',
    name:'ML',
    image:'../images/ML.jpg',
    link:'/'
},
{
    id:'12',
    name:'ML',
    image:'../images/ML.jpg',
    link:'/'
}
])
const[acc,setAcc]= useState([
    {
        id:'13',
        name:'ML',
        image:'../images/ML.jpg',
        link:'/'
    },
    {
        id:'14',
        name:'ML',
        image:'../images/ML.jpg',
        link:'/'
    },
    {
        id:'15',
        name:'ML',
        image:'./images/ML.jpg',
        link:'/'
    },
    {
        id:'16',
        name:'ML',
        image:'../images/ML.jpg',
        link:'/'
    },
    {
        id:'17',
        name:'Blockchain',
        image:'../images/blockchain.jpg',
        link:'/'
    },
    {
        id:'18',
        name:'Blockchain',
        image:'../images/blockchain.jpg',
        link:'/'
    },
])
const[economics,setEconomics] =useState([
    {
        id:'19',
        name:'Blockchain',
        image:'../images/blockchain.jpg',
        link:'/'
    },
    {
        id:'20',
        name:'Blockchain',
        image:'../images/blockchain.jpg',
        link:'/'
    },
    {
        id:'21',
        name:'Blockchain',
        image:'../images/blockchain.jpg',
        link:'/'
    },
    {
        id:'23',
        name:'Blockchain',
        image:'../images/blockchain.jpg',
        link:'/'
    },
    {
        id:'24',
        name:'Blockchain',
        image:'./images/blockchain.jpg',
        link:'/'
    },
])
const[busAdmin,setBusAdmin]= useState([
    {
        id:'25',
        name:'Blockchain',
        image:'../images/blockchain.jpg',
        link:'/'
    },
    {
        id:'26',
        name:'Blockchain',
        image:'../images/blockchain.jpg',
        link:'/'
    },
    {
        id:'27',
        name:'Blockchain',
        image:'./images/blockchain.jpg',
        link:'/'
    },
    
    
   
])
return(
       <DataContext.Provider value={[tech,setTech,PR,setPR,acc,setAcc,economics,setEconomics,busAdmin,setBusAdmin]}>
            {props.children}
       </DataContext.Provider>
)
}

  

