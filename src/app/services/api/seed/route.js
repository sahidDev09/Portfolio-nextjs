import client from "@/lib/api/db_config";
import { Myprojects } from "@/lib/myprojects";


export const GET = async () => {
  const db = await client.db("sahid-portfolio");
  const projectsCollection = db.collection("projects");
  try {
    await projectsCollection.deleteMany();
    const resp = await projectsCollection.insertMany(Myprojects);
    return Response.json({ message: "Seeded Successfully" });
  } catch (error) {
    console.log(error);
  }
};
