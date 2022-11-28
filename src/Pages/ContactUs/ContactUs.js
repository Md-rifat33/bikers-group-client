import React from 'react'
import { FaUser, FaPhone } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
  return (
    <div className="w-full mt-9 mb-12">
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/905450726/vector/motorbike-illustrations-logos-for-bike-club.jpg?s=612x612&w=0&k=20&c=KkNqnUqhOMq06JBseMdOkYcHlSQQ9QS9FacUMgF7jvw=")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-5xl font-bold">Biker's Group</h1>
            <p className="mb-5">
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
      <div className="w-full mx-auto mt-10 rounded-lg">
        <h2 className="text-5xl font-bold text-center">Contact With Us</h2>
        <div className="hero mt-6">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src="" alt="" className="rounded-lg ml-6" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-200">
              <div className="card-body">
                <div className="form-control flex">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <FaUser className="absolute top-24 ml-2" />
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered p-8"
                  />
                </div>
                <div className="form-control flex">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute bottom-96 top-52 ml-2"
                  />
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered p-8 mt-1"
                  />
                </div>

                <div className="form-control flex">
                  <label className="label">
                    <span className="label-text">Number</span>
                  </label>
                  <FaPhone className="absolute top-80 ml-2" />
                  <input
                    type="number"
                    placeholder="number"
                    className="input input-bordered p-8"
                  />
                </div>
                <div className="text-center flex">
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="absolute bottom-44 ml-2"
                  />
                  <textarea
                    className="textarea textarea-primary  p-8 w-full mt-3"
                    placeholder="message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
