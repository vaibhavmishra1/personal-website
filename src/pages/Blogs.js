import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Link,
  Stack,
  Divider 
} from '@mui/material';

const Blogs = () => {
  const projects = [
    {
      title: "Project Title 1",
      image: "/images/blog5.jpeg", // Add your project image path
      authors: ["Author 1", "Author 2"],
      publishedIn: "Conference/Journal Name (Year)",
      description: "Description of your project. This can be multiple lines long and explain the key aspects of your work. Make it engaging and informative.",
      links: [
        { label: "Website", url: "#" },
        { label: "Paper", url: "#" },
        { label: "GitHub", url: "#" },
      ]
    },
    // Add more projects following the same structure
  ];

  return (
    <Box sx={{ maxWidth: '100%', py: 4 }}>
      {/* Heading */}
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{ 
          mb: 4,
          fontWeight: 600,
          color: 'primary.main',
          textAlign: 'left',
          fontSize: { xs: '2rem', md: '2.5rem' },
        }}
      >
        Blogs
      </Typography>

      {projects.map((project, index) => (
        <Card 
          key={index} 
          sx={{ 
            display: 'flex', 
            mb: 4, 
            backgroundColor: 'background.paper',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: 'action.hover',
            }
          }}
        >
          {/* Project Image */}
          <CardMedia
            component="img"
            sx={{ 
              width: 300,
              objectFit: 'cover',
              borderRadius: 1
            }}
            image={project.image}
            alt={project.title}
          />

          {/* Project Content */}
          <CardContent sx={{ flex: 1, pl: 3 }}>
            {/* Title */}
            <Typography variant="h5" component="h2" color="primary" gutterBottom>
              {project.title}
            </Typography>

            {/* Authors */}
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {project.authors.join(", ")}
            </Typography>

            {/* Published In */}
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {project.publishedIn}
            </Typography>

            {/* Description */}
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              {project.description}
            </Typography>

            {/* Links */}
            <Stack 
              direction="row" 
              spacing={2} 
              divider={<Divider orientation="vertical" flexItem />}
            >
              {project.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.url}
                  underline="hover"
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Blogs;
