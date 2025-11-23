import useAsteroids from '../../hooks/useAsteroids'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import AsteroidItem from '../../components/AsteroidItem/AsteroidItem'


const Asteroids = () => {
  const { data, loading, error } = useAsteroids()

  if (loading) return <Loader/>
  if (error) return <ErrorMessage message={error.message}/>
  if (data) {
    return (
      <div>
        <h1>Near Earth Objects</h1>
        <br />

        {data.map(item => (
          <AsteroidItem
            key={item.id}
            name = {item.name}
            diameter = {item.estimated_diameter.meters.estimated_diameter_max}
            hazardous = {item.is_potentially_hazardous_asteroid}
            approachDate = {item.close_approach_data[0].close_approach_date_full}
            speed = {item.close_approach_data[0].relative_velocity.kilometers_per_hour}
          />
        ))}
      </div>
    
  )}

};

export default Asteroids;
