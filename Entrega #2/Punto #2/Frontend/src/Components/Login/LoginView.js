import React, { useState,Component } from 'react'
import './Styles.css'

import Alert from '../Alerts/Alert'
import { simpleRequest, simpleRequestWithFiles } from '../../Functions/Post'
import {
  SENDAUDIO,
  ERROR_MESSAGE,
  ALERT_TIMEOUT,
} from '../../Functions/Constants'

class LoginView extends Component {
  constructor() {
    super()
    this.myRef = React.createRef()
    this.state = {
      cont: 0,
      texto: '',
      type: '',
      label: '',
      loading: false,
      score: '',
      duration: '',
      files: [],
      alert: '',
      timeout: '',
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout)
  }

  // Functions to handle states
  handleChange = (event) => {
    let attribute = event.target.id
    let value = event.target.value

    if (attribute == 'files') {
      return this.setState({[attribute]: event.target.files[0]});
    } 
    if (attribute == 'duration') {
      return this.state.setState({[attribute]: event.target.duration})
    }
    if (value == 'score') {
      return this.state.setState({[value]: event.target.score})
    }
    if (attribute == 'type') {
      return this.state.setState({[attribute]: event.target.type})
    }
    if (attribute == 'label') {
      return this.state.setState({[attribute]: event.target.label})
    }
    return this.setState({ [attribute]: value })
  }

  // Functions to handle alerts
  close = () => {
    return this.setState({ alert: '' })
  }

  buildAlert = (type, text) => {
    clearTimeout(this.state.timeout)

    this.setState({
      timeout: setTimeout(() => this.setState({ alert: '' }), ALERT_TIMEOUT),
    })

    return this.setState({
      alert: <Alert type={type} text={text} close={this.close} />,
    })
  }

  // Functions related to requests
  responseHandler = (response, body) => {
    this.setState({...this.state, loading:false})
    if (response == 'success') {
        this.setState({texto: body.data.text_process, duration:body.data.duration, score:body.data.clasification[0].score, label:body.data.clasification[0].label})
        console.log(body.data)
       return this.buildAlert('success', 'Audio procesado')
    } 

    return this.buildAlert('error', ERROR_MESSAGE)
  }

  clearInputs = () => {
    this.myRef.current.value = "";
    return this.setState({
      texto: '',
      type: '',
      label: '',
      loading: false,
      score: '',
      duration: '',
      files: [],
    })
  }
  

  login = () => {
    this.setState({...this.state, loading:true})
    this.close()

    let body = {
      files: this.state.files,
    }

    return simpleRequestWithFiles(SENDAUDIO, 'POST', body, this.responseHandler)
     }


  render() {
    return (
      <div className='lg-container'>
        {this.state.alert}
        <div className='lg-card'>
          <div className='lg-content'>
            {/* HEADER */}
            <div className='lg-header'>
              <span className='lg-title'>
                Aplicación de transcripción de texto
              </span>
            </div>
            {/* FORM */}
            <div className='lg-form'>
              <div
                className='global-form-input-group'
                style={{ marginTop: '5px' }}
              >
              </div>
              <div className='global-form-group'>
                  <span className='global-form-label'>Añadir archivo de audio</span>
                </div>
                <div>
                <input id='files' type='file'  ref={this.myRef} onChange={this.handleChange}></input>
                </div><br></br>
              <button  className='lg-button' onClick={this.login} disabled={this.state.loading}> {this.state.loading?'Cargando..':'Procesar'} </button><br></br>

              <div className='global-form-group'>
                <span className='global-form-label'>Duración del audio:</span>
                <input id='duration' type='text' className='global-form-input' value={this.state.duration} onChange={this.handleChange} readOnly></input>
              </div>
              <div className='global-form-group'>
                <span className='global-form-label'>Score:</span>
                <input id='score' type='text' className='global-form-input' value={this.state.score} onChange={this.handleChange} readOnly></input>
              </div>
              <div className='global-form-group'>
                <span className='global-form-label'>Clasificación:</span>
                <input id='label' type='text' className='global-form-input' value={this.state.label} onChange={this.handleChange} readOnly></input>
              </div>
              <textarea value={this.state.texto} className='text-area' rows={10} cols={50} readOnly>
              </textarea><br></br>
              <button  className='lg-button-clear' onClick={this.clearInputs}>Limpiar</button>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginView
