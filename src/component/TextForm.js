import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppecase!', 'success');
  }

  const handleLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase!', 'success');
  }

  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed!', 'success');
  }

  const handleCopyText = () => {
  navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard!', 'success');
  }

  const handleClearText = () => {
    const newText = "";
    setText(newText);
    props.showAlert('text cleared!', 'success');
  }

  return (
    <div>
      <div className='container'  style={{ color: props.mode === 'light'? 'black': 'white' }}>
        <div className="mb-3">
          <h3>Try Textutils - Word counter, Charater counter, Remove Extra spaces</h3>
          <textarea className="form-control" style={{ backgroundColor: props.mode === 'light'? 'white': '#004953',color: props.mode === 'light'? 'black': 'white'}} id="noteText" rows="10" value={text} onChange={handleOnChange}></textarea>
          <div className="my-3">
            <button disabled = {text.length === 0}className="btn btn-primary my-1 mx-1 " onClick={handleUpperCase}>Convert to uppercase</button>
            <button disabled = {text.length === 0}className="btn btn-primary my-1 mx-1 " onClick={handleLowerCase}>Convert to lowercase</button>
            <button disabled = {text.length === 0}className="btn btn-primary my-1 mx-1 " onClick={handleExtraSpace}>Remove extra spaces</button>
            <button disabled = {text.length === 0}className="btn btn-primary my-1 mx-1 " onClick={handleCopyText}>Copy text</button>
            <button disabled = {text.length === 0}className="btn btn-primary my-1 mx-1 " onClick={handleClearText} >Clear text</button>
          </div>
          <div className="container my-3
          " style={{ color: props.mode === 'light'? 'black': 'white' }}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length } Words and {text.length} charaters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text ? text : 'Nothing to preview'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
