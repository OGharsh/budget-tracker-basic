# Budget Buddy

Budget Buddy is a simple and user-friendly budget tracker that helps you manage your finances by tracking your income and expenses. It includes features such as adding transactions, filtering by date, and visualizing spending trends with monthly graphs.

## Features

- **Add Income and Expenses**: Easily add transactions with descriptions, amounts, and dates.
- **Date Filtering**: Filter transactions by specific dates to view your financial history.
- **Spending Graphs**: Visualize your monthly spending with a bar chart, helping you understand your financial trends.
- **Local Storage**: Your transaction data is saved in your browser's local storage, so your data persists even after refreshing the page.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling for a clean, modern look.
- **JavaScript**: Functionality and interactivity.
- **Chart.js**: Library for creating the spending charts.

## Environment Setup

No environment variables are required. Data is stored locally in the browser with `localStorage`.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/OGharsh/budget-tracker-basic.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd budget-tracker-basic
    ```

3. **Open `index.html` in your browser**:
    ```bash
    open index.html
    ```

## Usage

1. **Adding Transactions**:
    - Enter a description in the "Text" field.
    - Enter the amount in the "Amount" field (use the buttons to specify if it’s income or an expense).
    - Enter the date of the transaction.
    - Click "Add Income" or "Add Expense" to record the transaction.

2. **Filtering Transactions**:
    - Use the date filter to view transactions for a specific date.
    - Click "Filter" to apply the filter.
    - Click "Clear Filter" to remove the date filter and view all transactions.

3. **Viewing Spending Graphs**:
    - Scroll down to the "Spending Chart" section to view your income and expenses for each month of the year.

## Screenshots

Add screenshots here before sharing the project.

## Deployment

Recommended platform: GitHub Pages.

Why: this is a static HTML/CSS/JavaScript app with no build step.

### GitHub Pages Steps

1. Push the repository to GitHub.
2. Open repository settings.
3. Go to `Pages`.
4. Select the `main` branch and root folder.
5. Save and test the generated Pages URL.

## Known Limitations

- Transactions are stored per browser/device using `localStorage`.
- Chart.js is loaded from a CDN, so internet access is required for charts.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Chart.js](https://www.chartjs.org/) for providing an easy-to-use charting library.
- All the tutorials and documentation that helped make this project possible.
