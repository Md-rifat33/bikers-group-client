import React from 'react'
import Reviews from './Reviews'

const Aboutus = () => {
  return (
    <section>
      <div
        className="hero min-h-[60vh] bg-cover bg-no-repeat mt-5 mb-7"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/905450726/vector/motorbike-illustrations-logos-for-bike-club.jpg?s=612x612&w=0&k=20&c=KkNqnUqhOMq06JBseMdOkYcHlSQQ9QS9FacUMgF7jvw=")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold">Biker's Group</h1>
            <p className="mb-5 text-xl">
              A motorcycle, often called a motorbike, bike, cycle, or (if
              three-wheeled) trike, is a two- or three-wheeled motor vehicle.
              Motorcycle design varies greatly to suit a range of different
              purposes: long-distance travel, commuting, cruising, sport
              (including racing), and off-road riding.Male bikers (n = 22)
              appeared as tough, aggressive, dogmatic, sensation-seeking,
              impulsive, risk-taking, irresponsible and lacking in self-esteem
              and ambitiousness. They were also significantly anxious and
              depressed compared with male norms.
            </p>
          </div>
        </div>
      </div>
      <Reviews />
    </section>
  )
}

export default Aboutus
