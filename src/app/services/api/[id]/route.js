import client from "@/lib/api/db_config";
import { ObjectId } from "mongodb"; // Ensure you import ObjectId if you use it

export const GET = async (request, { params }) => {
  const db = await client.db("sahid-portfolio");
  const projectsCollection = db.collection("projects");

  try {
    
    const projectId = new ObjectId(params.id);

    const project = await projectsCollection.findOne({ _id: projectId });

    if (!project) {
      return new Response(
        JSON.stringify({
          message: "Project not found",
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify(project), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching project:", error);

    return new Response(
      JSON.stringify({
        message: "Failed to fetch project",
        error: error.message || "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
