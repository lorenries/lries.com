import { useEffect, useState } from "react";
import Link from "next/link";

import Observable from "assets/icons/observable.svg";
import Twitter from "assets/icons/twitter.svg";
import Github from "assets/icons/github.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail("loren@lries.com");
  }, []);

  return (
    <footer className="my-8">
      <h3 className="text-xl my-6 font-bold">Get In Touch</h3>
      <p className="my-6">
        You can reach me at {email}. My public key is on{" "}
        <Link href="https://keybase.io/lries">
          <a>Keybase</a>
        </Link>
        .
      </p>
      <ul className="list-none flex align-center">
        <li>
          <Link
            href="https://beta.observablehq.com/@lorenries"
            title="Observable"
          >
            <a className="text-royal">
              <Observable className="w-8 h-full mr-4" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/lriesenfeld" title="Twitter">
            <a className="text-royal">
              <Twitter className="w-8 h-full mr-4" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/lorenries" title="Github">
            <a className="text-royal">
              <Github className="w-8 h-full" />
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
