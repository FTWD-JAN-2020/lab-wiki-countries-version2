import React, { Component } from 'react'
// new imports
import { Link } from "react-router-dom";

export default class CountryDetails extends Component {
  render() {
    console.log(this.props)
    let cca3 = this.props.match.params.cca3;
    let countries = this.props.countries;
    let country = countries.find(eachCountry => eachCountry.cca3 === cca3);
    console.log(country)

    return (
      <div className="col-7">
        <h1>{ country.name.common }</h1>
        <table className="table">
          <thead>
          </thead>
          <tbody>
            {/* Row 1 for the capital */}
            <tr>
              <td>Capital</td>
              <td>{ country.capital[0] }</td>
            </tr>

            {/* Row 2 for the area */}
            <tr>
              <td>Area</td>
              <td>{country.area} km<sup>2</sup></td>
            </tr>

            {/* Row 3 for the border */}
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  { country.borders &&
                    country.borders.map(cca3 => {
                      return (
                        <li key={cca3}>
                          <Link to={"/countries/" + cca3}>
                            {
                              countries.find(country => country.cca3 === cca3)
                                .name.common
                            }
                          </Link>
                        </li>
                      );
                    })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
