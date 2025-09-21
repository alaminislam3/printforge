import { getAllModel } from "../lib/models"
import type {Model} from "@/app/types" 

export default async function modelpage(){
   const models = await getAllModel()
   return models.map((model: Model)=> <p key={model.id}> {model.name} </p>)
}