function generateFriendsNickname() {
    // Step 1: Ask for first name
    let firstName = prompt("Enter your first name:");

    // Step 2: Handle names shorter than 4 letters
    let shortName;
    if (firstName.length < 4) {
        shortName = firstName; // Use the whole name
    } else {
        shortName = firstName.slice(0, 4);
    }

    // Step 3: Random Friends universe surnames
    let surnames = [
        "Geller",
        "Bing",
        "Tribbiani",
        "Green",
        "Hannigan",
        "Buffay",
        "Tyler",
        "Crane"
    ];

    // Step 4: Pick a random surname
    let randomSurname = surnames[Math.floor(Math.random() * surnames.length)];

    // Step 5: Output nickname
    alert(shortName + " " + randomSurname);
}

// Run the function
generateFriendsNickname();
