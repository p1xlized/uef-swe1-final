import Router, {Request, Response} from 'express';
import AttendanceController from "../controllers/attendance.controller";

const attendanceRouter = Router();

attendanceRouter.get("/", (req: Request, res: Response) => {

});

attendanceRouter.post("/list", async (req: Request, res: Response) => {
    const allAttendances = await AttendanceController.findAll();
    res.status(200).json(allAttendances);
});

attendanceRouter.post("/:child_id", async (req: Request, res: Response) => {

});

export default attendanceRouter;