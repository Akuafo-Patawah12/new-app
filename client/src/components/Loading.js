import React ,{Component} from 'react'

class Loading extends Component {
  render(){
    return(
    <div>
    <div className="Loading  relative mt-[100px] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center border-4 border-stone-800 mx-auto ">
      <div className=" relative w-[20px] h-[20px] rounded-[50%] border-blue-500 border-4">
        <span className="absolute bg-white w-2 translate-x-[-50%] translate-y-[-50%] inset-y-[-2px]"></span>
      </div>
      <span className="absolute w-[10px] h-[30px] left-[-4px] bg-white"></span>
      <span className="absolute w-[10px] h-[30px] right-[-4px] bg-white"></span>
    </div>
    <h3 className="w-[100px] mt-2 mx-auto grid place-items-center">Loading...</h3>
    </div>
    )
  }
}

export default Loading;