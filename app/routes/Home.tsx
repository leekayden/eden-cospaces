import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  TextField,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Api, GitHub } from "@mui/icons-material";

interface Property {
  _id: string;
  propertyName: string;
  address: string;
  rent: string;
  bedrooms: string;
  bathrooms: string;
}

const Home: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([
    {
      _id: "1",
      propertyName: "House 1",
      address: "123 Main St, Anytown USA",
      rent: "$1000/month",
      bedrooms: "3",
      bathrooms: "2",
    },
    {
      _id: "2",
      propertyName: "Apartment 2",
      address: "456 Park Ave, Anytown USA",
      rent: "$800/month",
      bedrooms: "2",
      bathrooms: "1",
    },
    {
      _id: "3",
      propertyName: "Condo 3",
      address: "789 Elm St, Anytown USA",
      rent: "$1200/month",
      bedrooms: "4",
      bathrooms: "2.5",
    },
  ]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch properties from your backend here
    // Example:
    // fetch('/api/properties')
    //   .then(res => res.json())
    //   .then(data => setProperties(data))
    // .catch(err => console.log(err))
  }, []);

  const filteredProperties = properties.filter((property) => {
    return property.propertyName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Container maxWidth="sm" style={{ paddingTop: "3vh" }}>
        <Typography variant="h1" align="center" style={{ marginBottom: "2px" }}>
          Welcome to {APP_NAME}!
        </Typography>
        <Typography variant="h3" align="center" style={{ marginBottom: "4px" }}>
          The future of living...
        </Typography>
        <Box display="flex" justifyContent="center" style={{ gridGap: "1rem" }}>
          <Button
            variant="outlined"
            size="large"
            href={`/api`}
            startIcon={<Api />}
            children="Explore More Properties"
          />
          <Button
            variant="outlined"
            size="large"
            href="https://github.com/kriasoft/react-starter-kit"
            startIcon={<GitHub />}
            children="View on GitHub"
          />
        </Box>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="search"
              label="Search Properties"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={3}>
          {filteredProperties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property._id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {property.propertyName}
                  </Typography>
                  <Typography color="textSecondary">
                    {property.address}
                  </Typography>
                  <br />
                  <Typography variant="body2" component="p">
                    Rent: {property.rent}
                    <br />
                    Bedrooms: {property.bedrooms}
                    <br />
                    Bathrooms: {property.bathrooms}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={Link}
                    to={`/property/${property._id}`}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

// import { Api, GitHub } from "@mui/icons-material";
// import { Box, Button, Container, Typography } from "@mui/material";
// import { usePageEffect } from "../core/page.js";
// import { useState, useEffect } from "react";
// import { Grid, TextField, Card, CardActions, CardContent } from "@mui/material";
// import { Link } from "react-router-dom";

// export default function Home(): JSX.Element {
//   usePageEffect({ title: "Eden CoSpaces" });
//   const [properties, setProperties] = useState([
//     {
//       _id: "1",
//       propertyName: "House 1",
//       address: "123 Main St, Anytown USA",
//       rent: "$1000/month",
//       bedrooms: "3",
//       bathrooms: "2",
//     },
//     {
//       _id: "2",
//       propertyName: "Apartment 2",
//       address: "456 Park Ave, Anytown USA",
//       rent: "$800/month",
//       bedrooms: "2",
//       bathrooms: "1",
//     },
//     {
//       _id: "3",
//       propertyName: "Condo 3",
//       address: "789 Elm St, Anytown USA",
//       rent: "$1200/month",
//       bedrooms: "4",
//       bathrooms: "2.5",
//     },
//   ]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     // Fetch properties from your backend here
//     // Example:
//     // fetch('/api/properties')
//     //   .then(res => res.json())
//     //   .then(data => setProperties(data))
//     // .catch(err => console.log(err))
//   }, []);

//   const filteredProperties = properties.filter((property) => {
//     return property.propertyName.toLowerCase().includes(search.toLowerCase());
//   });

//   return (
//     <div>
//       <Container sx={{ py: "3vh" }} maxWidth="sm">
//         <Typography sx={{ mb: 2 }} variant="h1" align="center">
//           Welcome to {APP_NAME}!
//         </Typography>

//         <Typography sx={{ mb: 4 }} variant="h3" align="center">
//           The future of living...
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             gridGap: "1rem",
//           }}
//         >
//           <Button
//             variant="outlined"
//             size="large"
//             href={`/api`}
//             children="Explore More Properties"
//             startIcon={<Api />}
//           />
//           <Button
//             variant="outlined"
//             size="large"
//             href="https://github.com/kriasoft/react-starter-kit"
//             children="View on GitHub"
//             startIcon={<GitHub />}
//           />
//         </Box>
//         <br/>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               id="property-search"
//               label="Search for a property"
//               variant="outlined"
//               fullWidth
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             {filteredProperties.map((property) => (
//               <Grid item xs={12} sm={6} md={4} key={property._id}>
//                 <Card>
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {property.propertyName}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       component="p"
//                     >
//                       {property.address}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       component="p"
//                     >
//                       Rent: {property.rent}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       component="p"
//                     >
//                       Bedrooms: {property.bedrooms}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       component="p"
//                     >
//                       Bathrooms: {property.bathrooms}
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary">
//                       <Link to={`/property/${property._id}`}>View Details</Link>
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// }
