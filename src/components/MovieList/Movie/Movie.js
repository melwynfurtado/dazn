import React from 'react'
import PropTypes from 'prop-types'
import './Movie.scss'

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieCardOpen: false,
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(e) {
    this.setState({ movieCardOpen: true })
  }

  closeModal(e) {
    e.stopPropagation()
    this.setState({ movieCardOpen: false })
  }

  render() {
    const { movie } = this.props
    const { movieCardOpen } = this.state

    return (
      <li 
        key={movie.id} 
        className="movie"
        onClick={this.openModal}
      >
        { movie.title }
        { 
          movieCardOpen && 
          <div id="myModal" className="modal">
      
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <h3>{ movie.title }</h3>
              <p className="clearfix">
                <img 
                  className="poster" 
                  src={ `https://image.tmdb.org/t/p/w200/${movie.poster_path}` } 
                  alt={movie.title} 
                />
                { movie.overview }
              </p>
            </div>
          
          </div>            
        }
      </li>
    )
  }
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
  })
}

export default Movie