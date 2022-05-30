import styles from './WeatherSummary.module.scss';

const WeatherSummary = ({ description, city, temp, icon }) => {

  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={description}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{city}</h2>
        <p>
          <strong>Temp:</strong> {temp}
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;