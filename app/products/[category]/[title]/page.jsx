"use client";

import { useParams } from "next/navigation";
import { Container, Typography } from "@mui/material";

const products = [
  {
    title: "General Purpose LED",
    description: "This is a general purpose LED suitable for UPS, telecom and power supply applications.",
    image: "/products/general_led.jpg"
  },
  {
    title: "High Bright LED",
    description: "High brightness LED for traffic signals and outdoor lighting.",
    image: "/products/high_bright_led.jpeg"
  }
];

export default function ProductDetail() {
  const params = useParams();
  const decodedTitle = decodeURIComponent(params.title);

  const product = products.find(p => p.title === decodedTitle);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", marginBottom: "20px" }}
      />

      <Typography variant="body1">
        {product.description}
      </Typography>
    </Container>
  );
}
