import {mysqlTable, int} from "drizzle-orm/mysql-core";

export const test = mysqlTable('test', {
    id: int()
});