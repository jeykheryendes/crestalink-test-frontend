export async function getProperties() {
  return await fetch("http://localhost:9000/api/v1/property", {
    next: { tags: ["properties"] },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      return [];
    });
}
