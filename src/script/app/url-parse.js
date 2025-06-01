function getActivePath() {
  const path = location.hash.replace("#", "");
  return path || "/";
}

function extractPathname(path) {
  const pathname = path.split("/");

  return {
    resource: pathname[1] || null,
    id: pathname[2] || null,
  };
}

function constructRouteFromSegments(pathSegment) {
  let path = "";

  if (pathSegment.resource) {
    path = path.concat(`/${pathSegment.resource}`);
  }

  if (pathSegment.id) {
    path = path.concat(`/:id`);
  }

  return path || "/";
}

export function getRoute() {
  const path = getActivePath();
  const segment = extractPathname(path);

  return constructRouteFromSegments(segment);
}
