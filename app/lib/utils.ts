// Example utility function to format a date to a readable string
export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };
  
  // Example utility function to generate a unique ID (useful for creating keys in lists)
  export const generateUniqueId = (): string => {
    return `id-${Math.random().toString(36).substr(2, 9)}`;
  };
  
  // Example utility function for deep cloning objects (useful to avoid mutating original data)
  export const deepClone = <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
  };
  
  // Example utility to capitalize the first letter of a string
  export const capitalizeFirstLetter = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  