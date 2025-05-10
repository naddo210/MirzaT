// import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Box } from '@mui/material';
// import './Packages.css';

// const Packages = () => {
//   const packages = [
//     {
//       title: "Economy Umrah Package",
//       price: "65,000",
//       duration: "15 days",
//       features: [
//         "3-star hotel accommodation",
//         "Makkah Hotel: 1800 meters (Bus Service)",
//         "Madina Hotel: 800 meters",
//         "3 times buffet meal",
//         "Local ziyarat in luxury ac bus ",
//         "Visa processing",
//         "Via Flight",
//         "5 liters zamzam and bags kit complimentary ",
//       ],
//       image:
//         "https://images.unsplash.com/photo-1605553378313-22d0dc541393?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhamp8ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       title: "Standard Umrah Package",
//       price: "80,000",
//       duration: "15 days",
//       features: [
//         "3-star hotel accommodation",
//         "Makkah Hotel: 1200 meters (Bus Service)",
//          "Madina Hotel: 400 meters ",
//         "3 times buffet meal",
       
       
//         "Local ziyarat in luxury ac bus ",
//         "Visa processing",
//         "Direct Flight",
//         "5 liters zamzam and bags kit complimentary ",
//       ],
//       image:
//         "https://images.unsplash.com/photo-1676607186575-45f0b8afde74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhhamp8ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       title: "Premium Umrah Package",
//       price: "88,000",
//       duration: "15 days",
//       features: [
//         "3-star hotel accommodation",
//         "Makkah Hotel:  450 meters (Walking Distance)",
//         "Madina Hotel: 200 meters ",
//         "3 times buffet meal",
        
//         "Local ziyarat in luxury ac bus ",
//         "Visa processing",
//         "Direct Flight",
//         "5 liters zamzam and bags kit complimentary ",

//       ],
//       image:
//         "https://images.unsplash.com/photo-1513072064285-240f87fa81e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhamp8ZW58MHx8MHx8fDA%3D",
//     },
    
//   ];

//   return (
//     <Container maxWidth="lg" sx={{ mt: 10, mb: 8 }}>
//       <Box textAlign="center" mb={6}>
//         <Typography
//           variant="h3"
//           component="h1"
//           color="text.secondary"
//           gutterBottom>
//           Begin Your spiritual Adventure
//         </Typography>
//         <Typography variant="h6" color="text.secondary">
//           Choose the perfect package for your spiritual journey.
//         </Typography>
//       </Box>

//       <Grid container spacing={4}>
//         {packages.map((pkg, index) => (
//           <Grid item xs={12} md={4} key={index}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={pkg.image}
//                 alt={pkg.title}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   {pkg.title}
//                 </Typography>
//                 <Typography variant="h4" color="primary" gutterBottom>
//                   ₹{pkg.price}
//                 </Typography>
//                 <Chip label={pkg.duration} sx={{ mb: 2 }} />
//                 {pkg.features.map((feature, idx) => (
//                   <Typography key={idx} variant="body2" paragraph>
//                     • {feature}
//                   </Typography>
//                 ))}
//                 <Button 
//                   variant="contained" 
//                   fullWidth
//                   onClick={() => {
//                     document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
//                   }}
//                 >
//                   Book Now
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Packages;
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import './Packages.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await fetch('https://mirzat.onrender.com/api/packages');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPackages(data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          component="h1"
          color="text.secondary"
          gutterBottom>
          Begin Your Spiritual Adventure
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Choose the perfect package for your spiritual journey.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {packages.map((pkg, index) => (
          <Grid item xs={12} md={4} key={pkg._id || index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={pkg.image}
                alt={pkg.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pkg.title}
                </Typography>
                <Typography variant="h4" color="primary" gutterBottom>
                  ₹{pkg.price}
                </Typography>
                <Chip label={pkg.duration} sx={{ mb: 2 }} />
                {pkg.features.map((feature, idx) => (
                  <Typography key={idx} variant="body2" paragraph>
                    • {feature}
                  </Typography>
                ))}
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Packages;
