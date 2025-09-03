import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const cabinId = params?.cabinId;
  if (!cabinId) {
    return NextResponse.json({ error: "missing cabinId" }, { status: 400 });
  }
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
