/**@type {import ("drizzle-kit".Config)} */
export default {
  schema:"./utils/Schema.tsx",
  dialect:'postgresql',
  dbCredentials:{
    url:'postgresql://mydb_owner:EXioa24hDqHG@ep-icy-brook-a5kqnb26.us-east-2.aws.neon.tech/mydb?sslmode=require'

  }
}