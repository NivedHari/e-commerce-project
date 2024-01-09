import React from "react";
import { Table, Container, Button } from "react-bootstrap";
import Footer from "../Layout/Footer";

const Home = () => {
  const tourData = [
    {
      date: "JUL 16",
      location: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
      tickets: "BUY TICKETS",
    },
    {
      date: "JUL 19",
      location: "TORONTO, ON",
      venue: "BUDWEISER STAGE",
      tickets: "BUY TICKETS",
    },
    {
      date: "JUL 22",
      location: "BRISTOW, VA",
      venue: "JIGGY LUBE LIVE",
      tickets: "BUY TICKETS",
    },
    {
      date: "JUL 29",
      location: "PHOENIX, AZ",
      venue: "AK-CHIN PAVILION",
      tickets: "BUY TICKETS",
    },
    {
      date: "AUG 2",
      location: "LAS VEGAS, NV",
      venue: "T-MOBILE ARENA",
      tickets: "BUY TICKETS",
    },
    {
      date: "AUG 7",
      location: "CONCORD, CA",
      venue: "CONCORD PAVILION",
      tickets: "BUY TICKETS",
    },
  ];

  return (
    <>
      <div className="bg-secondary  pb-5 text-center mt-5">
        <div className="display-1 text-white font-weight-bold">
          The Generics
        </div>
        <div className="p-3 text-white">
          <div className="border border-primary p-2 d-inline-block display-6">
            Get our Latest Album
          </div>
          <div>
            <button type="button" class="btn btn-primary rounded-circle mt-3">
              <i class="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
      <Container>
        <h1 className="text-center font-weight-bold mt-5 my-4">TOURS</h1>
        <Table hover>
          <tbody>
            {tourData.map((tour, index) => (
              <tr key={index}>
                <td>{tour.date}</td>
                <td>{tour.location}</td>
                <td>{tour.venue}</td>
                <td>
                  <Button>{tour.tickets}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <div className="bg-info text-white text-center py-4 mt-5"></div>
      <Footer />
    </>
  );
};

export default Home;
