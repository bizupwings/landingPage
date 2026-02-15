export default function ProductDetail({ params }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Product slug: {params.slug}</h1>
    </div>
  );
}
