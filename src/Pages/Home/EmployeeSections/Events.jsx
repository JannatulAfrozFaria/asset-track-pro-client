import { useEffect, useState } from "react";
import bg from '../../../../src/assets/About/purple-maroon.jpg'
import Title from "../../../Components/Title";


const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      // Fetch events from JSON file
      fetch('/events.json')
        .then(response => response.json())
        .then(data => setEvents(data))
        .catch(error => console.error('Error fetching events:', error));
    }, []);
    return (
        <div className="w-5/6 mx-auto">
            <Title heading={'upcoming Events'} subHeading={'Here are the upcoming events by various organizers'} ></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map(event=>
                    <div key={event.id} className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={bg} alt="Events" /></figure>
                    <div className="card-body">
                      <h2 className="card-title text-yellow-400">{event.event_name}</h2>
                      <div className="font-medium">
                        <p> <span className="text-purple-200 font-semibold">Organizer:</span> {event.organizer_name} </p>
                        <p><span className="text-purple-200 font-semibold">Date:</span> {event.event_date} </p>
                        <p className="mt-3"> <span className="text-purple-200 font-semibold">Venue:</span><br />
                            {event.event_venue} 
                        </p>
                        <p className="mt-3"><span className="text-purple-200 font-bold" >Purpose Of Event:</span>
                             <br />
                            {event.event_purpose} 
                        </p>
                        <p className="text-purple-200 font-semibold">Entry Ticket: 
                            <span className="text-yellow-400"> AED {event.entry_ticket_price}.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
            </div>
        </div>
    );
};

export default Events;