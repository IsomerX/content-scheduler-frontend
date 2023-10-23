import { getEntries, healthcheck } from "@/util/server";
export default async function Home() {
  const data = await getEntries();
  console.log(data);
  return (
    <div className="text-3xl font-bold p-5 space-y-5">
      {data.map((item) => (
        <div key={item.id}>
          <span className="text-white/30">
            {new Date(item.date).toLocaleTimeString()}
          </span>{" "}
          - {item.content}
        </div>
      ))}
    </div>
  );
}
