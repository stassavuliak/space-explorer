import ApodCard from '../../components/ApodCard/ApodCard'
import  useApod  from '../../hooks/useApod'
import { mockApod } from '../../api/mockApod'
import Loader from '../../components/Loader/Loader'

const Home = () => {
  const { apod, loading, error } = useApod()

  if (loading) {
    return <Loader/>
  }

  if (error) {
    return <h2>Error! Something went wrong</h2>
  }

  return <ApodCard apod={mockApod} />


}

export default Home