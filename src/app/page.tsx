import Image from "next/image";
import Footer from "~/components/Footer";
import Item from "~/components/Item";
import NAV_DATA from "~/data";

export default function Page() {
  return (
    <div className="mt-12">
      <div className="mx-auto">
        <div className="text-center">
          <div className="inline-block h-24 w-96 rounded-xl border-2 px-2">
            <a
              title="MDN"
              href="https://developer.mozilla.org/zh-CN/"
              className="flex size-full items-center gap-3"
            >
              <div className="w-[30px] shrink-0 overflow-hidden rounded-sm">
                <Image
                  src="https://developer.mozilla.org/favicon-48x48.cbbd161b.png"
                  alt="MDN"
                  width={30}
                  height={30}
                  unoptimized
                />
              </div>
              <div>
                <h2 className="text-left">MDN</h2>
                <p className="text-left text-gray-500">
                  Resources for Developers, by Developers
                </p>
              </div>
            </a>
          </div>
        </div>

        {NAV_DATA.map((item) => (
          <Item item={item} key={item.name} />
        ))}

        <Footer />
      </div>
    </div>
  );
}
