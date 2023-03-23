import Item from "~/components/Item";
import NAV_DATA from "~/data";

export default function Home() {
  return (
    <div className="mt-6 px-40">
      {NAV_DATA.map((item) => (
        <Item item={item} key={item.name} />
      ))}
    </div>
  );
}
