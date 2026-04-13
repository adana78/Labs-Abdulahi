'use client'
import React, { useEffect, useState } from 'react'

function Transactions() {

    const [transactions, setTransactions] = useState([])

    // http://localhost:3000/api/transactions?type=income
    async function getTransactions(type) {
        const url = type ? `/api/transactions?type=${type}` : '/api/transactions'
        const res = await fetch(url)
        const data = await res.json()
        setTransactions(data)
    }

    // is a react hook that runs after the component is rendered
    useEffect(() => {

        getTransactions()
    }, [])


    return (
        <div>
            <main className="page">
                <h1>Transactions</h1>

                <div className="filter-bar">
                    <label htmlFor="type-filter">Filter by type:</label>
                    <select id="type-filter">
                        <option value="all">All</option>
                        <option value="income" >Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${transactions.map(t => }
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default Transactions