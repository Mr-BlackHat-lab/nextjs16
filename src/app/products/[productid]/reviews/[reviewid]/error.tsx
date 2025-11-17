"use client";
export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>{error.message}</h1>
      {/*<h1>Error in review id (randomly gentrated error)</h1>*/}
    </div>
  );
}
