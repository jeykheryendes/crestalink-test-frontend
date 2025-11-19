export async function getProperties() {
  return await fetch("http://localhost:9000/api/v1/property")
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      return [];
    });
}
