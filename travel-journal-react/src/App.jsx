import React from "react"
import './App.css'
import Navbar from "./components/Navbar"
import Trip from "./components/Trip"
import data from "./data"

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="cards-list">
        {data.map(trip => (
          <Trip 
            trip={trip}
            key={trip.id} 
          />
        ))}
      </section>
    </div>
  )
}