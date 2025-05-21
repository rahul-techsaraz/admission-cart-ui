export function formatDate(inputDate) {
  const [day, month, year] = inputDate.split('/').map(Number);

  // Get the ordinal suffix
  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return n + 'th';
    switch (n % 10) {
      case 1:
        return n + 'st';
      case 2:
        return n + 'nd';
      case 3:
        return n + 'rd';
      default:
        return n + 'th';
    }
  };

  // Month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formattedDate = `${getOrdinal(day)} ${monthNames[month - 1]}, ${year}`;
  return formattedDate;
}

// Example usage
