import React, {useState} from 'react';
import axios from 'axios';
import {Container,Row,Col,Card,Button,Form,FormControl,Modal} from 'react-bootstrap'


function App() {
  const [query ,setQuery]=useState('');
  const [movies,setMovies]=useState([]);
  const [selectedMovie,setSelectedMovie]=useState(null);
  const [error,setError]=useState(null);
  const [showModal,setShowModal]=useState(false);


  const apikey=`291171f1`
  
  const searchMovies=async()=>{
    try{
      const response=await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${apikey}`)
      if(response.data.Response === "True") {
        setMovies(response.data.Search || [])
        setSelectedMovie(null) // Clear selected movie when searching
      } else {
        setError(response.data.Error)
        setShowModal(true)
      }
    }
    catch(error){
      setError(error.message);
      setShowModal(true)
    }
  }

  const getMoviesDetails=async(id)=>{
    try{
      const response=await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`)
      if(response.data.Response === "True") {
        setSelectedMovie(response.data)
      } else {
        setError(response.data.Error)
        setShowModal(true)
      }
    }
    catch(error){
      setError(error.message);
      setShowModal(true)
    }
  }
  
  const handleClose=()=>{
    setShowModal(false)
    setError(null)
  }
  
  return (
    <>
    {apikey==='' && <h1>please visit to this website and create your api key and paste in this app.js file
      <a href='https://www.omdbapi.com/apikey.aspx' target='_blank' rel='noreferrer'> Click</a></h1>}
     {apikey!=='' &&
       <Container>
  <h1 className='my-4'>Movies Search App</h1>
  
  <Form className='mb-4'>
    <FormControl 
      type='text' 
      placeholder='Search for Movies' 
      value={query} 
      onChange={(e)=>setQuery(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && searchMovies()}
      className='mr-sm-2 mb-2'
    />
    <Button variant='primary' className='mt-2' onClick={searchMovies}>Search</Button>
  </Form>
  
  <hr/>
  
  {selectedMovie && (
    <Row>
      <Col>
        <Card className='mt-4 mb-4'>
          <Card.Img variant='top' style={{height:'400px', objectFit:'contain'}} src={selectedMovie.Poster}/>
          <Card.Body>
            <Card.Title>{selectedMovie.Title}</Card.Title>
            <Card.Text><strong>Year:</strong> {selectedMovie.Year}</Card.Text>
            <Card.Text><strong>Rated:</strong> {selectedMovie.Rated}</Card.Text>
            <Card.Text><strong>Runtime:</strong> {selectedMovie.Runtime}</Card.Text>
            <Card.Text><strong>Genre:</strong> {selectedMovie.Genre}</Card.Text>
            <Card.Text><strong>Plot:</strong> {selectedMovie.Plot}</Card.Text>
            <Card.Text><strong>Director:</strong> {selectedMovie.Director}</Card.Text>
            <Card.Text><strong>Cast:</strong> {selectedMovie.Actors}</Card.Text>
            <Card.Text><strong>IMDb Rating:</strong> {selectedMovie.imdbRating}</Card.Text>
            <Button variant='secondary' onClick={() => setSelectedMovie(null)}>Back to Results</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )}
  
  <hr/>
  
  <Row>
    {movies.map(movie=>(
      <Col key={movie.imdbID} sm={12} md={6} lg={4} className='mb-4'>
        <Card onClick={()=>getMoviesDetails(movie.imdbID)} style={{cursor:'pointer'}}>
          <Card.Img variant='top' style={{width:'100%',height:'300px', objectFit:'cover'}} src={movie.Poster}/>
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text><strong>Year:</strong> {movie.Year}</Card.Text>
            <Card.Text><strong>Type:</strong> {movie.Type}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>

  <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Error</Modal.Title>
    </Modal.Header>
    <Modal.Body>{error}</Modal.Body>
    <Modal.Footer><Button variant='secondary' onClick={handleClose}>Close</Button></Modal.Footer>
  </Modal>
   </Container>
     }
   </>
  )
}

export default App

// import React,{useState} from 'react'
// import axios from 'axios'
// import { Container,Row,Col,Form,Button,Card,FormControl,Modal } from 'react-bootstrap'

// function MyApp() {
//   const [movies, setMovies]=useState([])
//   const [query,setquery]=useState('')
//   const [selectedMovie,setSelectedMovie]=useState(null)
//   const [showModal,setShowModal]=useState(false)
//   const [error,setError]=useState(null)

// const apikey=`291171f1`

//   const searchMovies=async()=>{
//     try{
//     const response=await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${apikey}`)
//     if(response.data.Response==="True"){
//       setMovies(response.data.Search || [])
//       setSelectedMovie(null)
//     }  else{
//       setError(response.data.Error)
//       setShowModal(true)
//     }    

//     }
//     catch(error){
//       setError(error.message)
//       setShowModal(true)
//     }
//   }

//   const getMoviesDetails=async(id)=>{
//     try{
//          const response=await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`)
//          if(response.data.Response==="True"){
//           setSelectedMovie(response.data)
//          }else {
//           setError(response.data.Error)
//           showModal(true)
//          }
//     }catch(error){
//      setError(error.message)
//      setShowModal(true)

//     }
//   }

//     const handleClose=()=>{
//         setError(null)
//         setShowModal(false)
//     }
  

//   return (
//    <>
//    {apikey===''&& <h1>Please visit to this website and create your APIKEY amd past in thiis app.js file <a href='https://www.omdbapi.com/apikey.aspx' target='_blank'>Click</a></h1>}
//    {apikey!==''&&
//     <Container>
//     <h1 className='my-4'>Movie Search</h1>
//     <Form className='mb-4'>
//       <FormControl type='text' placeholder='Enter Movie Name' onChange={(e)=>setquery(e.target.value)} value={query} className='mr-sm-2 mb-2'>

//       </FormControl>
//       <Button variant='primary' onClick={searchMovies} >Search</Button>
//     </Form>

//     <hr/>

//     {selectedMovie && (
//       <Row>
//         <Col>
//         <Card className='mt-4 mb-4'>
//           <Card.Img variant='top' style={{height:"400px", objectFit:"contain"}} src={selectedMovie.Poster}></Card.Img>
//           <Card.Body>
//             <Card.Title>{selectedMovie.Title}</Card.Title>
//             <Card.Text><strong>Year:</strong>{selectedMovie.Year}</Card.Text>
//             <Card.Text><strong>Rated:</strong>{selectedMovie.Rated}</Card.Text>
//             <Card.Text><strong>Runtime:</strong>{selectedMovie.Runtime}</Card.Text>
//             <Card.Text><strong>Genre:</strong>{selectedMovie.Genre}</Card.Text>
//             <Card.Text><strong>Plot:</strong>{selectedMovie.Plot}</Card.Text>
//             <Card.Text><strong>Director:</strong>{selectedMovie.Director}</Card.Text>
//             <Card.Text><strong>Cast:</strong>{selectedMovie.Actors}</Card.Text>
//             <Card.Text><strong>ImdbID:</strong>{selectedMovie.ImdbRating}</Card.Text>
//             <Button variant='secoundary' onClick={()=>{setSelectedMovie(null)}}>Back to Result</Button>
//           </Card.Body>
//         </Card>
//         </Col>
//       </Row>
//     )}
//     <hr/>

//     <Row>
//       {movies.map(movie=>(
//         <Col key={movie.imdbID} sm={12} md={6} lg={4} className='mb-4' >
//           <Card onClick={()=>{getMoviesDetails(movie.imdbID)}} style={{cursor:"pointer"}}>
//             <Card.Img variant='top' style={{height:'100%', width:'300px',objectFit:'cover'}} src={movie.Poster}  ></Card.Img>
//             <Card.Body>
//               <Card.Title>{movie.Title}</Card.Title>
//               <Card.Text><strong>Year:</strong>{movie.Year}</Card.Text>
//               <Card.Text><strong>Type:</strong>{movie.Type}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//         <Modal show={showModal} onHide={handleClose}>
//           <Modal.Header >
//             <Modal.Title>Error</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>{error}</Modal.Body>
//           <Modal.Footer><Button variant='secondary ' onClick={handleClose}>Close</Button></Modal.Footer>
//         </Modal>

//    </Container> }
   
   
//    </>
//   )
// }

// export default MyApp