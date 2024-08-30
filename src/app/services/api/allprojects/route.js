import client from "@/lib/api/db_config";


export const GET = async () => {
  const db = await client.db("sahid-portfolio");
  const projectsCollection = db.collection("projects");

  try {
    // Fetch projects and convert them to an array
    const projects = await projectsCollection.find().toArray();

    // Return the projects as a JSON response
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);

    // Return an error response
    return new Response(
      JSON.stringify({
        message: "Failed to fetch projects",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
