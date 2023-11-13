export function prefix(location, ...prefixes) {
    return prefixes.some(
      prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    );
  }
  
  export function nav() {
    // The nav is always active
    return true;
  }
  
  export function tutorials(location) {
    return prefix(location, 'tutorials');
  }
  
  export function addTutorials(location) {
    return prefix(location, 'addTutorials');
  }