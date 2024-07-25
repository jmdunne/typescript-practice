import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { testId: string } }
) => {
  return NextResponse.json({ hello: "World!", testId: params.testId });
};
