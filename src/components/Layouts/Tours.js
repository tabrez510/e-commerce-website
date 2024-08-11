import { Button, Container, Table } from "react-bootstrap";

const tourList = [
  { date: "JUL 16", city: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL 18", city: "TORONTO, ON", venue: "BUDWEISER STAGE" },
  { date: "JUL 20", city: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
  { date: "JUL 22", city: "LAS VEGAS, NV", venue: "AK-CHIN PAVILION" },
  { date: "JUL 24", city: "PHOENIX, AZ", venue: "T-MOBILE ARENA" },
  { date: "JUL 24", city: "CONCORD, CA", venue: "CONCORD PAVILION" },
];
const Tours = () => {
  return (
    <Container className="mt-3">
      <h1 className="text-center">TOURS</h1>
      <Table responsive style={{margin:'3.2rem auto', maxWidth: '45rem'}}>
        {tourList.map((tour) => {
          return (
            <tr className="border-bottom border-black align-items-center">
              <td style={{whiteSpace: "nowrap", paddingLeft: '20px'}}>{tour.date}</td>
              <td style={{whiteSpace: "nowrap", paddingLeft: '20px'}}>{tour.city}</td>
              <td style={{whiteSpace: "nowrap", paddingLeft: '20px'}}>{tour.venue}</td>
              <td style={{whiteSpace: "nowrap", paddingLeft: '20px'}}>
                <Button variant="primary" className="mt-1 mb-1" size="sm">BUT TICKETS</Button>
              </td>
            </tr>
          );
        })}
      </Table>
    </Container>
  );
};

export default Tours;
