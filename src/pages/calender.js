// import { calendar } from "@/auth/Google";

// function Calendar({ events }) {
//   return (
//     <div>
//       {events.map((event) => (
//         <div key={event.id}>
//           <h3>{event.summary}</h3>
//           <p>{event.description}</p>
//           <p>Start Time: {event.start.dateTime}</p>
//           <p>End Time: {event.end.dateTime}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const events = await calendar.events.list({
//     calendarId: "primary",
//     timeMin: new Date().toISOString(),
//     maxResults: 10,
//     singleEvents: true,
//     orderBy: "startTime",
//   });

//   return { props: { events } };
// }

// export default Calendar;
