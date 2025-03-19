import countryFacts from "../api/countriesData.json";

export const About = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are the Interesting Facts
                <br />
                we're proud of
            </h2>

            <div className="gradient-cards">
                {countryFacts.map((countrys) => {
                    const { id, country, capital, population, famous_sports, interesting_fact, history } = countrys;

                    return (
                        <div className="card" key={id}>
                            <div className="container-card bg-green-box">
                                <p className="card-title">
                                    {country}
                                </p>

                                <p>
                                    <span className="card-description">Capital: </span>
                                    {capital}
                                </p>
                                <p>
                                    <span className="card-description">Population: </span>
                                    {population}
                                </p>
                                <p>
                                    <span className="card-description">famous_sports: </span>
                                    {famous_sports.join(', ')}
                                </p>
                                <p>
                                    <span className="card-description">interesting_fact: </span>
                                    {interesting_fact}
                                </p>
                                <p>
                                    <span className="card-description">history: </span>
                                    {history}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
