// Initialize the customer queue
let queue = [];
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Add customers to the queue with their respective numbers
for (let i = 0; i < customers.length; i++) {
  // Prompt user to enter a customer name
  let customerName = prompt(`Enter customer name:`);
  // Store customer name and their position (number) in the queue
  queue.push({name: customerName, number: i+1});
}

// Process customer service requests
while (queue.length > 0) {
  // Prompt for the number to be serviced
  let servicedNumber = parseInt(prompt(`Enter number to be serviced:`));
  // Find the index of the customer with the given number in the queue
  let index = queue.findIndex(c => c.number === servicedNumber);
  
  // If a customer is found with the given number
  if (index !== -1) {
    // Alert the name of the customer being serviced
    alert(`Serving Customer: ${queue[index].name}`);
    // Remove the customer from the queue
    queue.splice(index, 1);
    // Log the updated queue to the console
    console.log("Updated Queue:", queue.map(c => c.name).join(", "));
  } else {
    // Alert if no customer is found with the given number
    alert(`No customer found with number: ${servicedNumber}`);
  }
}
