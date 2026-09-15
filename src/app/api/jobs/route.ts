import { NextResponse } from "next/server";

type Payload = {
  fullName?: string;
  jobTitle?: string;
  phone?: string;
  workType?: string;
  lastJob?: string;
  resume?: string;
  area?: string;
  birthDate?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;

  if (!body.fullName || !body.phone || !body.jobTitle) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // Serverless-friendly handler: validate and acknowledge. Persist via email/CRM later.
  console.info("[jobs-application]", {
    fullName: body.fullName,
    jobTitle: body.jobTitle,
    phone: body.phone,
    workType: body.workType,
    birthDate: body.birthDate,
    area: body.area,
  });

  return NextResponse.json({ ok: true });
}
