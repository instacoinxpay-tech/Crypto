import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const emailSubscriptions = pgTable("email_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
});

export const insertEmailSchema = createInsertSchema(emailSubscriptions).pick({
  email: true,
});

export type InsertEmail = z.infer<typeof insertEmailSchema>;
export type EmailSubscription = typeof emailSubscriptions.$inferSelect;

export interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  sparkline: number[];
  icon: string;
  color: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
}
