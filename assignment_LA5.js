// Initialize the hash table to store customer data
let hashTable = {};
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Add customers to the hash table with their respective numbers
for (let i = 0; i < customers.length; i++) {
  // Prompt user to enter a customer name
  let customerName = prompt(`Enter customer name:`);
  // Store customer name in hash table with key as their position (number)
  hashTable[i + 1] = customerName;
}

// Process customer service requests
while (Object.keys(hashTable).length > 0) {
  // Prompt for the number to be serviced
  let servicedNumber = parseInt(prompt(`Enter number to be serviced:`));

  // If a customer exists with the given number in the hash table
  if (hashTable[servicedNumber]) {
    // Alert the name of the customer being serviced
    alert(`Serving Customer: ${hashTable[servicedNumber]}`);
    // Remove the customer from the hash table
    delete hashTable[servicedNumber];
    // Log the updated hash table to the console
    console.log("Updated Hash Table:", hashTable);
  } else {
    // Alert if no customer is found with the given number
    alert(`No customer found with number: ${servicedNumber}`);
  }
}
