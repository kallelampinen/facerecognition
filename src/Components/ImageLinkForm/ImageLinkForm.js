import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {

    return(

        <div>
              <p className='f3'>

                    {'this magic brain will detect faces in your picture, give it a try'}
                </p> 

                <div className='center'>
                        <div className='form center pa4 br3 shadow-3'>
                            <input className='f4 pa2 w-70 center' placeholder='Paste URL' type='text'/>
                            <button className='w-30 grow f4 link ph3 pv2 dib white bg-orange'>Detect</button>
                        </div>
                    </div>
                
        </div>    
    );
}


export default ImageLinkForm;