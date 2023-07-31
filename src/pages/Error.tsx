import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    console.log(error);
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          {error.data?.message && <i>error.data.message</i>}
        </p>
      </div>
    )
  } else {
    return <div>Oops</div>
  }
}
