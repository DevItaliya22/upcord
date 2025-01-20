import { type Config } from "drizzle-kit";

import { env } from "@upcord/env";

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["dashboard_*"],
} satisfies Config;
