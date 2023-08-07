const PromptsDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Prompts Detail Page</h1>
      <p>id: {params.id}</p>
    </div>
  );
};

export default PromptsDetailPage;