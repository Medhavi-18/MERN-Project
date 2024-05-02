import Express from "express";
import { create, deleteUser, getAll, getOne, update } from "../controller/userController.js";


const route = Express.Router();

//1)for 1st api
route.post("/create" , create);


//2)for 2nd api
route.get("/getall" , getAll);


//3)for 3rd api(fetching id for getting particular record)
route.get("/getone/:id", getOne);

//4)for 4th api(updating data by its id)
route.put("/update/:id", update);

//5)for 5th api(deleting data by its id)
route.delete("/delete/:id",deleteUser);


export default route;