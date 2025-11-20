import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import universitiesData from '../../universities.json'
import './SearchBox.css'

interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const navigate = useNavigate()

//blur search
  const fuzzySearch = (text: string, query: string): boolean => {
    if (!query) return true
    const lowerText = text.toLowerCase()
    const lowerQuery = query.toLowerCase()
    return lowerText.includes(lowerQuery)
  }

//optimize results
  const filteredUniversities = useMemo(() => {
    return universitiesData.filter((university: string) =>
      fuzzySearch(university, searchTerm)
    )
  }, [searchTerm])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleUniversityClick = (university: string) => {
    const encodedName = encodeURIComponent(university)
    navigate(`/university/${encodedName}`)
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search universities..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <div className="results-container">
          {filteredUniversities.length > 0 ? (
            <ul className="results-list">
              {filteredUniversities.map((university: string, index: number) => (
                <li
                  key={index}
                  className="result-item"
                  onClick={() => handleUniversityClick(university)}
                >
                  {university}
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-results">No universities found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBox
