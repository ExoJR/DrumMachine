import "./drumMachine.scss"
function DrumMachine() {


    return (
      <div id='drum-machine'>
        <div id='drum-bank'>
          <div id='q' className='drum-pad'>Q<audio id='Q' className='clip' src=""></audio></div>
          <div id='w' className='drum-pad'>W<audio id='W' className='clip' src=""></audio></div>
          <div id='e' className='drum-pad'>E<audio id='E' className='clip' src=""></audio></div>
          <div id='a' className='drum-pad'>A<audio id='A' className='clip' src=""></audio></div>
          <div id='s' className='drum-pad'>S<audio id='S' className='clip' src=""></audio></div>
          <div id='d' className='drum-pad'>D<audio id='D' className='clip' src=""></audio></div>
          <div id='z' className='drum-pad'>Z<audio id='Z' className='clip' src=""></audio></div>
          <div id='x' className='drum-pad'>X<audio id='X' className='clip' src=""></audio></div>
          <div id='c' className='drum-pad'>C<audio id='C' className='clip' src=""></audio></div>
        </div>
        <div id="drum-control">
        <div className='logo'></div>
        <div id='display'>
          <p id='display-text'></p>
        </div>
        <div id='volume'></div>
        <div className='buttons'>
          <div className='Power'></div>
          <div className='Bank'></div>
        </div>
        </div>
      </div>
    )
  }
  
  export default DrumMachine