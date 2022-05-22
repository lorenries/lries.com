import { useRef, useState, useEffect } from "react";
import Script from "next/script";

interface Props {
  id: string;
}

interface Twitter {
  widgets: {
    createTweet: (id: string, el: HTMLDivElement) => void;
  };
}

const Tweet = ({ id }: Props) => {
  const [twitter, setTwitter] = useState<Twitter | undefined>();
  const ref = useRef<HTMLDivElement>();

  const onLoad = () => {
    if (!(window as any).twttr?.widgets?.createTweet) {
      console.error("Twitter API failed to load");
      return;
    }

    setTwitter((window as any).twttr);
  };

  useEffect(() => {
    if (twitter) {
      twitter.widgets.createTweet(id, ref?.current);
    }
  }, [id, twitter]);

  return (
    <>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={onLoad}
      />
      <div ref={ref} />
    </>
  );
};

export default Tweet;
