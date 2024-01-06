import { Client, LogLevel } from "@notionhq/client";
import { type QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { type NextRequest } from "next/server";

type Params = {
  code: string;
};

const INTEGRATION_SECRET = "secret_W4UG7cmNojXJa6zMgLN34HaVmJGaimRxy2frviQws9r";
const DATABASE_ID = "2c0b5c598a934d5b8f5265cfa6b31790";

const notion = new Client({
  auth: INTEGRATION_SECRET,
  logLevel: LogLevel.DEBUG,
});

const GETUserInfo = async (_: NextRequest, { params }: { params: Params }) => {
  const res: QueryDatabaseResponse = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "Code",
      rich_text: {
        equals: params.code, // query param
      },
    },
  });

  return Response.json(res.results);
};

export const GET = GETUserInfo;
