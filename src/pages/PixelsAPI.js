import { createClient } from "pexels";

const client = createClient(
  "Z3TNvhOLn16ZTLD7WUPAjEOE7OvNVxVEdq7cqX7DlZTNT945rUKdcPO2"
);

client.videos
  .search({ query: "nature", per_page: 10 })
  .then((response) => {
    console.log(response.videos);
  })
  .catch((error) => {
    console.error("Error fetching videos:", error);
  });
