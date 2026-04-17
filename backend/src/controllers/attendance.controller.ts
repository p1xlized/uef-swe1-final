import database from "../database";
import {attendance} from "../models/schema";
import {eq} from "drizzle-orm"

export interface Attendance {
    id: string;
    check_in_time: Date;
    check_out_time: Date;
    status: boolean;
    justification: string;
}

export default class AttendanceController {
    static findAll = async () => {
        let _ = database.select().from(attendance);
        return await _;
    }
    static findOne = async (id: string) => {
        if (id.length != 36) {
            return false;
        }
        let _ = database.select().from(attendance).where(eq(attendance.id, id));
        return await _;
    }
    static findOneAndUpdate = async (id: string, data: Attendance) => {

    }
}