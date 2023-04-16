import {useRef, useState, useEffect} from 'react'
import './App.css';
import { uploadFiles } from './services/Api';

function App() {
  const logo = 'https://i.pinimg.com/originals/16/46/24//1646243661201a0892cc4b1a64fcbacf.jpg';

  const fileInputRef = useRef();
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const uploadFile = ()=>{
    fileInputRef.current.click();
  }

  useEffect(()=>{
    const getImage = async ()=>{
      if(file){
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        let response =await uploadFiles(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  return (
    <div className="App">
        <img src={logo} alt="banner" />
      <div className='wrapper'>
      <h1>Simple File Sharing</h1>
      <p>Upload & Share the download link</p>
      <button onClick={uploadFile}>Upload your file here</button>
      <input type="file" 
      ref={fileInputRef}
      onChange = {(e)=>{setFile(e.target.files[0])}} 
      style={{display:'none'}}/>

      <a href={result} target='_blank'> {result}</a>
      </div>
    </div>
  );
}

export default App;
