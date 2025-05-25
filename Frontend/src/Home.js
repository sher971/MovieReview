import Hero from '../hero/Hero';

const Home =({movies}) => {
    return (
       <Hero movies = {movies}/>
       
    )
    console.log("Movies passed to Hero:", movies);

}

export default Home