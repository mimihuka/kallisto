import React from 'react'
import { useParams } from 'react-router-dom'
import './UniversityDetail.css'

const UniversityDetail: React.FC = () => {
  const { universityName } = useParams<{ universityName: string }>()
  const decodedName = universityName ? decodeURIComponent(universityName) : ''

  return (
    <div className="university-detail">
      <h1 className="university-title">{decodedName}</h1>
    </div>
  )
}

export default UniversityDetail
