import { serial, varchar, text } from "drizzle-orm/pg-core"; // Change the import to use pg-core
import { pgTable } from "drizzle-orm/pg-core";

export const Aioutput = pgTable('airesult', {
  id: serial('id').primaryKey(),
  formvalue: varchar('formvalue').notNull(),
  airesult: text('airesult'),
  templateSlug: varchar('templateSlug').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt')
});
