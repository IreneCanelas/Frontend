import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Trip({trip}) {
    console.log(trip)
    return (
        <div className="trip">
            <div>
                <img src={trip.image} className="trip--img"></img>
            </div>

            <div className="trip--card">
                <div className="trip--header">
                    <FontAwesomeIcon icon={faLocationDot} className="trip--location-icon" />
                    <h3 className="trip--country">{trip.country}</h3>
                    <a className="trip--link" href={trip.maps} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="trip--location">{trip.location}</h1>
                <h3 className="trip--date"> {trip.date} </h3>
                <p className="trip--description"> {trip.description} </p>
            </div>
        </div>
    )
}