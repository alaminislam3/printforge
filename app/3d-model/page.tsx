import ModelsGrid from "@/app/Components/ModelGrid"
import { getAllModel } from "../lib/models"


export default async function Page() {
    const models = await getAllModel()
    return <ModelsGrid title="3D Models" models={models} />
}