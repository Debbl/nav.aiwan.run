import Item from "~/components/Item";
import NAV_DATA from "~/data";

export default function Home() {
  return (
    <div>
      {NAV_DATA.map((item) => (
        <Item item={item} key={item.name} />
      ))}
    </div>
  );
}
