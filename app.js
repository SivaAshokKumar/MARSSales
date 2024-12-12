import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkE7KpR817QYZwfpRAFrdGIs5mHhd88t4",
  authDomain: "salesapp-4b26a.firebaseapp.com",
  projectId: "salesapp-4b26a",
  storageBucket: "salesapp-4b26a.firebasestorage.app",
  messagingSenderId: "158172993620",
  appId: "1:158172993620:web:0a387adfca3a4425c375c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to "expenses" collection
const expensesCollection = collection(db, "expenses");

// Save data on button click
document.getElementById("saveButton").addEventListener("click", async () => {
  const saleAmount = document.getElementById("saleAmount").value;
  const expenseAmount = document.getElementById("expenseAmount").value;

  if (saleAmount && expenseAmount) {
    try {
      await addDoc(expensesCollection, {
        sale: parseFloat(saleAmount),
        expense: parseFloat(expenseAmount),
        timestamp: new Date(),
      });
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data. Please try again.");
    }
  } else {
    alert("Please fill in both fields.");
  }
});
