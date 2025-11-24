import useRovers from "../../hooks/useRovers";
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import RoverCard from "../../components/RoverCard/RoverCard";
import './Rover.scss'

const Rover = () => {
  const { data, loading, error } = useRovers()

  if (loading) return <Loader/>
  if (error) return <ErrorMessage message={error.message}/>
  if (data) {
    return (
      <div className="rover-page">
        <h1>Curiosity — Latest Photos</h1>

        <div className="rover-list">
          {data.map(item => (
            <RoverCard
              key={item.id}
              img={item.img_src}
              rover={item.rover.name}
              camera={item.camera.full_name}
              earthDate={item.earth_date}
              sol={item.sol}
            />
          ))}
        </div>
       
      </div>
    
  )}
};

export default Rover;
