import ApodCard from '../../components/ApodCard/ApodCard'
import  useApod  from '../../hooks/useApod'
import { mockApod } from '../../api/mockApod'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const Home = () => {
  const { apod, loading, error } = useApod()

  if (loading) return <Loader/>

  if (error) return <ErrorMessage message={error.message} />

  return <ApodCard apod={mockApod} />


}

export default Home