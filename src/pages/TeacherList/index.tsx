import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg'
import logoImage from '../../assets/images/logo.svg'

import './styles.css'

const TeacherList: React.FC = () => {
  return (
    <div className="container" id="page-teacher-list">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logoImage} alt="Proffy"/>
        </div>
        <div className="header-content">
          <strong>Estes são os proffys disponíveis.</strong>
        </div>
      </header>
    </div>
  )
}

export default TeacherList;