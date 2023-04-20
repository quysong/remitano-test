import Link from "next/link";
import { useState } from "react";
import { Form } from "./style";
import { isValidYoutubeUrl } from "../../utils/functions";

export default function ShareForm() {
  const [url, setUrl] = useState<undefined | string>();
  return (
    <div>
      <h1>Share a Youtube movie</h1>
      <div>
        <Form action="/api/movie" method="post">
          <div>
            <label htmlFor="input-url">Youtube URL:</label>
            <input id="input-url" name="url" onChange={e => setUrl(e.target.value.toString())} />
            {url !== undefined && !isValidYoutubeUrl(url) ? <div>Invalid Youtube url format</div> : null}
          </div>
          <button type="submit">Share</button>
        </Form>
      </div>
    </div>
  );
}
