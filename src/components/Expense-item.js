import './expense-item.css'

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <h2>Expense Item TITLE</h2>

            <div><p>DATE</p></div>
            <div><p>DESC</p></div>
            <div><h3>PRICE</h3></div>
        </div>
    )
}

export default ExpenseItem
