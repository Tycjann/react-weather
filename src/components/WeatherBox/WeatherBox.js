import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';

const handleSubmit = ({city}) => {
  console.log('get city', city);
};

const WeatherBox = props => {
  return (
    <section>
      <PickCity action={handleSubmit} />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;