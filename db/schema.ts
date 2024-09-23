import { sql } from "drizzle-orm";
import { pgTableCreator, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `services_${name}_table`);

export const users = createTable("users", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
