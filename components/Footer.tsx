import Image from "next/image";
import GithubIcon from "~/assets/images/github.svg";

function Footer() {
  return (
    <div className="flex items-center justify-center py-6">
      <a href="https://github.com/Debbl/nav.aiwan.run">
        <Image src={GithubIcon} alt="" unoptimized></Image>
      </a>
      <a
        href="https://dokidokiweb.com/"
        target="_blank"
        rel="noreferrer"
        className="fixed right-2 bottom-0 opacity-0 hover:opacity-100"
      >
        tool
      </a>
    </div>
  );
}

export default Footer;
