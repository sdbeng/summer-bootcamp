import './expense-item.css'

const DUMMY_DATA = [
    {
        title:'Expense Item 1',
        date: new Date(2021,6,2).toISOString(),
        description:'Item 1 description',
        price:249.99
    },
]


function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <h2>{DUMMY_DATA[0].title}</h2>

            <div><p>{DUMMY_DATA[0].date}</p></div>
            <div className="expense-item__desc">
                <p>{DUMMY_DATA[0].description}</p>
            </div>
            <div><h3>${DUMMY_DATA[0].price}</h3></div>
        </div>
    )
}

export default ExpenseItem
