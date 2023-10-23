import { Content } from "@/types/server";
import { redirect } from "next/navigation";

const db = "http://127.0.0.1:7777";

export const healthcheck = async () => {
  try {
    const data = await fetch(`${db}/healthcheck`);
    const status = await data.text();

    if (status !== "live") {
      redirect("/404");
    }

    return status;
  } catch (_err) {
    redirect("/404");
  }
};

export const getEntries = async (): Promise<Content[]> => {
  try {
    const res = await fetch(`${db}/get`);
    const data = await res.json();

    return (data ?? []) as Content[];
  } catch {
    return [] as Content[];
  }
};
