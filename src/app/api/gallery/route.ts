import { NextResponse } from "next/server";
import { galleryData } from "@/data/galleryData";

export async function GET() {
  // If Cloudinary credentials are set, this endpoint can optionally fetch Cloudinary resources by tag/folder.
  // Otherwise, it returns curated authentic infrastructure items.
  return NextResponse.json({
    success: true,
    total: galleryData.length,
    items: galleryData,
  });
}
